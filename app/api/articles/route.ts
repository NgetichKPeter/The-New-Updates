import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET all published articles
export async function GET() {
  try {
    const articles = await prisma.article.findMany({
      where: {
        publishedAt: { not: null }
      },
      orderBy: {
        publishedAt: 'desc'
      },
      include: {
        author: { select: { name: true } },
        category: true
      }
    });
    
    return NextResponse.json(articles);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 });
  }
}

// POST a new article (Admin)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, slug, excerpt, content, categoryId, authorId, isBreaking } = body;

    const newArticle = await prisma.article.create({
      data: {
        title,
        slug,
        excerpt,
        content,
        isBreaking,
        publishedAt: new Date(),
        category: { connect: { id: categoryId } },
        author: { connect: { id: authorId } },
      }
    });

    return NextResponse.json(newArticle, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create article' }, { status: 500 });
  }
}
