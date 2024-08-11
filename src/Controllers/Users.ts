import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, UseGuards } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Auth } from "src/config/auth.decorator";
import { UserLoginParams, UserLoginParamsDto, UserResponseDto } from "src/Models/user";
import { AuthGuard } from "src/Services/auth.guard";
import { UsersService } from "src/Services/users.service";

@Controller("usuarios")
export class UsersController {
    constructor(private userService: UsersService) {}

    //url: dominio/usuarios/crear
    @ApiOperation({ summary: "Endpoint para crear y registrar usuarios en firebase" })
    @ApiBody({ type: UserLoginParamsDto })
    @ApiResponse({ type: UserResponseDto })
    @Post("crear") //nombre de la ruta
    async create(@Body() params: UserLoginParams) {
        return await this.userService.create(params.email, params.password, params.name, params.role);
    }

    @Auth("Admin")
    @ApiOperation({ summary: "Endpoint para obtener lista" })
    @ApiResponse({ type: [UserResponseDto] })
    @Get("lista/:role?")
    async list(@Param("role") role?: string) {
        return await this.userService.list(role);
    }

    @UseGuards(AuthGuard)
    @ApiOperation({ summary: "Endpoint para obtener detalle de un usuario" })
    @ApiResponse({ type: UserResponseDto })
    @Get("detalles/:uid")
    async details(@Param("uid") uid: string) {
        return await this.userService.details(uid);
    }
}
