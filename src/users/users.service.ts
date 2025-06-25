import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return (await this.userRepository.findOne({ where: { email } })) ?? undefined;
  }

  async findById(id: number): Promise<User | undefined> {
    return (await this.userRepository.findOne({ where: { id } })) ?? undefined;
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
}