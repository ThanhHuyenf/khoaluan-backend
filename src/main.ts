import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { PORT } from './config/secrets'
import { INestApplication } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  setUpSwagger(app)
  await app.listen(PORT)
}

function setUpSwagger(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('Point Training System')
    .setDescription(`API specification for Thanh Huyen Point Training System.`)
    .setVersion('0.1.1')
    .addBearerAuth()
    .build()

  const document = SwaggerModule.createDocument(app, options)

  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      displayOperationId: true,
    },
    customSiteTitle: 'Point Training System',
  })
}

bootstrap()
