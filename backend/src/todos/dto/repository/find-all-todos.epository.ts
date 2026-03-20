import { PrismaService } from "src/shared/databases/prisma.databases";
import { CreateTodoDto } from "../create-todo.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class FindAllTodoRepository {
    constructor(private readonly prisma: PrismaService) {}

async findAll (){
   return await this.prisma.todo.FindMany();
}
}