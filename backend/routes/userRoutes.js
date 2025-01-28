import express from "express";
import { authUser, signup } from "../controllers/userControllers.js";

const router = express.Router();
router.route("/").post(signup);
router.route("/auth").post(authUser);

export default router;
