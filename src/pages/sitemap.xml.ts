import type { APIRoute } from "astro";
import { pageMatrix } from "../data/pageMatrix";
import { site } from "../data/site";

const urls = pageMatrix.map((page) => new URL(page.route, site.domain).toString());

export const GET: APIRoute = () =>
  new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
      `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
      urls.map((url) => `  <url><loc>${url}</loc></url>`).join("\n") +
      `\n</urlset>\n`,
    {
      headers: {
        "Content-Type": "application/xml; charset=utf-8"
      }
    }
  );
