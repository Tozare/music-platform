// data transfer object
// Класс описывает поля которые мы ожидаем на входе в конкретную функцию

import { ObjectId } from "mongoose";

export class CreateCommentDto {
    readonly username: string;
    readonly text: string;
    readonly trackId: ObjectId;
}