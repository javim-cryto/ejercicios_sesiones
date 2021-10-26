const express = require('express');
const app = express(); // Creating an Express app

// A port where our application will be mounted
const APP_PORT = 3001;

// Configuring parsers of request content-type
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Global Middleware
// app.use((req, res, next) => {
//   // Intercepting request
//   if (req.body.num === 5) {
//      next()
//   }
//
//   return res.json({
//     message: 'No es un numero valido',
//   });
// });

// First route definition
app.get('/', (req, res) => {
  return res.json({
    message: 'Welcome to my first Express API',
  });
});

// app.get('/api/v1/users/', () => {})
// app.post('/api/v1/users/', () => {})
// app.get('/api/v1/payments/', () => {})
// app.get('/api/v2/users/', () => {})
// app.get('/api/v2/payments/', () => {})

app.use('/api/v1', require('./routes/v1'));
app.use('/api/v2', require('./routes/v2'));

// Mount express app on specific port
app.listen(APP_PORT, () => {
  console.log(`Express App on port ${APP_PORT}`);
});
