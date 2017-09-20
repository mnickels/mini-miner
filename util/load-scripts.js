$LAB

// load ALL .js files (presently, alphabetical order)

// /
.script("CONSTANTS.js")
.script("game.js")
.script("screen.js")

// /entity
.script("entity/entity.js").wait()
.script("entity/mob.js").wait()
.script("entity/player.js")

// /util
.script("util/direction.js")
.script("util/error-type.js")
.script("util/input-listener.js")
.script("util/input.js")
.script("util/mainloop.min.js")

// /world
.script("world/world.js")
// /world/blocks
.script("world/blocks/block.js")
.script("world/blocks/air-block.js")
.script("world/blocks/stone-block.js")
.script("world/blocks/bruce-block.js")

// WAIT for dependencies to load, then load game and run after load
.script("game.js").wait(function() {
	run();
});