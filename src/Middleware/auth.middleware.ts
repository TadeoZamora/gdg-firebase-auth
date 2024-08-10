import { HttpException, HttpStatus, Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { AuthenticationService } from "src/Services/authMiddleware.service";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor(private readonly request: AuthenticationService) {}

    use(request: Request, response: Response, next: NextFunction) {
        if (!Boolean(request.headers["gdg-company"])) {
            //si es FALSE
            throw new HttpException(
                {
                    status: HttpStatus.FORBIDDEN,
                    error: "La peticion no puede ser recibida,",
                },
                HttpStatus.FORBIDDEN,
            );
        }
        this.request.setCompany(`${request.headers["gdg-company"]}`);
        next();
    }
}
