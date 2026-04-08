import { PrismaService } from "src/shared/databases/prisma.databases";
import { Injectable } from "@nestjs/common";

@Injectable()
export class FindAllTodoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.todo.findMany();
  }
}