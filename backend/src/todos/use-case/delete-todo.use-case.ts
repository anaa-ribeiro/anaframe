import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { DeleteTodoRepository, FindTodoByIdRepository } from "../repository";

@Injectable()
export class DeleteTodoUseCase {
    FindTodoByIdRepository: any;
    constructor(
        private readonly findbyIdRepository: FindTodoByIdRepository,
        private readonly deleteTodoRepository: DeleteTodoRepository,
        private readonly logger: Logger,
    ) {}
    async execute(id: string) {
        try { 
             this.logger.log('Deleting todo...');

             const todo = await this.findbyIdRepository.findById(id);

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
