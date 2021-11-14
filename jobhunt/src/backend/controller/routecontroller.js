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
router.get('/:id', async (req, res) => {
    console.log("in id")
    const { jobs } = await Jobs.find( {"_id": req.params.id } ).lean().exec()
    return res.status(200).json( jobs )
})
router.get('/:title', async (req, res) => {
    const jobs = await Jobs.find( {"title": req.params.title } ).lean().exec()
    return res.status(200).json({ jobs })
})
router.get('/:location', async (req, res) => {
    const jobs = await Jobs.find( {"location": req.params.location } ).lean().exec()
    return res.status(200).json({ jobs })
})

module.exports = router;