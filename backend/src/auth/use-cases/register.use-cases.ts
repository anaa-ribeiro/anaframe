import { BadRequestException, Injectable, Logger } from "@nestjs/common";
import { CreateUserRepository, FindUseByEmailRepository } from "../repository";
import { JwtService } from "@nestjs/jwt";
import { RegisterDTO } from "../dto/register.dto";
import * as bcrypt from 'bcrypt';

@Injectable()
export class RegisterUseCases {
    constructor(
     private readonly findUserByEmailRepository: FindUseByEmailRepository,
     private readonly createUserRepository: CreateUserRepository,
     private readonly jwtService: JwtService,
     private readonly logger: Logger,
    ) {} 

    async execute(data: RegisterDTO) {
        this.logger.log('Registering user...');

        const existingUser = await this.findUserByEmailRepository.findByEmail(
            data.email,
        );
        if (existingUser) {
            throw new BadRequestException('Email exists');
        }
        const paswodHash = await bcrypt.hash(data.password, 10);
        
        const user = await this.createUserRepository.create({
            name:data.name,
            email:data.email,
            paswodHash,
        });

        const payload = {sub: user.id, email: user.email};
        const acessToken = this.jwtService.sign(payload);

        this.logger.log('User registered successfully!');

        return { acessToken, user };
    }
}