import { PrismaService } from "src/shared/databases/prisma.databases";
import { CreateTodoDto } from "../create-todo.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CreateTodoRepository {
    constructor(private readonly prisma: PrismaService) {}

async execute (data: CreateTodoDto){
   return await this.prisma.todo.create({data});
}
}