const TrackModel = require('../models/track');

module.exports = {
    create,
    index,
    show,
    update,
    deleteTrack
}

// create route - HTTP method: POST
async function create(req, res) {
    try {
        const createdTrack = await TrackModel.create(req.body)
        res.status(201).json(createdTrack);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
    // res.json({message: "index route response"})
}

// index route - HTTP method: GET
async function index(req, res) {
    try {
        const trackDocs = await TrackModel.find({})
        res.status(200).json(trackDocs);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
    // res.json({message: "index route response"})
}

// show - HTTP method: GET
async function show(req, res) {
    console.log(req.params.trackId);
    try {
        const foundTrack = await TrackModel.findById(req.params.trackId);
        if (!foundTrack) {
            res.status(404);
            throw new Error("Track not found!")
        }
        res.status(200).json(foundTrack);
    } catch (error) {
        if (res.statusCode === 404) {
            res.json({ error: error.message })
        } else {
            res.status(500).json({ error: error.message })
        }
    }
    // res.json({message: 'response from show route'})
}

// update - HTTP method: PUT
async function update(req, res) {
    console.log(req.params.trackId);
    console.log(req.body)
    try {
        const updatedTrack = await TrackModel.findByIdAndUpdate(req.params.trackId, req.body, { new: true });
        if (!updatedTrack) {
            res.status(404);
            throw new Error("Track not found!");
        }
        res.status(200).json(updatedTrack);
    } catch (error) {
        if (res.statusCode === 404) {
            res.json({ error: error.message })
        } else {
            res.status(500).json({ error: error.message })
        }
    }
    // res.json({message: "response from update route"})

}

// delete - HTTP method: DELETE
async function deleteTrack(req, res) {
    console.log(req.params.trackId);
    try {
        const deletedTrack = await TrackModel.findByIdAndDelete(req.params.trackId);
        if (!deletedTrack) {
            res.status(404);
            throw new Error("Track not found!");
        }
        res.status(200).json(deletedTrack);
    } catch (error) {
        if (res.statusCode === 404) {
            res.json({ error: error.message })
        } else {
            res.status(500).json({ error: error.message })
        }
    }
    // res.json({message: "response from delete route"})

}