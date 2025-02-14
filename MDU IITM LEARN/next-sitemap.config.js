/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://mduiitmlearn.vercel.app",
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    sitemapSize: 5000,
    exclude: ["/admin/*", "/dashboard/*"], 
  
    additionalPaths: async (config) => [
      { loc: "/notes", lastmod: new Date().toISOString() },
      { loc: "/syllabus", lastmod: new Date().toISOString() },
      { loc: "/cgpa", lastmod: new Date().toISOString() },
      { loc: "/pyqs", lastmod: new Date().toISOString() },
    ],
  };
  