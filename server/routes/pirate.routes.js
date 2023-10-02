const PirateController = require("../controllers/pirate.controllers");

module.exports = (app) => {
  app.post("/api/pirates/new", PirateController.createPirate);
  app.get("/api/pirates", PirateController.getAllPirates);
  app.get("/api/pirates/:id", PirateController.getPirate);
  app.patch("/api/pirates/:id", PirateController.updatePirate);
  app.delete("/api/pirates/:id", PirateController.deletePirate);  

};
