import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({ log: ['query'] })

async function main() {
  const users = [
    {
      email: 'robert@example.com',
      name: 'Bob',
    },
    {
      email: 'sally@example.com',
      name: 'Sal',
    },
  ]

  const eggs = [
    {
      weight: 900
    },
    {
      weight: 899
    },
    {
      weight: 875
    },
    {
      weight: 904
    },
    {
      weight: 858
    },
    {
      weight: 914
    }
  ];

  const slots = [
    {
      name: "top right",
    },
    {
      name: "top left",
    },
    {
      name: "bottom right",
    },
    {
      name: "bottom left",
    },
  ];

  const seeds = users.map(async (user) => {
    await prisma.user.upsert({
      where: {
        email: user.email
      },
      update: user,
      create: user,
    })
  }).concat(
    eggs.map(async (egg) => {
      await prisma.eggsDozen.create({
        data: egg,
      })
    })
  ).concat(
    slots.map(async (slot) => {
      await prisma.slot.upsert({
        where: {
          name: slot.name
        },
        update: slot,
        create: slot,
      })
    })
  )

  await Promise.all(seeds)
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
