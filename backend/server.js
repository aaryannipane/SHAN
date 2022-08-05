import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./database.js";
import cors from "cors";

const app = express();

const corsOption = {
	Credential:true,
}
app.use(cors(corsOption));

connectDB();

app.get("/", (req, res)=>{
	res.send("<h1>express working</h1>")
})

app.listen(3000, ()=>{
	console.log("server started");
})
