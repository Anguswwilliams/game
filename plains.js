
export const plains = {
    name: 'Plains',
    description: 'A vast expanse of grassland with rolling hills and scattered trees. The plains are home to a variety of---zombies???',
    imageLink: null,
    enemies: [// Enemy count
    { // 1
        name: 'Zombie',
        description: 'A slow-moving undead creature that craves brains.',
        imageLink: null,
        health: 50,
        damage: 10,
        attackSpeed: 1, // 1 attack per second
    },
    { // 2
        name: 'Fast Zombie',
        description: 'A fast-moving undead creature that craves brains.',
        imageLink: null,
        health: 30,
        damage: 5,
        attackSpeed: 1.5, // 1.5 attacks per second
    },
    { // 3
        name: 'Tank Zombie',
        description: 'A slow-moving undead creature that is very tough.',
        imageLink: null,
        health: 100,
        damage: 20,
        attackSpeed: 0.25, // 1 attack every 4 seconds
    },
    { // 4
        name: 'Skeleton',
        description: 'A very strong creature that is really good all round.',
        imageLink: null,
        health: 200,
        damage: 50,
        attackSpeed: 1, // 1 attack per second
    },
    { // 5
        name: 'Mage',
        description: 'A powerful spellcaster that can shoot devastating magic attacks.',
        imageLink: null,
        health: 75,
        damage: 25,
        attackSpeed: 1, // 1 attack per second
    }],
    // Wave Layouts
    waves: [
        // 1
    { 
        waveNumber: 1,
        enemies: [
            { 
                id: 1, 
                count: 1 
            },
        ]
    },
        // 2
    { 
        waveNumber: 2,
        enemies: [
            { 
                id: 1, 
                count: 1
            },
            { 
                id: 2, 
                count: 1 
            },
        ]
    },
        // 3
    { 
        waveNumber: 3,
        enemies: [
            { 
                id: 1, 
                count: 2
            },
            { 
                id: 2, 
                count: 1
            },
        ]
    },  
    ] /* Angus add more waves here:
    ID list:
            1 - Zombie
            2 - Fast Zombie
            3 - Tank Zombie
            4 - Skeleton
            5 - Mage
            */
};
