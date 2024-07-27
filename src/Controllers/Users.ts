import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserLoginParams } from "src/Models/user";

@Controller("usuarios")
export class UsersController {
    constructor() {}

    //url: dominio/usuarios/crear
    @Post("crear") //nombre de la ruta
    create(@Body() params: UserLoginParams) {
        return `Correo: ${params.email} Contra: ${params.password}`;
    }
}
