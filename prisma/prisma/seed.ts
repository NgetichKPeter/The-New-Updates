import { PrismaClient, Role } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // 1. Create Default Categories
  const categories = ['World', 'Tech', 'Business', 'Culture', 'Opinion'];
  for (const name of categories) {
    await prisma.category.upsert({
      where: { slug: name.toLowerCase() },
      update: {},
      create: { name, slug: name.toLowerCase() },
    });
  }

  // 2. Create Admin User
  const hashedPassword = await bcrypt.hash('AdminPass123!', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@thenewupdates.com' },
    update: {},
    create: {
      name: 'Editor In Chief',
      email: 'admin@thenewupdates.com',
      password: hashedPassword,
      role: Role.ADMIN,
    },
  });

  // 3. Create Sample Article
  const techCat = await prisma.category.findUnique({ where: { slug: 'tech' } });

  if (techCat) {
    await prisma.article.upsert({
      where: { slug: 'welcome-to-the-new-updates' },
      update: {},
      create: {
        title: 'Welcome to The New Updates',
        slug: 'welcome-to-the-new-updates',
        excerpt: 'Introducing a modern editorial news experience built for high velocity reporting.',
        content: 'Today marks the official launch of The New Updates. Our platform merges classic journalism layouts with cutting-edge web performance...',
        isBreaking: true,
        publishedAt: new Date(),
        authorId: admin.id,
        categoryId: techCat.id,
      },
    });
  }

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
