import { PrismaClient, UserRole } from "@prisma/client";

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
  // const createMany = await prisma.post.createMany({
  //   data: [
  //     {
  //       title: "This is my third title",
  //       content: "This is my third post",
  //       authorName: "John Doe",
  //       published: false,
  //     },
  //     {
  //       title: "This is my fourth title",
  //       content: "This is my fourth post",
  //       authorName: "John Doe",
  //       published: true,
  //     },
  //     {
  //       title: "This is my fifth title",
  //       content: "This is my fifth post",
  //       authorName: "John Doe",
  //       published: true,
  //     },
  //   ],
  // });
  // console.log(createMany);
  // const createUser = await prisma.user.create({
  //   data: {
  //     username: "John Doe2",
  //     email: "john@doe2.com",
  //     role: UserRole.user,
  //   },
  // });
  // console.log({ createUser });
  // const createProfile = await prisma.profile.create({
  //   data: {
  //     bio: "This is my bio",
  //     userId: 1,
  //   },
  // });
  // console.log({ createProfile });
  // const createCategory = await prisma.category.create({
  //   data: {
  //     name: "Software Engineering",
  //   },
  // });
  // console.log({ createCategory });

  const createPost = await prisma.post.create({
    data: {
      title: "This is post",
      content: "This is content of the post",
      authorId: 1,
      postCategories: {
        create: {
          categoryId: 3,
          // category: {
          //   connect: {
          //     id: 1,
          //   },
          // },
        },
      },
    },
    include: {
      postCategories: true,
    },
  });
  console.log(createPost);
};

main();
