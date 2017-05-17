function Block(x, y, blockType) {
	this.x = x;
	this.y = y;
	this.type = blockType;
}

Block.prototype.update = function() { }
Block.prototype.render = function(context) {
	context.fillStyle = this.type.color;
	context.fillRect(this.x * BLOCK_WIDTH, this.y * BLOCK_HEIGHT, BLOCK_WIDTH, BLOCK_HEIGHT);
}