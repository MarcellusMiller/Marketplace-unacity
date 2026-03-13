import { Router } from "express";
import UserRegisterController from "../Controllers/UsersRegisterController";
const router = Router();

// primeiros endpoints
router.post("/user/register", (req, res) => {
    UserRegisterController
});


export default router