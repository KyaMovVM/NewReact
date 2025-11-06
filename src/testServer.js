// testServer.js – простой Node.js сервер для проверки домена
// Устанавливаем express: npm i express

import express from 'express';
const app = express();
const PORT = 3000;

// Пример простого маршрута
app.get('/', (req, res) => {
  res.send('Hello from test server!');
});

// Маршрут для проверки домена
app.get('/domain-check', (req, res) => {
  const host = req.headers.host;
  res.json({ host, message: 'Domain check endpoint' });
});

app.listen(PORT, () => {
  console.log(`Test server listening on http://kyamovvm.com:${PORT}`);
});