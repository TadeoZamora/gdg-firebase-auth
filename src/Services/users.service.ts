import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FirebaseAdmin } from "src/config/firebase.setup";
import { TblUsers } from "src/Entities/users.entity";
import { Repository } from "typeorm";

@Injectable()
export class UsersService {
    constructor(private readonly admin: FirebaseAdmin, @InjectRepository(TblUsers) private tblUsers: Repository<TblUsers>) {}

    async create(email: string, password: string, name: string) {
        try {
            const firebaseAuth = this.admin.setup();
            const new_user = await firebaseAuth.auth().createUser({
                email,
                password,
            });
            return await this.tblUsers.save({
                uid: new_user.uid,
                name,
            });
        } catch (error) {
            console.log(error);
        }
    }
}
