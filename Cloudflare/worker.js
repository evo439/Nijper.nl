/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run "npm run dev" in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run "npm run deploy" to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
  async fetch(request, env, ctx) {
    // 1. Handle CORS (so your GitHub Pages site is allowed to talk to this worker)
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*", // Change to "https://nijper.nl" after testing to lock it down
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    // Handle preflight OPTIONS requests
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    // 2. Get the target URL from the query string (e.g., ?url=https://google.com)
    const { searchParams } = new URL(request.url);
    const targetUrl = searchParams.get("url");

    if (!targetUrl) {
      return new Response(JSON.stringify({ error: "Missing 'url' parameter" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // 3. Grab the API key securely from Cloudflare's environment variables
    const apiKey = env.PAGESPEED_API_KEY;
    
    // 4. Construct the Google PageSpeed Insights API URL
    const googleApiUrl = `https://pagespeedonline.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(targetUrl)}&key=${apiKey}&category=PERFORMANCE&category=SEO`;

    try {
      // 5. Fetch the data from Google
      const response = await fetch(googleApiUrl);
      const data = await response.json();

      // 6. Return the data back to your website
      return new Response(JSON.stringify(data), {
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: "Failed fetching PageSpeed data" }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }
  },
};