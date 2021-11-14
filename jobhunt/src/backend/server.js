const express = require('express');
const connect = require("./config/db");
const jobController=require("./controller/JobData.controller")

const app = express();

app.use(express.json());

app.use("/postjob",jobController)




app.listen(8000, async function () {
    await connect();
    console.log("listning on port 800")
})