const weather = new Weather('London');
const ui = new UI()
document.addEventListener('DOMContentLoaded', getWeather())

// weather.changeLocation('Miami');

function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paint(results)
            console.log(results)
        })
        .catch(err => console.log(err));
    console.log()
}
