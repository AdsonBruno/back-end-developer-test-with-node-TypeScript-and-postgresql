import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function checkEmailExists(email: string) {
  const client = await prisma.forms_Answers.findUnique({
    where: {
      email,
    },
  });
  return client;
}
