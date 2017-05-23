var gameScreen;
var timer;

var input;

var world;
var player;

var fpsCounter;

function run() {
	init();
}

function init() {
	world = new World();
	player = new Player(10, 10, PLAYER_WIDTH / BLOCK_WIDTH, PLAYER_HEIGHT / BLOCK_HEIGHT, 0.005);

	input = new InputListener();
	gameScreen = new Screen();

	// *** MainLoop.js stuff ***
	fpsCounter = document.getElementById('fpscounter');
	// Start the main loop.
	MainLoop.setUpdate(update).setDraw(render).setEnd(end).start();
}

/*
 * Updates game objects that need updated
 */
update = function(delta) {
    player.update(delta, input.inputs);
}

/*
 * Redraws the game canvas
 */
render = function() {
    gameScreen.clear();
    world.render(gameScreen.getContext(), player.getXOffset(), player.getYOffset());
    player.render(gameScreen.getContext());
}

end = function(fps, panic) {
    fpsCounter.textContent = parseInt(fps, 10) + ' FPS';
    if (panic) {
        // This pattern introduces non-deterministic behavior, but in this case
        // it's better than the alternative (the application would look like it
        // was running very quickly until the simulation caught up to real
        // time). See the documentation for `MainLoop.setEnd()` for additional
        // explanation.
        var discardedTime = Math.round(MainLoop.resetFrameDelta());
        console.warn('Main loop panicked, probably because the browser tab was put in the background. Discarding ' + discardedTime + 'ms');
    }
}