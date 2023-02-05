import { Module } from '@nestjs/common';
import { TrackModule } from "./track/track.module";
import { MongooseModule } from "@nestjs/mongoose";
import {FileModule} from "./track/file/file.module";

@Module({
  imports: [FileModule, TrackModule, MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.papkinj.mongodb.net/music-platform?retryWrites=true&w=majority')],
  // controllers: [],
  // providers: [],
})
export class AppModule {}
