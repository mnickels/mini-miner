function Block(x, y, blockType) {
	this.x = x;
	this.y = y;
	this.type = blockType;
}

Block.prototype.isColliding = function(x, y, w, h) {
	var x0 = x;
	var y0 = y;
	var x1 = x + w;
	var y1 = y + h;

	var X0 = this.x;
	var Y0 = this.y;
	var X1 = this.x + BLOCK_WIDTH;
	var Y1 = this.y + BLOCK_HEIGHT;

	if ((X0 < x0 && x0 < X1) && (Y0 < y0 && y0 < Y1)) {
		return true;
	} else if ((X0 < x1 && x1 < X1) && (Y0 < y0 && y0 < Y1)) {
		return true;
	} else if ((X0 < x0 && x0 < X1) && (Y0 < y1 && y1 < Y1)) {
		return true;
	} else if ((X0 < x1 && x1 < X1) && (Y0 < y1 && y1 < Y1)) {
		return true;
	}
	return false;
}

Block.prototype.isPassable = function() {
	return this.type.passable;
}

Block.prototype.update = function() { }
Block.prototype.render = function(screen) {
	screen.getContext().fillStyle = this.type.color;
	screen.getContext().fillRect((this.x - screen.getX()), (this.y - screen.getY()), BLOCK_WIDTH, BLOCK_HEIGHT);
}
