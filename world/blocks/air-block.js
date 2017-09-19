// inherits from Block
function AirBlock(x, y) {
	Block.call(this, x, y, true, 0);
}

AirBlock.prototype = Object.create(Block.prototype);
AirBlock.constructor = AirBlock;