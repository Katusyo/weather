export const weather = {
    apiKey: "YOUR_API_KEY",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather",
    fetchWeather: function (city) {
        const url = `${this.baseUrl}?q=${city}&appid=${this.apiKey}&units=metric`;
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("City not found");
                }
                return response.json();
            })
            .then(data => this.displayWeather(data))
            .catch(error => console.error(error));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        console.log(`City: ${name}`);
        console.log(`Temperature: ${temp}°C`);
        console.log(`Humidity: ${humidity}%`);
        console.log(`Wind Speed: ${speed} km/h`);
        console.log(`Description: ${description}`);
        console.log(`Icon: http://openweathermap.org/img/wn/${icon}.png`);
    }
};