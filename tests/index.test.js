 const request = require('supertest');
const express = require('express');

describe('Bulletin Board App', () => {
  let app;

  beforeEach(() => {
    // Clear cache to get fresh app instance
    delete require.cache[require.resolve('../index.js')];
    app = require('../index.js');
  });

  describe('GET / endpoint', () => {
    test('should respond with status 200', async () => {
      const response = await request(app).get('/');
      expect(response.status).toBe(200);
    });

    test('should return JSON format', async () => {
      const response = await request(app).get('/');
      expect(response.type).toMatch(/json/);
    });

    test('should return an array', async () => {
      const response = await request(app).get('/');
      expect(Array.isArray(response.body)).toBe(true);
    });

    test('should return exactly 3 messages', async () => {
      const response = await request(app).get('/');
      expect(response.body.length).toBe(3);
    });

    test('first message should have correct id and text', async () => {
      const response = await request(app).get('/');
      expect(response.body[0].id).toBe(1);
      expect(response.body[0].text).toBe('Welcome to the Bulletin Board!');
    });

    test('second message should have correct id and text', async () => {
      const response = await request(app).get('/');
      expect(response.body[1].id).toBe(2);
      expect(response.body[1].text).toBe("Don't forget to take breaks!");
    });

    test('third message should have correct id and text', async () => {
      const response = await request(app).get('/');
      expect(response.body[2].id).toBe(3);
      expect(response.body[2].text).toBe('Docker makes deployment easier.');
    });

    test('each message should have id and text properties', async () => {
      const response = await request(app).get('/');
      response.body.forEach(message => {
        expect(message).toHaveProperty('id');
        expect(message).toHaveProperty('text');
      });
    });
  });
});
