import fetch from '../config/fetch'
var findCityByName = (cityName) => fetch('GET', '/position/citylst', {
    cityName: cityName,
});

export { findCityByName }