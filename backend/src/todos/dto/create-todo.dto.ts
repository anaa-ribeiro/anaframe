export class CreateTodoDto {
title: String; 
description: String;
completed: Boolean; 
priority: TodoPriority; 
dueAt: Date;
completeAr: Date;
userId: String;
createdAt: Date;
updateAt: Date;
}

enum TodoPriority{
LOW = "LOW",
MEDIUM = "MEDIUM",
HIGH = "HIGH",

}