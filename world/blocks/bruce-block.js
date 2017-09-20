// inherits from Block
function BruceBlock(x, y) {
	Block.call(this, x, y, false, 0);
}

BruceBlock.prototype = Object.create(Block.prototype);
BruceBlock.constructor = BruceBlock;

BruceBlock.prototype.render = function(screen) {
	screen.getContext().fillStyle = 'black';
	screen.getContext().fillRect((this.x - screen.getX()), (this.y - screen.getY()), BLOCK_WIDTH, BLOCK_HEIGHT)
}