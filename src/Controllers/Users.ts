import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserLoginParams } from "src/Models/user";
import { UsersService } from "src/Services/users.service";

@Controller("usuarios")
export class UsersController {
    constructor(private userService: UsersService) {}

    //url: dominio/usuarios/crear
    @Post("crear") //nombre de la ruta
    async create(@Body() params: UserLoginParams) {
        return await this.userService.create(params.email, params.password, params.name);
    }
}
