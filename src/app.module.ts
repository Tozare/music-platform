import { Module } from '@nestjs/common';
import { TrackModule } from "./track/track.module";
import { MongooseModule } from "@nestjs/mongoose";
import {FileModule} from "./track/file/file.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from "path";

@Module({
  imports: [
    ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static')}),
      FileModule, TrackModule, MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.papkinj.mongodb.net/music-platform?retryWrites=true&w=majority')],
  // controllers: [],
  // providers: [],
})
export class AppModule {}
