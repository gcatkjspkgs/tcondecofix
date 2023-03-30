onEvent('recipes', event => {
	global.searedBlockIds.forEach(type => {
		event.shapeless('tconstruct:' + type, ['kubejs:decorative_' + type])
		event.shapeless('kubejs:decorative_' + type, ['tconstruct:' + type])
		event.stonecutting('tconstruct:' + type, 'kubejs:decorative_' + type)
		event.stonecutting('kubejs:decorative_' + type, 'tconstruct:' + type)
		let cutting = global.searedStonecutting[type];
		if (cutting) {
			cutting.forEach(output => {
				event.stonecutting('tconstruct:' + output, 'kubejs:decorative_' + type)
				event.stonecutting('kubejs:decorative_' + output, 'tconstruct:' + type)
				event.stonecutting('kubejs:decorative_' + output, 'kubejs:decorative_' + type)
			});
		}
	});
})