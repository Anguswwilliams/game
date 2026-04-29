const basePlayerStats = {
    maxHealth: 100,
    equippedWeapon: "Slingshot",
    x: 400,
    y: 400,
    damageBoost: 0,
    attackSpeedBoost: 0,
    burstChanceBoost: 0,
    projectileSpeedBoost: 0,
};
//Default Weapon
const Slingshot = {
    name: 'Slingshot',
    description: 'A slingshot that can be used to launch projectiles.',
    imageLink: null,
    baseDamage: 5,
    baseAttackSpeed: 1.5, //  1/attackSpeed = cooldown time in seconds so 1.5 attack speed means 1/1.5 = 0.66 seconds cooldown time
    baseBurstChance: 0, // every extra is a 1% chance to fire an extra projectile 50 is a 50% chance to fire an extra projectile and 150 is a 50% chance to fire 3 and guaranteed 2 and so on.
    baseProjectileSpeed: 10 // 10 pixels per tick
}
//Archetypes
const Laser =  {
    name: 'Laser',
    description: 'Laser balls!',
    imageLink: null,
    baseDamage: 20,
    baseAttackSpeed: 2,
    baseBurstChance: 0,
    baseProjectileSpeed: 100 // 100 pixels per tick
}
const bigSlingshot = {
    name: 'Big Slingshot',
    description: 'A big slingshot that can be used to launch bigger projectiles.',
    imageLink: null,
    baseDamage: 100,
    baseAttackSpeed: 0.25,
    baseBurstChance: 0,
    baseProjectileSpeed: 15 // 15 pixels per tick
}
const TripleSlingshot = {
    name: 'Triple Slingshot',
    description: 'A slingshot that can be used to launch three projectiles at once.',
    imageLink: null,
    baseDamage: 5,
    baseAttackSpeed: 1.5,
    baseBurstChance: 200, // Fires two extra projectiles 100% of the time
    baseProjectileSpeed: 10 // 10 pixels per tick
}
function initializePlayer() {
    return {
        baseplayerStats,
        Slingshot,
        Laser,
        bigSlingshot,
        TripleSlingshot
     }
    }
export { Slingshot }