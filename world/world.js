function World() {
	this.worldBlocks = new Array(WORLD_HEIGHT);
	for (i = 0; i < this.worldBlocks.length; i++) {
		this.worldBlocks[i] = new Array(WORLD_WIDTH);
	}
	this.generate();
}

World.prototype.generate = function() {
	for (i = 0; i < WORLD_WIDTH; i++) {
			this.worldBlocks[0][i] = new BruceBlock(i * BLOCK_WIDTH, 0);

			this.worldBlocks[WORLD_HEIGHT - 1][i] = new BruceBlock(i * BLOCK_WIDTH, (WORLD_HEIGHT - 1) * BLOCK_HEIGHT);
	}

	for (i = 0; i < WORLD_HEIGHT; i++) {
			this.worldBlocks[i][0] = new BruceBlock(0, i * BLOCK_HEIGHT);

			this.worldBlocks[i][WORLD_WIDTH - 1] = new BruceBlock((WORLD_WIDTH - 1) * BLOCK_WIDTH, i * BLOCK_HEIGHT);
	}

	for (j = 1; j < WORLD_HEIGHT - 1; j++) {
		for (i = 1; i < WORLD_WIDTH - 1; i++) {
			this.worldBlocks[j][i] = new StoneBlock(i * BLOCK_WIDTH, j * BLOCK_HEIGHT);
		}
	}
	this.prepareSpawnArea(10, 10);
}

World.prototype.prepareSpawnArea = function(x, y) {
	if (validCoordinates(x, y)) {
		for(j = (y - 3 < 0 ? 0 : y - 3); j < (y + 3 >= WORLD_HEIGHT ? WORLD_HEIGHT - 1 : y + 3); j++) {
			for(i = (x - 3 < 0 ? 0 : x - 3); i < (x + 3 >= WORLD_WIDTH ? WORLD_WIDTH - 1 : x + 3); i++) {
				this.worldBlocks[j][i] = new AirBlock(i * BLOCK_WIDTH, j * BLOCK_HEIGHT);
			}
		}
	}
}

World.prototype.getBlock = function(x, y) {
	x = Math.floor(x / BLOCK_WIDTH);
	y = Math.floor(y / BLOCK_HEIGHT);
	if (validCoordinates(x, y)) {
		return this.worldBlocks[y][x];
	} else {
		return null;
	}
}
World.prototype.setBlock = function(newBlock) {
	x = Math.floor(newBlock.x / BLOCK_WIDTH);
	y = Math.floor(newBlock.y / BLOCK_HEIGHT);
	if (validCoordinates(x, y)) {
		this.worldBlocks[y][x] = newBlock;
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