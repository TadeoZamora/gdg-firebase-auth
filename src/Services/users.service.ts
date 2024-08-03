import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FirebaseAdmin } from "src/config/firebase.setup";
import { TblUsers } from "src/Entities/users.entity";
import { Repository } from "typeorm";

@Injectable()
export class UsersService {
    constructor(private readonly admin: FirebaseAdmin, @InjectRepository(TblUsers) private tblUsers: Repository<TblUsers>) {}

    async create(email: string, password: string, name: string, role: string) {
        try {
            const firebaseAuth = this.admin.setup();
            const new_user = await firebaseAuth.auth().createUser({
                email,
                password,
            });
            const user = await this.tblUsers.save({
                uid: new_user.uid,
                name,
                role,
            });
            if (user !== null) {
                await firebaseAuth.auth().setCustomUserClaims(new_user.uid, {
                    role: user.role,
                });
                return user;
            }
            return null;
        } catch (error) {
            return new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    reason: "Ocurrio un error al registrar al usuario",
                },
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    //obtener `lista` de registros por medio de clausula Where
    async list(role: string) {
        return await this.tblUsers.find({ where: { role } });
        // select * from tbl_users where role = role ^
    }

    //obtener detalles de UN solo registro
    async details(uid: string) {
        return await this.tblUsers.findOne({
            where: { uid: uid },
        });
    }
}
