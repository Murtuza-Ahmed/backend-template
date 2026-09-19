import { PrismaPg } from '@prisma/adapter-pg';
// import { PrismaClient } from '@prisma/client';
import { PrismaClient } from '../generated/prisma/client.ts';
import 'dotenv/config';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

try {
  await prisma.systemSetting.upsert({
    where: { key: 'app.name' },
    update: {},
    create: {
      key: 'app.name',
      value: 'backend-template',
    },
  });
  console.log('Seed completed successfully.')
} catch (error) {
  console.error('Seed faield', error);
  process.exitCode = 1;
} finally {
  await prisma.$disconnect();
}
