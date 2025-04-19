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
  const getAllFromDB = await prisma.post.findMany();
  console.log(getAllFromDB);
};

main();
