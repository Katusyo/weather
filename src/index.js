import "./styles.css";
import { weather} from "./weather.js";
import vpImage from "./assets/vector-square-plus.png";

const image = document.createElement("img");
image.src = vpImage;
document.body.appendChild(image);

console.log(weather);