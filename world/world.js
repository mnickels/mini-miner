function World() {
	this.worldBlocks = new Array(WORLD_HEIGHT);
	for (i = 0; i < this.worldBlocks.length; i++) {
		this.worldBlocks[i] = new Array(WORLD_WIDTH);
	}
	this.generate();
}

World.prototype.generate = function() {
	for (j = 0; j < WORLD_HEIGHT; j++) {
		for (i = 0; i < WORLD_WIDTH; i++) {
			this.worldBlocks[j][i] = new Block(i * BLOCK_WIDTH, j * BLOCK_HEIGHT, BlockType.STONE);
		}
	}
	this.prepareSpawnArea(10, 10);
}
World.prototype.prepareSpawnArea = function(x, y) {
	if (validCoordinates(x, y)) {
		for(j = (y - 3 < 0 ? 0 : y - 3); j < (y + 3 >= WORLD_HEIGHT ? WORLD_HEIGHT - 1 : y + 3); j++) {
			for(i = (x - 3 < 0 ? 0 : x - 3); i < (x + 3 >= WORLD_WIDTH ? WORLD_WIDTH - 1 : x + 3); i++) {
				this.worldBlocks[j][i] = new Block(i * BLOCK_WIDTH, j * BLOCK_HEIGHT, BlockType.AIR);
			}
		}
	}
}

World.prototype.getBlock = function(x, y) {
	x = Math.floor(x);
	y = Math.floor(y);
	if (validCoordinates(x, y)) {
		return this.worldBlocks[y][x];
	} else {
		return null;
	}
}
World.prototype.update = function() { }
World.prototype.render = function(screen) {
	for (j = 0; j < WORLD_HEIGHT; j++) {
		for (i = 0; i < WORLD_WIDTH; i++) {
			this.worldBlocks[j][i].render(screen);
		}
	}
}

function validCoordinates(x, y) {
	if (x < 0 || x > WORLD_WIDTH || y < 0 || y > WORLD_HEIGHT) return false;
	return true;
}