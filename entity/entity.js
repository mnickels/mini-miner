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
Entity.prototype.getWidth = function() {
	return this.w;
}
Entity.prototype.getHeight = function() {
	return this.h;
}

Entity.prototype.render = function(context) {
	context.fillStyle = "red";
	context.fillRect(this.x * BLOCK_WIDTH, this.y * BLOCK_HEIGHT, this.w, this.h);
};