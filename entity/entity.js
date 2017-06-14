function Entity(x, y, width, height) {
	this.x = x;
	this.y = y;
	this.w = width;
	this.h = height;
}

Entity.prototype.getX = function() {
	return this.x;
}
Entity.prototype.getY = function() {
	return this.y;
}
Entity.prototype.getCenteredX = function() {
	return this.x - this.w / 2;
}
Entity.prototype.getCenteredY = function() {
	return this.y - this.h / 2;
}

Entity.prototype.getWidth = function() {
	return this.w;
}
Entity.prototype.getHeight = function() {
	return this.h;
}

Entity.prototype.render = function(screen) {
	screen.getContext().fillStyle = "red";
	screen.getContext().fillRect((this.x - screen.getX()) * BLOCK_WIDTH, (this.y - screen.getY()) * BLOCK_HEIGHT, this.w * BLOCK_WIDTH, this.h * BLOCK_HEIGHT);
};