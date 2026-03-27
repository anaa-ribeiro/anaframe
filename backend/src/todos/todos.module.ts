import { Logger, Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { PrismaService } from 'src/shared/databases/prisma.databases';
import * as UseCase from './use-case';
import * as Repositories from './repository';

const useCase = Object.values(UseCase);
const repositories = Object.values(Repositories);

@Module({
  controllers: [TodosController],
  providers: [
    TodosService,
    PrismaService,
    Logger,
    ...repositories,
    ...useCase
  ],
})
export class TodosModule {}
