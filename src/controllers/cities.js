const express = require('express');
const { findCities } = require('../services/cityService'); 
const Success = require('../handler/successHandler');

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const cities = async (req, res, next) => {
    try{
        res.json(new Success(await findCities(req.params.city)));
    }catch(err){
        next(err);
    }
};


module.exports = {
    cities
}