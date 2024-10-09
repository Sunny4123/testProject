import express,{ Request,Response } from "express";
import { Utils } from "./Utils";

const app = express()
const port:number = 3000

app.get('/',(req:Request, res:Response)=>{
    res.send("hello Sunny")
})


app.listen(port, ()=>{
    console.log('server is '+port);
})

