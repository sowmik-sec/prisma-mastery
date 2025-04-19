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
  //     bio: "This is my bio 2",
  //     userId: 3,
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
      title: "This is post 5",
      content: "This is content of the post 5",
      authorId: 3,
      postCategories: {
        create: [
          {
            categoryId: 1,
          },
          {
            categoryId: 2,
          },
          {
            categoryId: 3,
          },
        ],
      },
    },
    include: {
      postCategories: true,
    },
  });
  console.log(createPost);
};

main();
