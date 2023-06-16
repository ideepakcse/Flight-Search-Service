const CrudRepository = require('./crud-repository');

const { Flight } = require('../models');
const db = require('../models');
const { addRowLockOnFlights } = require('./queries');

class FlightRepository extends CrudRepository {
    constructor() {
        super(Flight);
    }
    async getAllFlights(filter, sort) {
        const response = await Flight.findAll({
            where: filter,
            order: sort
        });
        return response;
    }

    async updateRemainingSeats(data,flightId) {
        const transaction = await db.sequelize.transaction();
        try {
            await db.sequelize.query(addRowLockOnFlights(flightId));
            const response = await Flight.update(data, {
                where: {
                    id: flightId
                }
            })
            await transaction.commit();
            return response;
        } catch(error) {
            await transaction.rollback();
            throw error;
        }
       
    }
}

module.exports = FlightRepository;