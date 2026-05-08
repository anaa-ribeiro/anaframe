import { PrismaService } from "src/shared/databases/prisma.databases";
import { Injectable } from "@nestjs/common";

@Injectable()
export class FindUseByEmailRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email} });
  }
}