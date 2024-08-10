import { applyDecorators, SetMetadata, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/Services/auth.guard";

export function Auth(...permissions: string[]) {
    return applyDecorators(SetMetadata("permissions", permissions), UseGuards(AuthGuard));
}
