const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
const config = require("./config");
mongoose.connect(config.dbUrl);
mongoose.connection.on("conected", ()=>{
    console.log("connection success");
});

//const connection = mongoose.Collection;
// connection.once("open",()=>{
//     console.log("mongodb connection succssesful");
// });
const usersRouter = require("./routes/users");
const eventsRouter = require("./routes/events");

app.use("/events", eventsRouter);
app.use("/users", usersRouter);

app.listen(port, ()=>{
    console.log(`server runing on port: ${port}`);
});

