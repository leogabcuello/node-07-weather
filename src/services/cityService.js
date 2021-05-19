const CityRepositories = require ('../repositories/cityRepositories');

const repository = new CityRepositories();

const findCities = async(city) => {
    
    const cities = await repository.findCities(city);

    return cities.features.map( e => {
        return {
            id: e.id,
            name: e.place_name,
            log: e.geometry.coordinates[0],
            lat: e.geometry.coordinates[1]
        }
    }) 
}

module.exports = { findCities };