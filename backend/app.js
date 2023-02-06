import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./database.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./routes.js";

const app = express();

import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
const swaggerDocument = YAML.load("./swagger.yaml");

const corsOption = {
  credentials: true,
  origin: ["http://localhost:3000"],
};
app.use(cors(corsOption));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cookieParser());

// connection to database
connectDB();

app.use(express.json());

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("<h1>Hello from server</h1>");
});

export default app;
