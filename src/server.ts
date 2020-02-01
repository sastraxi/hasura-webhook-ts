import 'dotenv/config';

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', async (req, res) => {
  console.log('****************');
  console.log(JSON.stringify(req.body, null, 2));
  console.log('****************');

  res.status(200).json({ status: 'OK' });
});

const port = process.env.PORT || 3000;
app.listen(port , () =>
  console.log('App running at http://localhost:' + port));
