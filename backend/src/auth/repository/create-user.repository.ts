import { Injectable, UseGuards } from "@nestjs/common"
import { PrismaService } from "src/shared/databases/prisma.databases";


type CreateUserParams = {
    
    name?: string;
    email: string;
    paswodHash: string;
};

@Injectable()
export class CreateUserRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(data:CreateUserParams){
        return await this.prisma.user.create({
            data,
            select: {
                id: true,
                name: true,
                email: true,
            },
        });
    }
}