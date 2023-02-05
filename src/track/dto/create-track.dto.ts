// data transfer object
// Класс описывает поля которые мы ожидаем на входе в конкретную функцию

export class CreateTrackDto {
    readonly name: string;
    readonly artist: string;
    readonly text: string;
}