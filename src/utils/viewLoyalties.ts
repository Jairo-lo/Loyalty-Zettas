import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    const loyalties = await prisma.loyalty.findMany();
    console.log(loyalties);
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
