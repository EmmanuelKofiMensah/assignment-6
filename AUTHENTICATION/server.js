const express = require("express");

// connect to the db
require("./config/dbConnect");

const app = express();
app.use(express.json());

app.use("/auth", require("./routers/authRouter"));
app.use("/user", require("./routers/usersRouter"));

app.listen(4000, () => console.log("Server up and running"));
