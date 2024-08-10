import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersController } from "./Controllers/Users";
import { UsersService } from "./Services/users.service";
import { FirebaseAdmin } from "./config/firebase.setup";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TblUsers } from "./Entities/users.entity";
import { AuthMiddleware } from "./Middleware/auth.middleware";
import { AuthenticationService } from "./Services/authMiddleware.service";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "",
            database: "gdg-firebase",
            entities: [TblUsers],
            synchronize: true,
        }),
        TypeOrmModule.forFeature([TblUsers]),
    ],
    controllers: [AppController, UsersController],
    providers: [AppService, UsersService, FirebaseAdmin, AuthenticationService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuthMiddleware).forRoutes("*");
    }
}
