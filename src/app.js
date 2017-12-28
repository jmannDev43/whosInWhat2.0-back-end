import express from 'express';
import promiseRouter from 'express-promise-router';
import registerApi from './api/api';

const router = promiseRouter();
const app = express();

app
  .use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })
  .use(router);

registerApi(router);

export default app;
