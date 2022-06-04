import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder,SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const config = new DocumentBuilder()
        .setTitle("Rest API")
        .setDescription("Building Rest API with NestJS")
        .setVersion('1.0.0')
        .addTag("meekz")
        .build()
    const document = SwaggerModule.createDocument(app,config);
    SwaggerModule.setup('/api/docs',app,document)
    await app.listen(process.env.PORT || 5000, () => {
        console.log(`Server Started On Port ${process.env.PORT}`)
    });
}

bootstrap();
