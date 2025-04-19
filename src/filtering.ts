import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const filtering = async () => {
  const andFiltering = await prisma.post.findMany({
    where: {
      AND: [
        {
          title: {
            contains: "post",
          },
        },
        {
          published: true,
        },
      ],
    },
  });
  const orFiltering = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: "post",
          },
        },
        {
          published: true,
        },
      ],
    },
  });
  //   console.log(orFiltering);

  const notFiltering = await prisma.post.findMany({
    where: {
      NOT: [
        {
          title: {
            contains: "post",
          },
        },
      ],
    },
  });

  const startsWith = await prisma.user.findMany({
    where: {
      email: {
        startsWith: "j", // endsWith, contains, equals
      },
    },
  });

  const userNameArray = ["John Doe", "John Doe2", "user5"];
  const userNamesByArray = await prisma.user.findMany({
    where: {
      username: {
        in: userNameArray,
      },
    },
  });

  const inDepthArray = await prisma.user.findUnique({
    where: {
      id: 3,
    },
    include: {
      posts: {
        include: {
          postCategories: {
            include: {
              category: true,
            },
          },
        },
      },
    },
  });

  console.dir(inDepthArray, { depth: Infinity });
};

filtering();
