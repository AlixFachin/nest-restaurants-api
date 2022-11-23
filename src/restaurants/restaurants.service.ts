import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Restaurant } from './restaurant.entity';

@Injectable()
export class RestaurantsService {
  constructor(
    @InjectRepository(Restaurant)
    private restaurantRepository: Repository<Restaurant>,
  ) {}

  findAll(): Promise<Restaurant[]> {
    return this.restaurantRepository.find();
  }

  findOne(id: number) {
    return this.restaurantRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.restaurantRepository.delete(id);
  }

  async add(restaurantData: Omit<Restaurant, 'id'>) {
    const newRestau = new Restaurant();
    newRestau.name = restaurantData.name;
    newRestau.phone = restaurantData.phone;
    newRestau.regularClose = restaurantData.regularClose;
    newRestau.tags = restaurantData.tags;
    newRestau.area = restaurantData.area;
    newRestau.address = restaurantData.address;

    await this.restaurantRepository.save(newRestau);
    return newRestau;
  }
}
