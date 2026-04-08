import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma.databases';
import { CreateTodoDto } from '../dto/create-todo.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class CreateTodoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async execute(data: CreateTodoDto) {
    const prisma = this.prisma as PrismaClient;
    return prisma.todo.create({ data });
  }
}
