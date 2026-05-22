import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { register } from "module";
import { AuthService } from "./auth.service";
import { JwtAuthGuard } from "./jwt-auth.guard";
import { get } from "http";
import { CurrentUser } from "./current-user.decorator";
import { RegisterDTO } from "./dto/register.dto";
import { LoginDTO } from "./dto/login.dto";

@Controller('auth')
export class AuthCntroller {
    constructor(private readonly authService: AuthService){}

@Post('register') 
async registe(@Body() data: RegisterDTO){
    return await this.authService.register(data);
}
@Post('login') 
async login(@Body() data: LoginDTO ){
    return await this.authService.login(data);
}
@UseGuards(JwtAuthGuard)
@Get('me')
me (@CurrentUser() user:{id:string; email: string}){
    return user;
}
}