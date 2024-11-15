import {IsOptional, IsNotEmpty, IsString} from 'class-validator';

export class CreateAnswerDto {
    @IsString()
    @IsNotEmpty()
    group:string;

    @IsString()
    @IsNotEmpty()
    diagnosis:string;

    @IsString()
    @IsNotEmpty()
    exams:string;

    @IsString()
    @IsNotEmpty()
    arguments:string;

    @IsString()
    @IsOptional()
    professor_name?: string;
}
