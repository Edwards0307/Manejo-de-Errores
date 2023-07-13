import app from "./src/server.js";
import "dotenv/config";

const { PORT } = process.env;

app.listen(PORT, () => {
    console.log(`Listen on port ${PORT}`);
})