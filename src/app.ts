import express, { NextFunction, Request, Response } from 'express';
import figlet from "figlet"

const app = express();

app.use(express.json());

app.get("/", (req, res) => {

figlet("SFS-Memory -><-", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    
    console.log(data);
    res.json({message:"SFS-Memory -><-"});
    // res.redirect(data)

  });

})

export { app };
