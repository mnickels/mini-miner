// inherits from Block
function StoneBlock(x, y) {
	Block.call(this, x, y, false, 3);
}

StoneBlock.prototype = Object.create(Block.prototype);
StoneBlock.constructor = StoneBlock;

StoneBlock.prototype.destroy = function() {
	world.setBlock(new AirBlock(this.x, this.y))
}

StoneBlock.prototype.render = function(screen) {
	screen.getContext().fillStyle = 'grey';
	screen.getContext().fillRect((this.x - screen.getX()), (this.y - screen.getY()), BLOCK_WIDTH, BLOCK_HEIGHT)
}