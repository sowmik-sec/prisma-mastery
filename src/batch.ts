import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const batchTransaction = async () => {
  const createUser = prisma.user.create({
    data: {
      username: "Nazrul",
      email: "naz@rul.com",
    },
  });
  //   console.log('create user', createUser)
  const updateUser = prisma.user.update({
    where: {
      id: 4,
    },
    data: {
      age: 30,
    },
  });
  //   console.log('update user', updateUser)
  const [userData, updateData] = await prisma.$transaction([
    createUser,
    updateUser,
  ]);
  console.log(userData, updateData);
};

batchTransaction();
