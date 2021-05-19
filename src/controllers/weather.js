const express = require('express');
const {
    weatherByCoordinates: weatherByCoordinatesService,
    weatherByCityId: weatherByCityIdService } = require('../services/weatherService');
const Success = require('../handler/successHandler');

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const weatherByCoordinates = async (req, res, next) => {

    try {
        const {lon, lat} = req.query;
        const weather = await weatherByCoordinatesService(lon, lat);
        const success = new Success(weather); 
        res.json(success);
    }catch(err){
        next(err);
    }
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const weatherByCityId = async (req, res, next) => {

    try {
        const {city, id} = req.params;
        const weather = await weatherByCityIdService(city, id);
        const success = new Success(weather); 
        res.json(success);
    }catch(err){
        next(err);
    }
};


module.exports = {
    weatherByCoordinates,
    weatherByCityId
}