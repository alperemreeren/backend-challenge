import express, { Application, Request, Response } from "express";
import http from 'http';
import 'dotenv/config';

const app: Application = express();
const server = new http.Server(app);

server.listen(process.env.PORT, () => console.log(`Running on Port: ${process.env.PORT}`));