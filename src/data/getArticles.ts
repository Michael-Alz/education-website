import { prisma } from '../lib/prisma';
import type { Article as UIArticle } from './articles';

function toUIArticle(row: {
  id: string;
  title: string;
  subtitle: string | null;
  publishedAt: Date;
  imageUrl: string | null;
  excerpt: string | null;
  body: string;
}): UIArticle {
  return {
    id: row.id,
    title: row.title,
    subtitle: row.subtitle ?? undefined,
    publishedAt: row.publishedAt.toISOString(),
    imageUrl: row.imageUrl ?? undefined,
    excerpt: row.excerpt ?? undefined,
    body: row.body,
  };
}

export const getAllArticles = async (): Promise<UIArticle[]> => {
  try {
    const rows = await prisma.article.findMany({
      orderBy: { publishedAt: 'desc' },
      select: {
        id: true,
        title: true,
        subtitle: true,
        publishedAt: true,
        imageUrl: true,
        excerpt: true,
        body: true,
      },
    });
    return rows.map(toUIArticle);
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
};

export const getArticleById = async (id: string): Promise<UIArticle | null> => {
  try {
    const row = await prisma.article.findUnique({
      where: { id },
      select: {
        id: true,
        title: true,
        subtitle: true,
        publishedAt: true,
        imageUrl: true,
        excerpt: true,
        body: true,
      },
    });
    return row ? toUIArticle(row) : null;
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
};
