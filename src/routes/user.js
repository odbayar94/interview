const express = require("express");

const { getUser, getUsers, createUser } = require("../controller/users");

const userRouter = express.Router();

userRouter.route("/:id").get(getUser);
userRouter.route("/").get(getUsers).post(createUser);

module.exports = userRouter;
