function Block(x, y, blockType) {
	this.x = x;
	this.y = y;
	this.type = blockType;
}

Block.prototype.update = function() { }
Block.prototype.render = function(screen) {
	screen.getContext().fillStyle = this.type.color;
	screen.getContext().fillRect((this.x - screen.getX()), (this.y - screen.getY()), BLOCK_WIDTH, BLOCK_HEIGHT);
}
