const express = require('express');
const router =express.Router();

const { CityMiddleware }=require('../../middlewares');
const { CityController } = require('../../controllers');

router.post('/',CityMiddleware.validateCreateRequest, CityController.createCity);
router.get('/:id',CityController.getCity);
router.get('/',CityController.getAllCity);
router.delete('/:id',CityController.destroyCity);
router.put('/:id',CityController.updateCity);
module.exports=router;