export class CreateTodoDto {
  title: string;
  description?: string;
  completed?: boolean;
  priority?: TodoPriority;
  dueAt?: Date;
  completeAr?: Date;
  userId: string;
}

enum TodoPriority{
LOW = "LOW",
MEDIUM = "MEDIUM",
HIGH = "HIGH",

}