import "./styles.css";
import { weather} from "./weather";
import vpImage from "./assets/vector-square-plus.png";

const header = document.querySelector(".header");

const image = document.createElement("img");
image.src = vpImage;
image.alt = 'VP Weather Logo';
image.classList.add('VP-logo');

const appTitle = document.createElement('h2');
appTitle.textContent = '+VP Weather+';
appTitle.classList.add('app-title');

header.appendChild(image);
header.appendChild(appTitle);

const button = document.querySelector('#new-location');
const search = document.querySelector('#search');

async function init() {
    const spinner = document.querySelector(".spinner");

    spinner.classList.remove("hidden");

    try {
        const data = await weather.fetchWeather("Tokyo");
        weather.displayWeather(data);
        console.log(data);
    } finally {
        spinner.classList.add("hidden");
    } 
}

init();

button.addEventListener('click', async () => {
    const location = search.value;
    if(!location) return;

    const spinner = document.querySelector(".spinner");
    spinner.classList.remove("hidden");

    button.disabled = true;
    
    try {
        const data = await weather.fetchWeather(location);

        document.querySelector(".error-message").textContent = "";

        weather.displayWeather(data);

    } catch (error) {
        document.querySelector(".error-message").textContent = 
        "City not found. Please enter a valid city name.";
    } finally {
        spinner.classList.add("hidden");
        button.disabled = false;
    }
});