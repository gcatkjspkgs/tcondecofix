onEvent('item.tooltip', tooltip => {
	tooltip.add(global.searedBlockIds.map(e => 'tconstruct:' + e), '\u00A7c\u00A7lWARNING!\u00A7r This block is a tile entity, that may cause lag if placed in large quantities. Use Decorative version of this block for decoration')
	tooltip.add(global.searedBlockIds.map(e => 'kubejs:decorative_' + e), '\u00A77Actually safe for decoration, but \u00A76\u00A7lCAN\'T\u00A7r \u00A76be used as a part of the Smeltery\u00A7r')
});