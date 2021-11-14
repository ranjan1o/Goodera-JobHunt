const express = require('express');
const connect = require("./config/db");
const jobController=require("./controller/JobData.controller")
const routecontroller=require("./controller/routecontroller")
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.use("/jobpost", jobController)
app.use("/jobs",routecontroller)

app.listen(8000, async function () {
    await connect();
    console.log("listning on port 800")
})