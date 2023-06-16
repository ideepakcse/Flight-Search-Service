const express = require('express');

const { FlightController } = require('../../controllers');
const { FlightMiddleware } = require('../../middlewares');

const router = express.Router();

// /api/v1/flights POST
router.post('/', FlightMiddleware.validateCreateRequest,FlightController.createFlight);

// /api/v1/flights
router.get('/', FlightController.getAllFlights);

// /api/v1/flights/:id GET
router.get('/:id', FlightController.getFlight);

// /api/v1/flights/:id DELETE
router.delete('/:id', FlightController.destroyFlight);

// /api/v1/flights/:id UPDATE
router.put('/:id', FlightController.updateFlight);

// /api/v1/flights/:id/seats PATCH
router.patch('/:id/seats', FlightMiddleware.validateUpdateSeatsRequest,FlightController.updateSeats);
module.exports = router;