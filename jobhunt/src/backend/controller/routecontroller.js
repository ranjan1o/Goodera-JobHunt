const express = require('express');

const router = express.Router();
const Jobs=require('../model/JobData.model')


router.get('', async (req, res) => {
    const jobs = await Jobs.find();
    console.log(jobs);
})

module.exports = router;