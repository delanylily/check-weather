class Weather {
    constructor(city) {
        this.apiKey = '4983869dccmsh779d7a58a498541p1dfd56jsnb136dbe98ee6';
        this.city = city;
    }

    async getWeather() {
        const response = await fetch(`https://open-weather13.p.rapidapi.com/city/${this.city}`, options);
        const responseData = await response.json();
        return responseData;
    }

    changeLocation(city) {
        this.city = city;
    }
}

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4983869dccmsh779d7a58a498541p1dfd56jsnb136dbe98ee6',
        'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    }
};
