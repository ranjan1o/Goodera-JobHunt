const Jobdeatils = require("../model/JobData.model")


const express = require("express");
const router = express.Router();


const createpost = async (req,res) => {
    try {
        const job = await Jobdeatils.create(req.body)
        return res.status(201).json({ job });
    }
    catch(err) {
        return res.status(500).json({status:"failed"})
    }
}
router.post("/", createpost);
