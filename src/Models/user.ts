import { ApiHideProperty, ApiProperty, ApiResponse } from "@nestjs/swagger";

export interface UserLoginParams {
    email: string;
    password: string;
    name: string;
    role: string;
}
export class UserLoginParamsDto {
    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    role: string;
}
export class UserResponseDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    uid: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    role: string;

    @ApiProperty()
    status: number;
}
