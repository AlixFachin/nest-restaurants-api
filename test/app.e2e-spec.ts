import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

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

  it('/restaurants (POST)', () => {
    return request(app.getHttpServer())
      .post('/restaurants')
      .send({ restaurant: { name: 'My Best Pizza' } })
      .expect(201)
      .expect((response) => {
        expect(response.body.id).not.toBeUndefined();
        expect(response.body.name).toBe('My Best Pizza');
      });
    // Testing the Get request afterwards
  });

  afterAll(async () => {
    await app.close();
  });
});
