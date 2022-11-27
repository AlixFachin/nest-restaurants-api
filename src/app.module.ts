import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

const getDBConfig = async (configService: ConfigService) => {
  if (process.env.NODE_ENV === 'test') {
    const dbConfig: TypeOrmModuleOptions = {
      type: 'sqlite',
      database: './test.sql',
      autoLoadEntities: true,
      synchronize: true,
    };
    return dbConfig;
  }

  const dbConfig: TypeOrmModuleOptions = {
    type: 'sqlite',
    database: './first.sql',
    autoLoadEntities: true,
    synchronize: true, // TODO -> Remove for prod use!
  };
  return dbConfig;
};

@Module({
  controllers: [AppController],
  imports: [
    RestaurantsModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        getDBConfig(configService),
    }),
    AuthModule,
    UsersModule,
  ],
  providers: [],
})
export class AppModule {}
