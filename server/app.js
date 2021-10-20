const express = require('express');
const app = express();
const pizzasRoutes = require('./routes/pizzasRoutes');

app.use('/api/pizzas', pizzasRoutes);

module.exports = app;
