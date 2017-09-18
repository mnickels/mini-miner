// inherits from Entity
function Mob(x, y, width, height, speed) {
	Entity.call(this, x, y, width, height);

	this.speed = speed;
}

Mob.prototype = Object.create(Entity.prototype);
Mob.prototype.constructor = Mob;

Mob.prototype.move = function(dir, dist) {
	var dest = Direction.move(this.x, this.y, dir, dist);

	var b0, b1;

	if (dir == Direction.LEFT) {
		b0 = world.getBlock(dest.x, Math.floor(dest.y));
		b1 = world.getBlock(dest.x, Math.ceil(dest.y));
	} else if (dir == Direction.RIGHT) {
		b0 = world.getBlock(dest.x + this.w, Math.floor(dest.y));
		b1 = world.getBlock(dest.x + this.w, Math.ceil(dest.y));
	} else if (dir == Direction.UP) {
		b0 = world.getBlock(Math.floor(dest.x), dest.y);
		b1 = world.getBlock(Math.ceil(dest.x), dest.y);
	} else if (dir == Direction.DOWN) {
		b0 = world.getBlock(Math.floor(dest.x), dest.y + this.h);
		b1 = world.getBlock(Math.ceil(dest.x), dest.y + this.h);
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
}
