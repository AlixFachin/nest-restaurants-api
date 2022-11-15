import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  tags: string;

  @Column()
  regularClose: string;

  @Column()
  area: string;

  @Column()
  address: string;

  @Column()
  phone: string;
}
