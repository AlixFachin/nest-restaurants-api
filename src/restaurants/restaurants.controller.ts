import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Restaurant } from './restaurant.entity';
import { RestaurantsService } from './restaurants.service';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantService: RestaurantsService) {}

  // TO DO -> Change to async function...

  @Get()
  async getRestaurants(): Promise<Restaurant[]> {
    const restaurantList = await this.restaurantService.findAll();
    return restaurantList;
  }

  @Get(':id')
  async findOne(@Param() params) {
    const restaurant = await this.restaurantService.findOne(params.id);
    return restaurant;
  }

  @Delete(':id')
  async deleteOne(@Param() params) {
    return this.restaurantService.remove(params.id);
  }

  @Post()
  async insertOne(@Body() params) {
    // TODO: Insert Type Validation (?)
    return this.restaurantService.add(params.restaurant);
  }
}
