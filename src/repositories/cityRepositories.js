const config = require('../config');
const axios = require('axios');

const logger = require ('../loaders/logger');

class CityRepositories {

    constructor() {

        this.pathBase = config.mapbox.pathBase;
        this.apiKey = config.mapbox.apikey;
        this.limit = 10;
        this.language = 'es'
    }

    async findCities(city) {

        try{
            const instance = axios.create({
                baseURL: `${this.pathBase}${city}.json`,
                params: {
                    'access_token': this.apiKey,
                    'limit': this.limit,
                    'language': this.language
                },
            });
    
            const response = await instance.get();
    
            return response.data;
        } catch (err){
            throw err;
        }

    }
}

module.exports = CityRepositories;