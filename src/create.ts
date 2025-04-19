import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "This is my second title",
  //       content: "This is my second post",
  //       authorName: "John Doe",
  //       published: true,
  //     },
  //   });
  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "This is my third title",
        content: "This is my third post",
        authorName: "John Doe",
        published: false,
      },
      {
        title: "This is my fourth title",
        content: "This is my fourth post",
        authorName: "John Doe",
        published: true,
      },
      {
        title: "This is my fifth title",
        content: "This is my fifth post",
        authorName: "John Doe",
        published: true,
      },
    ],
  });
  console.log(createMany);
};

main();
