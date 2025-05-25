import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import aboutRouter from './routes/about.js';
import costsRouter from './routes/costs.js';
import usersRouter from './routes/users.js';

const app = express();

app.use(express.json());

app.use('/api/add', costsRouter); // Adding Cost Items
app.use('/api/report', costsRouter); // Getting monthly report
app.use('/api/users', usersRouter); // Getting The Details of a Specific User
app.use('/api/about', aboutRouter);

mongoose.connect(process.env.DB_MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(error => console.error('Mongo ERROR:', error));

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});