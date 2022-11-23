import { Injectable } from '@nestjs/common';

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  userId: string; // UUID
  password: string; // TODO: ENCRYPT THE STUFF
};

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: '1',
      firstName: 'john',
      lastName: 'smith',
      username: 'johnnyS',
      email: 'john.smith@test.com',
      password: 'changeme',
    },
    {
      userId: '2',
      firstName: 'jane',
      lastName: 'doe',
      username: 'janeD',
      email: 'jane.doe@test.com',
      password: 'passw0rd', // u must be kidding me
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
