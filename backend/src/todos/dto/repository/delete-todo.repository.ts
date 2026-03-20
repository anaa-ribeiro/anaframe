import { PrismaService } from "src/shared/databases/prisma.databases";
import { CreateTodoDto } from "../create-todo.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class DeleteTodoRepository {
    constructor(private readonly prisma: PrismaService) {}

async delete (id: String){
   return await this.prisma.todo.delete({where:{id}});
}
}