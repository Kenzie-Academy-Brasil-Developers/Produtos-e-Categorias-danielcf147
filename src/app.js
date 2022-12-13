import "express-async-errors";
import { errorHandler } from "./errors";
import express from "express";
import productRouters from "./routes/products.routes";
import categoryRouters from "./routes/categories.routes";

const app = express();
app.use(express.json());

app.use("/products", productRouters);
app.use("/categories", categoryRouters);

app.use(errorHandler);

export default app;
