export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://vinici.app/sitemap.xml',
  }
}
