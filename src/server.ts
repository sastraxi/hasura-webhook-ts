import 'dotenv/config';

import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import cors from 'cors';

if (!process.env.MAILJET_KEY || !process.env.MAILJET_SECRET) {
  console.error('Please prove mailjet details in your .env file (see .env.example).');
  process.exit(1);
}

const app = express();

app.use(session({
  name: 'sid',
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 120,
  },
  rolling: true,
}));

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {

});

const port = process.env.PORT || 3000;
app.listen(port , () =>
  console.log('App running at http://localhost:' + port));
