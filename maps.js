import { level } from "./main.js";
import { initializeGameState } from "./main.js";
import { plains } from "./plains.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");



const tutorial = {
    color1: "#000000",
    color2: "#b2b2b2",
    color3: "#5d5dd5",
}

const map1 = {
    color1: "#000000",
    color2: "#851d03",
    color3: "#ff9451",
}

const map2 = {
    color1: "#000000",
    color2: "#0b3d91",
    color3: "#4c7edb",
}

const map3 = {
    color1: "#000000",
    color2: "#1b7200",
    color3: "#15ca4e",
}

const map4 = {
    color1: "#000000",
    color2: "#920038",
    color3: "#db4c83",
}

const map5 = {
    color1: "#000000",
    color2: "#82a300",
    color3: "#ffef3d",
}




export function mapDescription() {
    document.getElementById("mapDesc").innerHTML = `<h1 style="color:white; text-decoration: underline;">${plains.name}</h1><h3 style="color:white; width: 70%; padding-left: 15%; padding-right: 15%;  ">${plains.description}</h3>`;
    document.getElementById("mapDesc").style.opacity = ".8";
    setTimeout(() => {
        document.getElementById("mapDesc").style.opacity = "0";
    }, 5000);
}


export function drawMap(map) {
    if (map == "plains") {
        ctx.fillStyle = map1.color1;
        ctx.fillRect(0, 0, 800, 800);
        ctx.fillStyle = map1.color2;
        ctx.fillRect(100, 100, 600, 600);
        ctx.fillStyle = map1.color3;
        ctx.fillRect(200, 200, 400, 400);
        //document.getElementById("canvas").style.backgroundImage = `url(${plains.imageLink})`;
    }
}



