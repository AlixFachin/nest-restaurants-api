import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  controllers: [AppController],
  imports: [
    RestaurantsModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './first.sql',
      autoLoadEntities: true,
      synchronize: true, // TODO: Change this when deploying in production!
    }),
    AuthModule,
    UsersModule,
  ],
  providers: [],
})
export class AppModule {}
