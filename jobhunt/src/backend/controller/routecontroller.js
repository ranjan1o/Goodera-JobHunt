const express = require('express');

const router = express.Router();
const Jobs=require('../model/JobData.model')


router.get('', async (req, res) => {
    
    try {
        const jobs = await Jobs.find();
        return res.status(201).json({ jobs });
    }
    catch(err) {
        return res.status(500).json(err)
    }
})

module.exports = router;