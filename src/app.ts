import express from 'express';
import cors from 'cors';
import firstControler from './app/controllers/firstControler';
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  app.use(cors());
  next();
});

app.get('/', firstControler.index);

export default app;
