import * as dotenv from 'dotenv';
dotenv.config();

export const ENV = {
  BASE_URL: process.env.BASE_URL || 'https://automationexercise.com',
  API_URL: process.env.API_URL || 'https://fakestoreapi.com',
  USER_EMAIL: process.env.TEST_USER_EMAIL,
  USER_PASSWORD: process.env.TEST_USER_PASSWORD,
};