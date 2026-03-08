import { MetadataRoute } from 'next';
import { allLanguages } from '@/data/languages';

const baseUrl = 'https://casayolotl.com';

export default function sitemap(): MetadataRoute.Sitemap {
    const sitemaps: MetadataRoute.Sitemap = [];

    allLanguages.forEach((lang) => {
        // Essential pages mapping for each locale
        const paths = ['/', '/esencia', '/cultura', '/contacto'];

        paths.forEach((path) => {
            sitemaps.push({
                url: `${baseUrl}/${lang.code}${path === '/' ? '' : path}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: path === '/' ? 1 : 0.8,
            });
        });
    });

    return sitemaps;
}
