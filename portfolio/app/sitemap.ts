import { MetadataRoute } from 'next';
import { projects } from '@/lib/data/projects';
import { blogPosts } from '@/lib/data/testimonials';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bereketanteneh.com';

  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...projectPages,
    ...blogPages,
  ];
}
