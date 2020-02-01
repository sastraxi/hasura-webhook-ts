import 'dotenv/config';

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import sendWelcomeEmail from './send-welcome-email';

if (!process.env.MAILJET_KEY || !process.env.MAILJET_SECRET) {
  console.error('Please prove mailjet details in your .env file (see .env.example).');
  process.exit(1);
}

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  sendWelcomeEmail('sastraxi@gmail.com');
});

const port = process.env.PORT || 3000;
app.listen(port , () =>
  console.log('App running at http://localhost:' + port));
