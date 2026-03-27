import { PrismaService } from "src/shared/databases/prisma.databases";
import { CreateTodoDto } from "../dto/create-todo.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class FindTodoByIdRepository {
    constructor(private readonly prisma: PrismaService) {}

async findById (Id: String ){
   return await this.prisma.todo.findUnique({ where: {Id} });
}
}