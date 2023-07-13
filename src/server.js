import Express from "express";
import morgan from "morgan";
import router from "./routes/index.js"

const app = Express();

app.use(morgan("dev"));
app.use(Express.json());
app.use(router)


export default app