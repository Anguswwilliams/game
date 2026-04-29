import { Slingshot } from "./player/base.js";
import { enemies } from "./enemies/base.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

level = 1;
let gameState;
let game = false;

export var level;

const player = {
        x: 400,
        y: 400,
        image: null,
        d: 5
};
function createPlayer(X, Y) {
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(X, Y, 24, 0, Math.PI * 2);
    ctx.fill();
}

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

function drawMap(object) {
    ctx.fillStyle = object.color1;
    ctx.fillRect(0, 0, 800, 800);
    ctx.fillStyle = object.color2;
    ctx.fillRect(100, 100, 600, 600);
    ctx.fillStyle = object.color3;
    ctx.fillRect(200, 200, 400, 400);

}
const baseGameState = {
        player: {
            maxHealth: 100,
            equippedWeapon: "slingshot",
            x: 400,
            y: 400,
        },
        map: {
            currentMap: "plains",
        }
    }
function initializeGame() {
    drawMap(baseGameState.map.currentMap);
    createPlayer(player.x, player.y);
    return {
        player: {
            maxHealth: 100,
            equippedWeapon: "slingshot",
            x: 400,
            y: 400,
        },
        map: {
            currentMap: "plains",
        }
    }
}

//movement

function handleKeyDown(e) {
    const speed = player.d; // Speed of movement in pixels per key press
    switch (e.key) {
        case 'w':
            player.y -= speed;
            break;
        case 's':
            player.y += speed;
            break;
        case 'a':
            player.x -= speed;
            break;
        case 'd':
            switch (e.key) {
                case 'w':
                    player.y -= speed*Math.sqrt(2);
                    player.x += speed*Math.sqrt(2);
                    break;
                case 's':
                    player.y += speed*Math.sqrt(2);
                    player.x += speed*Math.sqrt(2);
                    break;
                player.x += speed;
                break;
            }
        console.log(e.key);
    }
}
let projectiles = [];
function createProjectile(x, y, radius, color, damage, xdir, ydir, speed) {
    projectiles.push({
        radius: radius,
        color: color,
        damage: damage,
        x: x,
        y: y,
        xdir: xdir,
        ydir: ydir,
        speed: speed
    });
}
function handleKeyDownProjectile(e) {
    const speed = player.d; // Speed of movement in pixels per key press
    switch (e.key) {
        case 'ArrowUp':
            createProjectile(player.x, player.y, 5, 'black', Slingshot.baseDamage, 0, -1, 10); // up at 10 pixels a second
            break;
        case 'ArrowDown':
            createProjectile(player.x, player.y, 5, 'black', Slingshot.baseDamage, 0, 1, 10); // down at 10 pixels a second
            break;
        case 'ArrowLeft':
            createProjectile(player.x, player.y, 5, 'black', Slingshot.baseDamage, -1, 0, 10); // left at 10 pixels a second
            break;
        case 'ArrowRight':
            createProjectile(player.x, player.y, 5, 'black', Slingshot.baseDamage, 1, 0, 10); // right at 10 pixels a second
            break;
    }
}
function main() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if ((game == true)) {
        const gameState = initializeGame();
        drawMap(gameState.map.currentMap);
        {
            ctx.fillStyle = "green";
            ctx.fillRect(0, 0, 800, 800);
            ctx.fillStyle = "blue";
            ctx.fillRect(100, 100, 600, 600);
            ctx.fillStyle = "white";
            ctx.fillRect(200, 200, 400, 400);
        }
        {
            ctx.fillStyle = "black";
            ctx.beginPath();
            ctx.arc(player.x, player.y, 24, 0, Math.PI * 2);
            ctx.fill();
        }
        for (const p of projectiles) {
            p.x += p.xdir * p.speed;
            p.y += p.ydir * p.speed;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fill();
        }
        
            
    }
    requestAnimationFrame(main);
    console.log(player.x + ", " + player.y);
}
document.addEventListener('keydown', handleKeyDownProjectile);
document.addEventListener('keydown', handleKeyDown);
game = true;
main();