const express = require("express");
const router = express.Router(); 


// Import controllers
const trainController = require("../controller/trainController");

// API End Point
router.get("/train/getTrainInfo/:number", (req, res) => trainController.getTrainInfo(req, res));
router.get("/train/getTrainRouteInfo/:number", (req, res) => trainController.getTrainRoutInfo(req, res));
router.post("/train/getTrainCurrentLocation", (req, res) => trainController.getTrainCurrentLocation(req, res));
router.post("/train/getPNRInfo", (req, res) => trainController.getPNRInfo(req, res));
router.post("/train/getBetweenTrain", (req, res) => trainController.getBetweenTrain(req, res));

module.exports = router;