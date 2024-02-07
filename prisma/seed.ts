import { PrismaClient } from '@prisma/client';
import { authors } from './seeds';

const prisma = new PrismaClient();

async function main() {
  for (const author of authors) {
    await prisma.author.upsert({
      where: { id: author.id },
      update: {},
      create: author,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
