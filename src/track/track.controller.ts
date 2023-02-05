import {Controller, Get, Post, Delete, Body, Param, UseInterceptors, UploadedFiles} from "@nestjs/common";
import {TrackService} from "./track.service";
import {CreateTrackDto} from "./dto/create-track.dto";
import {ObjectId} from "mongoose";
import {FileFieldsInterceptor, FileInterceptor} from "@nestjs/platform-express";
import {CreateCommentDto} from "./dto/create-comment.dto";

@Controller("/tracks")

export class TrackController {
    constructor(private trackService: TrackService) {

    }

    //POSTMAN FORM DATA TYPE
    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        { name: "picture", maxCount: 1 },
        { name: "audio", maxCount: 1 }
    ]))
    async create(@UploadedFiles() files, @Body() dto: CreateTrackDto){
        const { picture, audio } = files;
        return this.trackService.create(dto, picture[0], audio[0]);
    }

    @Get()
    async getAll(){
        return this.trackService.getAll()
    }

    @Get(':id')
    async getOne(@Param('id') id: ObjectId){
        return this.trackService.getOne(id);
    }

    @Delete(':id')
    async delete(@Param('id') id: ObjectId) {
        return this.trackService.delete(id);
    }

    @Post('/comment')
    addComment(@Body() dto: CreateCommentDto) {
        return this.trackService.addComment(dto);
    }

    @Post('/listen/:id')
    listen(@Param('id') id: ObjectId) {
        return this.trackService.listen(id);
    }
}