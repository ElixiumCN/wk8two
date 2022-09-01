const { Router } = require("express")
const { addUser } = require("./userControllers");

const userRouter = Router()

userRouter.post("user/signup", addUser); // calls function

modules.exports = userRouter;