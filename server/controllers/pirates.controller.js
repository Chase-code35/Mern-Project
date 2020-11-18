const Pirate = require('../models/pirates.model');

module.exports.findAllPirates = (req, res) => {
    Pirate.find()
            .then(allPirates => res.json({pirates: allPirates}))
            .catch(err => res.json({message: "Something went wrong!", error:err}))
}

module.exports.findOnePirate = (req, res) => {
    Pirate.findOne()
            .then(onePirate => res.json({pirate: onePirate}))
            .catch(err => res.json({message: "Something went wrong!", error:err}))
}

module.exports.createPirate = (req, res) => {
    Pirate.create(req.body)
            .then(newPirate => res.json({pirate: newPirate}))
            .catch(err => res.json({message: "Something went wrong!", error:err}))

}

module.exports.deletePirate = (req, res) => {
    Pirate.remove({_id: req.params._id})
            .then(res.json({message: "RIP"}))
            .catch(err => res.json({message: "Something went wrong!", error:err}))
}

module.exports.updatePirate = (req, res) => {
    Pirate.update({_id: req.params._id}, {
        $set: {
            name: req.body.name,
            image: req.body.image,
            chests: req.body.chests,
            catchPhrase: req.body.catchPhrase,
            crewPos: req.body.crewPos,
            pegLeg: req.body.pegLeg,
            eyePatch: req.body.eyePatch,
            hookHand: req.body.hookHand
        }
    })
            .then(allPirates => res.json({pirates: allPirates}))
            .catch(err => res.json({message: "Something went wrong!", error:err}))
}

module.exports.deletePirate = (request, response) => {
    Pirate.deleteOne({ _id: request.params._id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}