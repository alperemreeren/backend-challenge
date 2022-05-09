import express, { Application, Request, Response } from "express";
import http from 'http';
import mongoose from 'mongoose';
import 'dotenv/config';

// Import Routes
import fetchAllUsers from "./routes/fetchAllUsers";

// Express app
const app: Application = express();
const server = new http.Server(app);

// Connect to MongoDB
const dbURI: any = process.env.DBURI;
mongoose.connect(dbURI)
    .then((result) => {
        console.log('Successfully Connected to Database');
        
        // Start the server after the connection is established with database
        startServer();
    })
    .catch((err) => console.log(err));

// Endpoints
app.get('/fetchAllUsers', fetchAllUsers);

// Initialize Server
const startServer = () => server.listen(process.env.PORT, () => console.log(`Running on Port: ${process.env.PORT}`));