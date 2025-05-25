# Cost Manager RESTful Web Service

A Node.js RESTful API for managing personal expenses with MongoDB Atlas.

## Features

- Add cost items with automatic timestamp handling
- Generate monthly cost reports grouped by categories
- Get user details with computed total costs
- Team member information endpoint

## API Endpoints

- `POST /api/add` - Add a new cost item
- `GET /api/report` - Get monthly cost report
- `GET /api/users/:id` - Get user details with total costs
- `GET /api/about` - Get team member information

## Technologies Used

- Node.js with Express.js
- MongoDB Atlas with Mongoose
- ES6 Modules
- JSDoc for documentation
- Node.js built-in test runner

## Team Members

- Noy Klar
- Daniel Podolsky