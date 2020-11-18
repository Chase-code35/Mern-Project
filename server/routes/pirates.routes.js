const PirateController = require('../controllers/pirates.controller');

module.exports = app => {
    app.get("/api/pirates", PirateController.findAllPirates);
    app.get("/api/pirates/:_id", PirateController.findOnePirate);
    app.post("/api/pirates/new", PirateController.createPirate);
    app.delete("/api/pirates/delete/:_id", PirateController.deletePirate);
    app.put("/api/pirates/update/:_id", PirateController.updatePirate);
}