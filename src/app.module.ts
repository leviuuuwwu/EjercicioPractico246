import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { AuthModule } from './auth/auth.module';
import { CoursesModule } from './courses/courses.module'; // <- ESTA ES LA QUE FALTA
import { Course } from './courses/course.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'sexo',
      database: 'practica614',
      entities: [User, Course],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    CoursesModule,
  ],
})
export class AppModule {}