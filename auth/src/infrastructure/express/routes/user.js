import { Router } from "express";
import { UserControllerLayer } from "../controller/user.controller.js";

const router = Router();
const userControllerFn = new UserControllerLayer();

router.post("/create-user", userControllerFn.createUser);

export default router;
