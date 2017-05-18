$LAB

// load ALL .js files (presently, alphabetical order)

// /
.script("CONSTANTS.js")
.script("game.js")
.script("screen.js")

// /entity
.script("entity/entity.js")
.script("entity/mob.js")
.script("entity/player.js")

// /util
.script("util/direction.js")
.script("util/error-type.js")
.script("util/input-listener.js")
.script("util/input.js")
.script("util/mainloop.min.js")
.script("util/timer.js")

// /world
.script("world/block-type.js")
.script("world/block.js")
.script("world/world.js")

// WAIT for dependencies to load, then load game and run after load
.wait().script("game.js").wait(function() {
	run();
});