import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersController } from "./Controllers/Users";
import { UsersService } from "./Services/users.service";
import { FirebaseAdmin } from "./config/firebase.setup";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TblUsers } from "./Entities/users.entity";

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
    providers: [AppService, UsersService, FirebaseAdmin],
})
export class AppModule {}
