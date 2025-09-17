// Vercel serverless function entry point
import { VercelRequest, VercelResponse } from '@vercel/node';
import express from 'express';
import session from 'express-session';
import passport from '../server/src/auth';
import { api } from '../server/src/routes';

const app = express();

app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET || "dev-secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api", api);

export default (req: VercelRequest, res: VercelResponse) => {
  return app(req, res);
};
