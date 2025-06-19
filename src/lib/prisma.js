import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis;

let Prisma = globalForPrisma.Prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = Prisma;

export default Prisma;
