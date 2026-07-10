import { weatherIcons } from "./assets/weather-icons";

export const weather = {
    apiKey: "ZTQKX2XDDDMPGWAFB6LA2DXZ9",
    baseUrl: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline",
    
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
            console.error("Error fetching weather data:", error);
        }
    },

    displayWeather(data) {
        const city = data.address;
        const current = data.currentConditions;
        const iconName = data.currentConditions.icon;

        document.querySelector(".weather-icon").src = weatherIcons[iconName];
        document.querySelector(".city").textContent = city;
        document.querySelector(".temp").textContent = `${current.temp}°F`;
        document.querySelector(".description").textContent = current.conditions;
        document.querySelector(".humidity").textContent = `Humidity: ${current.humidity}%`;
        document.querySelector(".wind").textContent = `wind: ${current.windspeed} km/h`;
    }
};