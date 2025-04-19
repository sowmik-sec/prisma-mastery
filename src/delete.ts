import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteData = async () => {
  //   const singleDelete = await prisma.post.delete({
  //     where: {
  //       id: 1,
  //     },
  //   });
  //   console.log(singleDelete);
  const deleteMany = await prisma.post.deleteMany({
    where: {
      published: false,
    },
  });
  console.log(deleteMany);
};

deleteData();
