function Timer(updateFunction, renderFunction) {
	this.update = updateFunction;
	this.render = renderFunction;
	this.lastSec = (new Date).getTime();
	this.lastTime = (new Date).getTime();
	this.updates = 0;
	this.frames = 0;
	this.msPerUpdate = 1000 / TARGET_UPS;
	this.interval = setInterval(tick(this), 1000 / TARGET_FPS);
	console.log(this.interval);
}

function tick(timer) {
	var thisTime = (new Date).getTime();
	console.log("tick");

	if (thisTime - timer.lastTime > timer.msPerUpdate) {
		timer.update();
		timer.updates++;
		timer.lastTime = (new Date).getTime();
	}

	timer.render();
	timer.frames++;

	if (timer.lastSec - thisTime >= 1000) {
		timer.lastSec = thisTime;
		console.log(timer.updates + " UPS");
		console.log(timer.frames + " FPS");
		timer.updates = 0;
		timer.frames = 0;
	}
}
