import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationalQueries = async () => {
  // fluent api
  //   const result = await prisma.user
  //     .findUnique({
  //       where: {
  //         id: 3,
  //       },
  //       // include: {
  //       //   posts: true,
  //       // },
  //     })
  //     .posts();
  //   console.log(result);

  // relational filters
  const publishedPostUsers = await prisma.user.findMany({
    include: {
      posts: {
        where: {
          published: true,
        },
      },
    },
  });
  console.dir(publishedPostUsers, { depth: Infinity });
};

relationalQueries();
