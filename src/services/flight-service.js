const { StatusCodes } = require('http-status-codes');

const { FlightRepository } = require('../repositories');

const AppError = require('../utils/errors/app-error');

const { Op } = require('sequelize');

const flightRepository = new FlightRepository();

async function createFlight(data) {
    try {
        const flight = await flightRepository.create(data);
        return flight;
    } catch(error) {
        if(error.name == 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new Flight object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAllFlights(query) {
    let customFilter = {};
    let sortFilter = [];
    const endingTripTime = " 23:59:00";
    // trips=MUM-DEL
    if(query.trips) {

       [departureAirportId, arrivalAirportId] = query.trips.split("-"); 
       customFilter.departureAirportId = departureAirportId;
       customFilter.arrivalAirportId = arrivalAirportId;
    }
    //price=2000-5000
    if(query.price) {
        [minPrice, maxPrice] = query.price.split("-");
        customFilter.price = {
            [Op.between]: [minPrice, ((maxPrice == undefined) ? 20000: maxPrice)]
        }
    }
    //travellers=2
    if(query.travellers) {
        customFilter.totalSeats = {
            [Op.gte]: query.travellers  // gte->greater than
        }
    }
    //tripDate=2023-06-17
    if(query.tripDate) {
        customFilter.departureTime = {
            [Op.between]: [query.tripDate, query.tripDate + endingTripTime]
        }
    }
    //sort=property_ASC or property_DESC
    //sort=departureTime_ASC,price_ASC //if departure time is same for some flights and price will be considered for sorting criteria
    if(query.sort) {
        const params = query.sort.split(',');
        const sortFilters = params.map((param) => param.split('_'));
        console.log(sortFilters);
        sortFilter = sortFilters
    }
    try {
        const flights = await flightRepository.getAllFlights(customFilter, sortFilter);
        return flights;
    } catch(error) {
        throw new AppError('Cannot fetch data of all the flights', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createFlight,
    getAllFlights
}