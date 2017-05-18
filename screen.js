function Screen() {
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