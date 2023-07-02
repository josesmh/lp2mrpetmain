const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const fs = require('fs');
const path = require('path');

const seedPath = path.resolve('prisma/seed.json');

const seedContent = fs.readFileSync(seedPath, 'utf8');

async function main() {
  const João = await prisma.User.create({
    data: {
      CPF: 125.212353463,
      name: 'João',
    },
  });

  const products = JSON.parse(seedContent).products;

  for (const product of products) {
    await prisma.products.create({
      data: product,
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
