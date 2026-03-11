import { Router } from "express"
import UserRouter from "./Modules/Users/Router/Users.Router";

const router = Router();

router.use("/user", UserRouter);


export default router;