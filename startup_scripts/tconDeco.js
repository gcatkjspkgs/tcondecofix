onEvent('block.registry', e => {
    let seared = [
        { type: 'stone', name: 'Decorative Seared Stone' },
        { type: 'cobble', name: 'Decorative Seared Cobblestone' },
        { type: 'bricks', name: 'Decorative Seared Bricks' },
        { type: 'paver', name: 'Decorative Seared Paver' },
        { type: 'cracked_bricks', name: 'Decorative Cracked Seared Bricks' },
        { type: 'triangle_bricks', name: 'Decorative Triangle Seared Bricks' },
        { type: 'fancy_bricks', name: 'Decorative Fancy Seared Bricks' },
    ];

    seared.forEach((type, i) => {
        if (typeof type !== 'object') {
            type = {
                type: type,
                name: `Decorative Seared ${type.toUpperCase()}`,
            }
        }
        e.create(`decorative_seared_${type.type}`)
            .material('rock')
            .hardness(3)
            .resistance(9)
            .displayName(type.name)
            .harvestTool('pickaxe', 1)
            // .item(item => item.glow(true))
            .model(`tconstruct:block/smeltery/seared/${type.type}`)
    });

    e.create(`decorative_seared_glass`)
        .material('glass')
        .hardness(3)
        .resistance(9)
        .renderType('cutout')
        .defaultCutout()
        .opaque(false)
        .suffocating(false)
        .displayName('Decorative Seared Glass')
        .harvestTool('pickaxe', 1)
        // .item(item => item.glow(true))
        .model(`tconstruct:block/smeltery/glass/block`)

    e.create(`decorative_scorched_glass`)
        .material('glass')
        .hardness(3)
        .resistance(9)
        .renderType('cutout')
        .defaultCutout()
        .opaque(false)
        .suffocating(false)
        .displayName('Decorative Scorched Glass')
        .harvestTool('pickaxe', 1)
        // .item(item => item.parentModel('kubejs:item/overlay'))
        .model(`tconstruct:block/foundry/glass/block`)

    let scorched = [
        { type: 'decorative_scorched_stone', name: 'Decorative Scorched Stone', model: 'stone', pillar: true },
        { type: 'decorative_polished_scorched_stone', name: 'Decorative Polished Scorched Stone', model: 'polished', pillar: true },
        { type: 'decorative_scorched_bricks', name: 'Decorative Scorched Bricks', model: 'bricks', pillar: false },
        { type: 'decorative_chiseled_scorched_bricks', name: 'Decorative Chiseled Scorched Bricks', model: 'chiseled', pillar: false },
        { type: 'decorative_scorched_road', name: 'Decorative Scorched Road', model: 'road', pillar: false },
    ];

    scorched.forEach((type, i) => {
        e.create(type.type)
            .material('rock')
            .hardness(3)
            .resistance(9)
            .displayName(type.name)
            .harvestTool('pickaxe', 1)
            // .item(item => item.glow(true))
            .model(`tconstruct:block/foundry/scorched/${type.model}`)
    });
})

global.searedStonecutting = {
    'seared_stone': ['seared_bricks', 'seared_triangle_bricks', 'seared_fancy_bricks'],
    'seared_bricks': ['seared_triangle_bricks', 'seared_fancy_bricks'],
    'seared_triangle_bricks': ['seared_bricks', 'seared_fancy_bricks'],
    'seared_fancy_bricks': ['seared_bricks', 'seared_triangle_bricks'],
    'scorched_stone': ['chiseled_scorched_bricks', 'polished_scorched_stone', 'scorched_bricks'],
    'scorched_road': ['chiseled_scorched_bricks', 'polished_scorched_stone', 'scorched_bricks'],
    'polished_scorched_stone': ['chiseled_scorched_bricks', 'scorched_bricks'],
    'scorched_bricks': ['chiseled_scorched_bricks', 'polished_scorched_stone'],
    'scorched_bricks': ['chiseled_scorched_bricks', 'polished_scorched_stone'],
    'chiseled_scorched_bricks': ['scorched_bricks', 'polished_scorched_stone'],
}

global.searedBlockIds = [
    'seared_stone',
    'seared_cobble',
    'seared_bricks',
    'seared_paver',
    'seared_cracked_bricks',
    'seared_triangle_bricks',
    'seared_fancy_bricks',
    'seared_glass',
    'scorched_glass',

    'scorched_stone',
    'polished_scorched_stone',
    'scorched_bricks',
    'chiseled_scorched_bricks',
    'scorched_road',
    'scorched_glass',
    'seared_glass',
]