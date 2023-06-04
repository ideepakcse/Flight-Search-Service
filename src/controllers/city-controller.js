const { StatusCodes } = require('http-status-codes');
const { CityService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');
/*
POST REQ:
req body -> {
    name=bengaluru
}
*/
async function createCity(req ,res) {
    
    try{
           const city = await CityService.createCity({
            name : req.body.name,
        });
        SuccessResponse.data = city;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } 
    catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function getCity(req ,res) {
    try{
          
        const city = await CityService.getCity(req.params.id);
        SuccessResponse.data = city;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
        
    } 
    catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function getAllCity(req ,res) {
    try{
          
        const city = await CityService.getAllCity();
        SuccessResponse.data = city;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
      
    } 
    catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function destroyCity(req ,res) {
    try{
        
        const city = await CityService.destroyCity(req.params.id);
        SuccessResponse.data = city;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } 
    catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function updateCity(req ,res) {
    try{
       
        const city = await CityService.updateCity(req.body,req.params.id);
        SuccessResponse.data = city;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } 
    catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports={
    createCity,
    getCity,
    getAllCity,
    destroyCity,
    updateCity
}