import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from "process";

const start  = async() => {
  try {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);

    await  app.listen(PORT, () => {
      console.log(`served started on PORT ${PORT}`);
    })
  } catch (e) {
    console.log(e);
  }
};
start();
