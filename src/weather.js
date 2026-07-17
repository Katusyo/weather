import { weatherIcons } from "./assets/weather-icons";

export const weather = {
    currentWeather: null,
    unit: "F",

    apiKey: process.env.VISUAL_CROSSING_API_KEY,
    baseUrl: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline",

    convertTemperature(temp) {
        if (this.unit === "F") {
            return temp;
        }

        return ((temp - 32) * 5 / 9).toFixed(1);
    },

    toggleUnits() {
        this.unit = this.unit === "F" ? "C" : "F";

        if (this.currentWeather) {
            this.displayWeather(this.currentWeather);
        }
    },
    
    async fetchWeather(location) {
        try {
            const response = await fetch(
                `${this.baseUrl}/${location}?key=${this.apiKey}`
            );

            if (!response.ok) {
                throw new Error("City not found");
            }

            const data = await response.json();

            return data;

        } catch (error) {
            throw error;
        }
    },


    displayWeather(data) {
        this.currentWeather = data;

        const {currentConditions, address } = data;
        const {icon, conditions, temp, humidity, windspeed } = currentConditions;

        const displayTemp = this.convertTemperature(temp);

        const cityElement = document.querySelector(".city");
        const tempElement = document.querySelector(".temp");
        const descriptionElement = document.querySelector(".description");
        const humidityElement = document.querySelector(".humidity");
        const windElement = document.querySelector(".wind");
        const iconElement = document.querySelector(".weather-icon");

        iconElement.src = weatherIcons[icon] ?? weatherIcons["cloudy"];
        iconElement.alt = conditions;

        document.body.classList.remove(
            "clear-day",
            "clear-night",
            "rain",
            "snow",
            "cloudy",
            "fog",
            "partly-cloudy-day",
            "partly-cloudy-night",
            "wind",
            "thunderstorms",
            "thunderstorms-rain"
        );

        document.body.classList.add(icon);

        cityElement.textContent = address;
        tempElement.textContent = `${displayTemp}°${this.unit}`;
        descriptionElement.textContent = conditions;
        humidityElement.textContent = `Humidity: ${humidity}%`;
        windElement.textContent = `Wind: ${windspeed} km/h`;
        console.log(icon);
    }
};