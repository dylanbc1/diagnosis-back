import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { Answer } from './entities/answer.entity';

@Controller('answers')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Post()
  async create(@Body() createAnswerDto: CreateAnswerDto): Promise<Answer> {
    return await this.answerService.create(createAnswerDto);
  }

  @Get()
  async findAll(): Promise<Answer[]> {
    return await this.answerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Answer> {
    return await this.answerService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateAnswerDto: Partial<CreateAnswerDto>): Promise<Answer> {
    return await this.answerService.update(id, updateAnswerDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.answerService.remove(id);
  }
}
