import "./styles.css";
import { weather} from "./weather";
import vpImage from "./assets/vector-square-plus.png";

const image = document.createElement("img");
image.src = vpImage;
document.body.appendChild(image);

const button = document.querySelector('#new-location');
const search = document.querySelector('#search');

async function init() {
    const data = await weather.fetchWeather("Tokyo");
    weather.displayWeather(data);
}

init();

button.addEventListener('click', async () => {
    const location = search.value;
    if(location){
        await weather.fetchWeather(location);
    }
})

