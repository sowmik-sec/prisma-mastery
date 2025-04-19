import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationalQueries = async () => {
  // fluent api
  const result = await prisma.user
    .findUnique({
      where: {
        id: 3,
      },
      // include: {
      //   posts: true,
      // },
    })
    .posts();

  console.log(result);
};

relationalQueries();
