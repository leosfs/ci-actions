import express, { NextFunction, Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get("/ci", (req, res) => {
    res.json({message:true, espCode:"42-es"})
})

export { app };
