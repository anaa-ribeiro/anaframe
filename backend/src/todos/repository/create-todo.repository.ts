import { Injectable } from '@nestjs/common';
import { PrismaClient, Todo } from 'generated/prisma/client';
import { PrismaService } from 'src/shared/databases/prisma.databases';
import { CreateTodoDto } from '../dto/create-todo.dto';

@Injectable()
export class CreateTodoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async execute(data: CreateTodoDto): Promise<Todo> {
    const prisma = this.prisma as PrismaClient;
    return prisma.todo.create({ data });
  }
}
