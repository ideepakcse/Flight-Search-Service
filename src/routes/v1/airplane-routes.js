const express = require('express');
const router =express.Router();

const { AirplaneMiddleware }=require('../../middlewares');
const { AirplaneController } = require('../../controllers');

router.post('/',AirplaneMiddleware.validateCreateRequest, AirplaneController.createAirplane);
router.get('/:id',AirplaneController.getAirplane);
router.get('/',AirplaneController.getAllAirplane);
router.delete('/:id',AirplaneController.destroyAirplane);
router.put('/:id',AirplaneController.updateAirplane);
module.exports=router;

