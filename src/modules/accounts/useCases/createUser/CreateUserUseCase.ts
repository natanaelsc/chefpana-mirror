import { prismaClient } from "@shared/infra/prisma/prismaClient";
import { IcreateUserDto } from "@modules/accounts/dtos/ICreateUserDTO";

import { hash } from "bcrypt";
import { AppError } from "@shared/errors/AppError";
class CreateUserUseCase {
  async execute({ fullName, email, password }: IcreateUserDto) {
    const userExist = await prismaClient.users.findFirst({
      where: {
        email: {
          equals: email,
          mode: "insensitive",
        },
      },
    });

    if (userExist) {
      throw new AppError("User already exists");
    }

    const hashPassword = await hash(password, 10);

    const user = await prismaClient.users.create({
      data: {
        fullName,
        email,
        password: hashPassword,
      },
    });
    return user;
  }
}

export { CreateUserUseCase };
