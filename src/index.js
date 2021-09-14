const express = require("express");
const app = express();
//add route
const userRoutes = require("./routes/user");

app.use("/api/v1/users", userRoutes);

app.listen(8080, console.log("The server is started at 8080 ports"));
