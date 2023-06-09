const express = require('express');

const { CityController } = require('../../controllers');

const { CityMiddleware } = require('../../middlewares');


const router = express.Router();

// /api/v1/cities POST
router.post('/', CityMiddleware.validateCreateRequest,CityController.createCity);

// /api/v1/cities GET
router.get('/', CityController.getAllCity);

// /api/v1/cities/:id GET
router.get('/:id', CityController.getCity);

// /api/v1/cities/:id DELETE
router.delete('/:id', CityController.destroyCity);

// /api/v1/cities/:id UPDATE
router.put('/:id', CityController.updateCity);

module.exports = router;