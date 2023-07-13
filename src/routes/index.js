import { Router } from "express";
import getMovies from "../controllers/index.js"

const router = Router()


router.get("/movies", getMovies)

export default router;