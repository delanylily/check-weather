class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.description = document.getElementById('w-desc');
        this.temperature = document.getElementById('w-temperature');
        this.details = document.getElementById('w-details');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
    }

    paint(weather) {
        this.location.textContent = weather.name;
        this.description.textContent = weather.weather[0].description;
        this.temperature.textContent = weather.main.temp;
        this.humidity.textContent = `Humidity: ${weather.main.humidity}`;
        this.feelsLike.textContent = `Feels like: ${weather.main.feels_like}`
    }
}