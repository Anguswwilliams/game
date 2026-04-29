import { playerSprite } from "./player/movement.js";
import { plains } from "./plains.js";
import { enemies } from "./enemies/base.js";

export function createEnemies() {
    const enemies = plains.enemies;
    const enemyInstances = [];
    for (let i = 0; i < plains.waves.enemies.count; i++) {
        const enemy = enemies[i];
        enemyInstances.push({
            name: enemies[enemy.id].name,
            description: enemies[enemy.id].description,
            imageLink: enemies[enemy.id].imageLink,
            health: enemies[enemy.id].health,
            damage: enemies[enemy.id].damage,
            attackSpeed: enemies[enemy.id].attackSpeed,
            x: Math.random() * 800, 
            y: Math.random() * 800, 
        });  
    }
    return enemyInstances;
}

export function drawHitboxes(enemyInstances) {
    const ctx = document.getElementById("canvas").getContext("2d");
    enemyInstances.forEach(enemy => {
        ctx.strokeStyle = "clear";
        ctx.strokeRect(enemy.x, enemy.y, 48, 48);
    });
}

export function drawEnemies(enemyInstances) {
    const ctx = document.getElementById("canvas").getContext("2d");
    enemyInstances.forEach(enemy => {
        if (enemies[enemy.id] && enemies[enemy.id].id === "tankZombie") {
            //TANK ZOMBIE SPRITE
        } else if (enemies[enemy.id] && enemies[enemy.id].id === "fastZombie") {
            //FAST ZOMBIE SPRITE
        } else if (enemies[enemy.id] && enemies[enemy.id].id === "zombie") {
            enemy.enemySprite = new Image();
            enemy.enemySprite.src = enemies[enemy.id].imageLink;
            ctx.drawImage(enemy.enemySprite, enemy.x, enemy.y, 48, 48);
            
        } else if (enemies[enemy.id] && enemies[enemy.id].id === "Skeleton") {
            //SKELETON SPRITE
        } else if (enemies[enemy.id] && enemies[enemy.id].id === "Mage") {
            //MAGE SPRITE
        }
    });
}

export function enemyAttack(enemyInstances) {
    enemyInstances.forEach(enemy => {
        if (enemy.x - playerSprite.x < 2 && enemy.y - playerSprite.y < 2) {
            playerSprite.health -= enemy.damage; 
        }
    
    });
}


export function moveEnemies(enemyInstances) {
    enemyInstances.forEach(enemy => {
        if (enemy.x < playerSprite.x) {
            enemy.x += 1; 
        }
        if (enemy.x > playerSprite.x) {
            enemy.x -= 1; 
        }
        if (enemy.y < playerSprite.y) {
            enemy.y += 1; 
        }
        if (enemy.y > playerSprite.y) {
            enemy.y -= 1; 
        }
    });
}


export function updateEnemies(enemyInstances) {
    temporaryClearEnemies(enemyInstances); // so they don't leave a trail when they move
    drawHitboxes(enemyInstances);
    drawEnemies(enemyInstances);
    moveEnemies(enemyInstances);
    enemyAttack(enemyInstances);
    
}

export function removeDeadEnemies(enemyInstances) {
    return enemyInstances.filter(enemy => enemy.health > 0);
}

export function clearEnemies(enemyInstances) {
    return [];
}

export function temporaryClearEnemies(enemyInstances) {
    const ctx = document.getElementById("canvas").getContext("2d");
    enemyInstances.forEach(enemy => {
        ctx.clearRect(enemy.x, enemy.y, 48, 48);
    });
}

export function damageEnemy(enemyInstances, x, y, damage) {
    enemyInstances.forEach(enemy => {
        if (x > enemy.x && x < enemy.x + 48 && y > enemy.y && y < enemy.y + 48) {
            enemy.health -= damage;
        }
    });
}

/////////DAMAGE BASED ON ENEMY POSITION, HITBOX SCRIPT AT TOP