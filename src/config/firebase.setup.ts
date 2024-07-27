import * as admin from "firebase-admin";
import * as settings_file from "./firebaseSettings.json";
import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
let app: admin.app.App;

@Injectable()
export class FirebaseAdmin implements OnApplicationBootstrap {
    async onApplicationBootstrap() {
        if (!app) {
            const serviceFile = JSON.stringify(settings_file);
            const serviceAccount = await JSON.parse(serviceFile);
            app = admin.initializeApp({
                credential: admin.credential.cert(serviceAccount),
            });
        }
    }
    setup() {
        return app;
    }
}
