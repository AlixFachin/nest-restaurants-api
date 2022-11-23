import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

const data = import('../data/restaurants.json');

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/restaurants (GET)', () => {
    return request(app.getHttpServer())
      .get('/restaurants')
      .expect(200)
      .expect((response) => {
        expect(response.body).not.toBeUndefined();
        expect(typeof response.body).toBe('object');
        expect(response.body instanceof Array).toBeTruthy();
      });
  });

  it('/restaurants (POST)', async () => {
    const restauList = (await data).restaurants;

    const testRestau = restauList[0];

    return request(app.getHttpServer())
      .post('/restaurants')
      .send({
        restaurant: { ...testRestau },
      })
      .expect(201)
      .expect((response) => {
        expect(response.body.id).not.toBeUndefined();
        expect(response.body.name).toBe(testRestau.name);
        expect(response.body.tags).toStrictEqual(testRestau.tags);
        expect(response.body.regularClose).toStrictEqual(
          testRestau.regularClose,
        );
        expect(response.body.area).toBe(testRestau.area);
        expect(response.body.address).toBe(testRestau.address);
        expect(response.body.phone).toBe(testRestau.phone);
      })
      .then((response) => {
        const restauId = response.body.id;

        return request(app.getHttpServer())
          .get(`/restaurants/${restauId}`)
          .expect(200)
          .expect((response) => {
            expect(response.body.id).not.toBeUndefined();
            expect(response.body.name).toBe(testRestau.name);
            expect(response.body.id).toBe(restauId);
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
