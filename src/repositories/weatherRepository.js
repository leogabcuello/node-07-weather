const config = require('../config');
const axios = require('axios');

const logger = require ('../loaders/logger');

class WeatherRepositories {

    constructor() {

        this.pathBase = config.openweathermap.pathBase;
        this.appid = config.openweathermap.apikey;
        this.units = 'metric';
        this.lang = 'es'
    }

    async weatherByCoordinates(lon, lat) {

        try{
            const instance = axios.create({
                baseURL: `${this.pathBase}`,
                params: {
                    'appid': this.appid,
                    'units': this.units,
                    'lang': this.lang,
                    lon,
                    lat
                },
            });

            const response = await instance.get();
    
            return response.data;
        } catch (err){
            throw err;
        }

    }
}

module.exports = WeatherRepositories;