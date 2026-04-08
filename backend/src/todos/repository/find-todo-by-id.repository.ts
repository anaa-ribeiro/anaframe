import { PrismaService } from "src/shared/databases/prisma.databases";
import { Injectable } from "@nestjs/common";

@Injectable()
export class FindTodoByIdRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string) {
    return this.prisma.todo.findUnique({ where: { id } });
  }
}