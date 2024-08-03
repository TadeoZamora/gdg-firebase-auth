import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const config = new DocumentBuilder().setTitle("GDG-HMO API").setDescription("Api para curso de nest y firebase").setVersion("1.0").addTag("gdg").addTag("hmo").build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("api", app, document); //ruta
    await app.listen(3001);
}
bootstrap();
