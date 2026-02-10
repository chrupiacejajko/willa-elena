import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the website URL
const SITE_URL = 'https://willa-elena.pl';

// Start of the sitemap XML
const sitemapHeader = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

// End of the sitemap XML
const sitemapFooter = `
</urlset>`;

// List of routes
const routes = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/pokoje', priority: '0.8', changefreq: 'monthly' },
    { path: '/apartament', priority: '0.8', changefreq: 'monthly' },
    { path: '/cennik', priority: '0.7', changefreq: 'monthly' },
    { path: '/atrakcje', priority: '0.6', changefreq: 'monthly' },
    { path: '/okolica', priority: '0.6', changefreq: 'monthly' },
    { path: '/kontakt', priority: '0.5', changefreq: 'yearly' },
];

const generateSitemap = () => {
    let sitemapContent = sitemapHeader;

    routes.forEach(route => {
        sitemapContent += `
  <url>
    <loc>${SITE_URL}/#${route.path === '/' ? '' : route.path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
    });

    sitemapContent += sitemapFooter;

    const distPath = path.resolve(__dirname, '../public/sitemap.xml');

    // Ensure public directory exists (though it should in a standard Vite project)
    // We write to 'public' so it gets copied to 'dist' on build
    fs.writeFileSync(distPath, sitemapContent);

    console.log(`✅ Sitemap generated at ${distPath}`);
};

try {
    generateSitemap();
} catch (error) {
    console.error('❌ Error generating sitemap:', error);
}
