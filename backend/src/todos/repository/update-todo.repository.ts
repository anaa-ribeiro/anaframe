import { PrismaService } from "src/shared/databases/prisma.databases";
import { Injectable } from "@nestjs/common";
import { UpdateTodoDto } from "../dto/update-todo.dto";

@Injectable()
export class UpdateTodoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async execute(id: string, data: UpdateTodoDto) {
    return this.prisma.todo.update({ where: { id }, data });
  }
}