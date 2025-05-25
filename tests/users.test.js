import { test, describe } from 'node:test';
import assert from 'node:assert';
import request from 'supertest';
import express from 'express';
import usersRouter from '../routes/users.js';

// Create test app
const app = express();
app.use(express.json());
app.use('/api/users', usersRouter);

describe('GET /api/users/:id', () => {
    test('should return 400 for invalid user ID', async () => {
        const response = await request(app)
            .get('/api/users/abc') // Invalid ID
            .expect(400);

        assert.ok(response.body.error);
        assert.ok(response.body.error.includes('Invalid user ID (Must be a number)'));
    });

    test('should validate ID is a number', async () => {
        const response = await request(app)
            .get('/api/users/notanumber')
            .expect(400);

        assert.ok(response.body.error.includes('Invalid user ID (Must be a number)'));
    });
});