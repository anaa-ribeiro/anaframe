import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { DeleteTodoRepository } from "../repository";

@Injectable()
export class DeleteTodoUseCases {
    FindTodoByIdRepository: any;
    constructor(
        private readonly deleteTodoRepository: DeleteTodoRepository,
        private readonly logger: Logger,
    ) {}
    async execute(id: string) {
        try { 
             this.logger.log('Deleting todo...');

             const todo = await this.FindTodoByIdRepository.FindById(id);

             if(!todo){
                throw new NotFoundException('ToDo not found');
             }
            await this.deleteTodoRepository.delete(id);
            this.logger.log('Todo deleted successfully.');
            return todo;
        } catch (error) {
            this.logger.error('Error deleting todo.', error);
            throw error;
        }
    }
}
