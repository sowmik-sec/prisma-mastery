import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const paginationSorting = async () => {
  //   const offsetData = await prisma.post.findMany({
  //     skip: 2,
  //     take: 2,
  //   });
  //   console.log({ offsetData });
  const cursorData = await prisma.post.findMany({
    skip: 2,
    take: 2,
    cursor: {
      id: 2,
    },
    orderBy: {
      title: "desc",
    },
  });
  console.log({ cursorData });
};

paginationSorting();
