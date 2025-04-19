import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates = async () => {
  //   const singleUpdate = await prisma.post.update({
  //     where: {
  //       id: 5,
  //     },
  //     data: {
  //       //   title: "Title 5",
  //       //   content: "Content 5",
  //       //   authorName: "Author 5",
  //       published: false,
  //     },
  //   });
  //   console.log(singleUpdate);
  //   const updateMany = await prisma.post.updateMany({
  //     where: {
  //       title: "Title 1",
  //     },
  //     data: {
  //       published: true,
  //     },
  //   });
  //   console.log(updateMany);
  const upsertData = await prisma.post.upsert({
    where: {
      id: 4,
    },
    update: {
      authorName: "Fake author",
    },
    create: {
      title: "created title",
      content: "created content",
      published: false,
      authorName: "created author",
    },
  });
  console.log(upsertData);
};

updates();
