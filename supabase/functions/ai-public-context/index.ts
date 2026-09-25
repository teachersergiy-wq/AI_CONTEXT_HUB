import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
};

const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const publishableKeys = JSON.parse(Deno.env.get("SUPABASE_PUBLISHABLE_KEYS") ?? "{}");
const publishableKey =
  publishableKeys["default"] ?? Deno.env.get("SUPABASE_ANON_KEY")!;

const supabase = createClient(supabaseUrl, publishableKey);

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "GET") {
    return new Response(JSON.stringify({ error: "GET only" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const url = new URL(req.url);
  const project = url.searchParams.get("project");
  const format = url.searchParams.get("format") ?? "json";

  if (!project) {
    return new Response(JSON.stringify({ error: "Missing project" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const { data, error } = await supabase
    .from("ai_public_context")
    .select("*")
    .eq("project_slug", project)
    .order("sort_order", { ascending: true })
    .order("document_slug", { ascending: true });

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  if (format === "markdown") {
    const projectName = data?.[0]?.project_name ?? project;
    const lines = [
      "# " + projectName,
      "",
      ...(data ?? []).flatMap((document) => [
        "## " + document.document_title,
        "",
        document.content ?? "",
        "",
      ]),
    ];

    return new Response(lines.join("\n"), {
      headers: {
        ...corsHeaders,
        "Content-Type": "text/markdown; charset=utf-8",
      },
    });
  }

  return new Response(
    JSON.stringify({ project, documents: data ?? [] }),
    {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json; charset=utf-8",
      },
    },
  );
});
