import { Injectable, Logger } from "@nestjs/common";
import { FindAllTodoRepository } from "../repository";

@Injectable()
export class findAllTodosUseCases {
    constructor(
        private readonly findAllTodosRepository: FindAllTodoRepository,
        private readonly logger: Logger,
    ) {}
    async execute() {
        try {
            this.logger.log('Finding all toDos...');
            const todos = await this.findAllTodosRepository.findAll();
            this.logger.log('ToDos found successfully');
            return todos;
        } catch (error) {
            this.logger.error(error);
            throw new Error("Failed to find all toDos");
        }
    }
}
