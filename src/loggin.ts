import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
  ],
});

prisma.$on("query", (e) => {
  console.log("query ", e.query);
  console.log("Duration ", e.duration);
  console.log("Date & Time ", e.timestamp);
});

const main = async () => {
  const getAllFromDB = await prisma.post.findMany();
  //   console.log(getAllFromDB);
};

main();
