import { BadRequestException, Injectable, Logger } from "@nestjs/common";
import { FindUseByEmailRepository } from "../repository";
import { JwtService } from "@nestjs/jwt";
import { LoginDTO } from "../dto/login.dto";
import * as bcrypt from 'bcrypt';

@Injectable()
export class LoginUseCases {
    constructor(
        private readonly findUserByEmailRepository: FindUseByEmailRepository,
        private readonly jwtService: JwtService,
        private readonly logger: Logger,
    ) {}

    async execute(data: LoginDTO) {
        this.logger.log('Realizando login...');

        const user = await this.findUserByEmailRepository.findByEmail(
            data.email,
        );
        if (!user) {
            throw new BadRequestException('Email ou senha inválidos');
        }
        const passwordMatch = await bcrypt.compare(
            data.password,
            user.paswodHash,
        );
        if (!passwordMatch) {
            throw new BadRequestException('Email ou senha inválidos');
        }
        const payload = {
            sub: user.id,
            email: user.email,
        };
        const accessToken = this.jwtService.sign(payload);

        this.logger.log('Login realizado com sucesso!');

        return {
            accessToken,
            user: {
                id:user.id,
                name:user.name,
                email: user.email,
            },
        };
    }
}
