const { AirplaneRepository }  =require('../repositories');


const airplaneRepository=new AirplaneRepository();
async function createAirplane(data)
{
    try{
        const airplane= await airplaneRepository.create(data);
        return airplane;
    }
    catch(error) {
        if(error.name == 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new Airplance object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplane(id)
{
    try{
        const airplane= await airplaneRepository.get(id);
        return airplane;
    }
    catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The airplane you requested is not present', error.statusCode);
        }
        throw new AppError('Cannot fetch data of the requested airplane', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAllAirplane()
{
    try{
        const airplane= await airplaneRepository.getAll();
        return airplane;
    }
    catch(error){
        throw new AppError('Cannot fetch data of all the airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyAirplane(id)
{
    try{
        const airplane= await airplaneRepository.destroy(id);
        return airplane;
    }
    catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The airplane you requested to delete is not present', error.statusCode);
        }
        throw new AppError('Cannot fetch data of the requested airplane', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirplane(data,id)
{
    try{
        const airplane= await airplaneRepository.update(data,id);
        return airplane;
    }
    catch(error){
        throw new AppError('Cannot update data of the requested airplane', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports={
    createAirplane,
    getAirplane,
    getAllAirplane,
    destroyAirplane,
    updateAirplane
}
