// inherits from Entity
function Mob(x, y, width, height, speed) {
	Entity.call(this, x, y, width, height);

	this.speed = speed;
	this.lastDir = Direction.DOWN;
}

Mob.prototype = Object.create(Entity.prototype);
Mob.prototype.constructor = Mob;

Mob.prototype.move = function(dir, dist) {
	var dest = Direction.move(this.x, this.y, dir, dist);

	var b0, b1;

	if (dir == Direction.LEFT) {
		b0 = world.getBlock(dest.x, dest.y);
		b1 = world.getBlock(dest.x, dest.y + this.h - 1);
	} else if (dir == Direction.RIGHT) {
		b0 = world.getBlock(dest.x + this.w, dest.y);
		b1 = world.getBlock(dest.x + this.w, dest.y + this.h - 1);
	} else if (dir == Direction.UP) {
		b0 = world.getBlock(dest.x, dest.y);
		b1 = world.getBlock(dest.x + this.w - 1, dest.y);
	} else if (dir == Direction.DOWN) {
		b0 = world.getBlock(dest.x, dest.y + this.h);
		b1 = world.getBlock(dest.x + this.w - 1, dest.y + this.h);
	}

	if (b0.isPassable() && b1.isPassable()) {
		this.x = dest.x;
		this.y = dest.y;
	} else {
		if (dir == Direction.LEFT) {
			this.x = b0.x + BLOCK_WIDTH;
		} else if (dir == Direction.RIGHT) {
			this.x = b0.x - this.w;
		} else if (dir == Direction.UP) {
			this.y = b0.y + BLOCK_HEIGHT;
		} else if (dir == Direction.DOWN) {
			this.y = b0.y - this.h;
		}
	}

	this.lastDir = dir;
}

Mob.prototype.dig = function(dmg) {
	var dest = Direction.move(this.getCenteredX(), this.getCenteredY(), this.lastDir, BLOCK_WIDTH);

	var block = world.getBlock(dest.x, dest.y);

	block.doHit(dmg);
}
