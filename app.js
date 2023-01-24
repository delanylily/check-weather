const weather = new Weather('London');
const ui = new UI()
document.addEventListener('DOMContentLoaded', getWeather())
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    weather.changeLocation(city);
    getWeather();
})
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
