const { createClient } = require("@sanity/client");
const fs = require("fs");
const path = require("path");

const client = createClient({
  projectId: "ke6tbdpi",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

async function generateSitemap() {
  // Fetch all project slugs from Sanity
  const projects = await client.fetch(`
    *[_type == "project"]{
      "slug": slug.current,
      _updatedAt
    }
  `);

  // Base URLs for the sitemap
  const baseUrl = "https://r-vis.io";
  const staticPages = [
    { url: "/", priority: "1.0", changefreq: "weekly" },
    { url: "/about", priority: "0.8", changefreq: "monthly" },
    { url: "/contact", priority: "0.8", changefreq: "monthly" },
  ];

  // Generate sitemap XML
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add static pages
  staticPages.forEach((page) => {
    sitemap += `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  });

  // Add project pages
  projects.forEach((project) => {
    const lastmod = new Date(project._updatedAt).toISOString().split("T")[0];
    sitemap += `
  <url>
    <loc>${baseUrl}/projects/${project.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  // Write sitemap to public directory
  const publicDir = path.join(process.cwd(), "public");
  fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap);
  console.log("Sitemap generated successfully!");
}

generateSitemap().catch(console.error);
