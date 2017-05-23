function Block(x, y, blockType) {
	this.x = x;
	this.y = y;
	this.type = blockType;
}

Block.prototype.update = function() { }
Block.prototype.render = function(screen) {
	screen.getContext().fillStyle = this.type.color;
	screen.getContext().fillRect((this.x - screen.getX()) * BLOCK_WIDTH, (this.y - screen.getY()) * BLOCK_HEIGHT, BLOCK_WIDTH, BLOCK_HEIGHT);
}
