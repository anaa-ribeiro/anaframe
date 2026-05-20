import { Injectable } from "@nestjs/common";
import { RegisterUseCases } from "./use-cases/register.use-cases";
import { LoginUseCases } from "./use-cases/login.use-cases";
import { RegisterDTO } from "./dto/register.dto";
import { LoginDTO } from "./dto/login.dto";

@Injectable()
    export class AuthService{
        constructor( 
            private readonly registerUseCases: RegisterUseCases,
            private readonly loginUseCases: LoginUseCases,
        ){}

        async register(data: RegisterDTO) {
            return await this.registerUseCases.execute(data);
        }
        async login(data:LoginDTO ) {
            return await this.loginUseCases.execute(data);
        }
        
    }
  