import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Request } from "express";
import { FirebaseAdmin } from "src/config/firebase.setup";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private readonly admin: FirebaseAdmin) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        try {
            const app = this.admin.setup();
            const token = context.getArgs()[0].headers.authorization.split(" ")[1];
            //verificar validez del token
            //verificar si la sesion aun esta activa
            const claims = await app.auth().verifyIdToken(token);
            console.log(claims);

            return true;
        } catch (error) {
            console.log("Error", error);
            throw new UnauthorizedException("Sesion expiro");
        }
    }

    // private extractTokenFromHeaders(request: Request): string | undefined {
    //     const [type, token] = request.headers.authorization?.split(" ") ?? [];
    //     return type === "Bearer" ? token : undefined;
    // }
}
