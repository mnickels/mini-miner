function Screen(targetEntity) {
	this.x = 0;
	this.y = 0;
	this.w = SCREEN_WIDTH / BLOCK_WIDTH;
	this.h = SCREEN_HEIGHT / BLOCK_HEIGHT;
	this.target = targetEntity;
	this.canvas = document.createElement("canvas");
	this.canvas.width = SCREEN_WIDTH;
	this.canvas.height = SCREEN_HEIGHT;
	this.context = this.canvas.getContext("2d");
	document.body.insertBefore(this.canvas, document.body.childNodes[0]);
}

Screen.prototype.clear = function() {
	this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
}
Screen.prototype.getContext = function() {
	return this.context;
}
Screen.prototype.getWidth = function() {
	return this.w;
}
Screen.prototype.getHeight = function() {
	return this.h;
}
Screen.prototype.getX = function() {
	return this.x;
}
Screen.prototype.getY = function() {
	return this.y;
}
Screen.prototype.setTarget = function(newTargetEntity) {
	this.target = newTargetEntity;
}

Screen.prototype.update = function() {
	this.x = this.target.getCenteredX() - this.getWidth() / 2;
	this.y = this.target.getCenteredY() - this.getHeight() / 2;
}