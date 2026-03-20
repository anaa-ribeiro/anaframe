import { Injectable, Logger } from "@nestjs/common";
import { UpdateTodoRepository } from "../repository";
import { UpdateTodoDto } from "../update-todo.dto";


@Injectable()
export class UpdateTodoUseCases {
    constructor(
        private readonly updateTodoRepository: UpdateTodoRepository,
        private readonly logger: Logger,
    ) {}
    async execute( data: UpdateTodoDto) {
        try {
            this.logger.log('Updating toDo...');
            const todo = await this.updateTodoRepository.execute( data);
            this.logger.log('ToDo updated successfully');
            return todo;
        } catch (error) {
            this.logger.error(error);
            throw new Error("Failed to update toDo");
        }
    }
}