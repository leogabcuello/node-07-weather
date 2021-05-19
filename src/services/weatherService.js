const WeatherRepositories = require ('../repositories/weatherRepository');
const weatherRepository = new WeatherRepositories();
const CityRepositories = require ('../repositories/cityRepositories');
const cityRepository = new CityRepositories();

const weatherByCoordinates = async(lon, lat) => {
    
    const weather = await weatherRepository.weatherByCoordinates(lon, lat);

    return {
        description: weather.weather[0].description, 
        temperature: weather.main.temp,
        temperatureMin: weather.main.temp_min,
        temperatureMax: weather.main.temp_max
    }
     
}

const weatherByCityId = async(city, id) => {
    
    const cities = await cityRepository.findCities(city);
    const cityData = cities.features.find(e => e.id === id);

    const lon = cityData.geometry.coordinates[0];
    const lat = cityData.geometry.coordinates[1];

    return await weatherByCoordinates(lon, lat);
}

module.exports = { weatherByCoordinates, weatherByCityId };