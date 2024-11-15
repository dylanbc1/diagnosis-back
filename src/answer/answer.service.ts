import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Answer } from './entities/answer.entity';
import { CreateAnswerDto } from './dto/create-answer.dto';

@Injectable()
export class AnswerService {
  constructor(
    @InjectRepository(Answer)
    private readonly answerRepository: Repository<Answer>,
  ) {}

  async create(createAnswerDto: CreateAnswerDto): Promise<Answer> {
    const answer = this.answerRepository.create(createAnswerDto);
    return await this.answerRepository.save(answer);
  }

  async findAll(): Promise<Answer[]> {
    return await this.answerRepository.find();
  }

  async findOne(id: string): Promise<Answer> {
    const answer = await this.answerRepository.findOne({ where: { id } });
    if (!answer) {
      throw new NotFoundException(`Answer with ID ${id} not found`);
    }
    return answer;
  }

  async update(id: string, updateAnswerDto: Partial<CreateAnswerDto>): Promise<Answer> {
    await this.answerRepository.update(id, updateAnswerDto);
    const updatedAnswer = await this.findOne(id);
    return updatedAnswer;
  }

  async remove(id: string): Promise<void> {
    const result = await this.answerRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Answer with ID ${id} not found`);
    }
  }
}
