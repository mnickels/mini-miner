// inherits from Entity
function Mob(x, y, width, height, speed) {
	Entity.call(this, x, y, width, height);

	this.speed = speed;
}

Mob.prototype = Object.create(Entity.prototype);
Mob.prototype.constructor = Mob;

Mob.prototype.move = function(dir, dist) {
	var dest = Direction.move(this.x, this.y, dir, dist);
	var canMove = true;
	var blockedAt;

	if (dir == Direction.LEFT) {
		loop: for (i = Math.floor(this.x); i >= Math.floor(dest.x); i--) {
			for (j = Math.floor(this.y); j <= Math.floor(this.y + (this.h - 1) / BLOCK_HEIGHT); j++) {
				if (!world.getBlock(i, j).type.passable) {
					canMove = false;
					blockedAt = i;
					break loop;
				}
			}
		}
		if (canMove) {
			this.x = dest.x;
			console.log('left:' + '(' + this.x + ',' + this.y + ')');
		} else {
			this.x = blockedAt + 1;
		}
	} else if (dir == Direction.RIGHT) {
		loop: for (i = Math.floor(this.x + this.w / BLOCK_WIDTH); i <= Math.floor(dest.x + this.w / BLOCK_WIDTH); i++) {
			for (j = Math.floor(this.y); j <= Math.floor(this.y + (this.h - 1) / BLOCK_HEIGHT); j++) {
				if (!world.getBlock(i, j).type.passable) {
					canMove = false;
					blockedAt = i;
					break loop;
				}
			}
		}
		if (canMove) {
			this.x = dest.x;
			console.log('right:' + '(' + this.x + ',' + this.y + ')');
		} else {
			this.x = blockedAt - this.w / BLOCK_WIDTH;
		}
	} else if (dir == Direction.DOWN) {
		loop: for (i = Math.floor(this.y + this.h / BLOCK_HEIGHT); i <= Math.floor(dest.y + this.h / BLOCK_HEIGHT); i++) {
			for (j = Math.floor(this.x); j <= Math.floor(this.x + (this.w - 1) / BLOCK_WIDTH); j++) {
				if (!world.getBlock(i, j).type.passable) {
					canMove = false;
					blockedAt = i;
					break loop;
				}
			}
		}
		if (canMove) {
			this.y = dest.y;
			console.log('down:' + '(' + this.x + ',' + this.y + ')');
		} else {
			this.y = blockedAt - this.h / BLOCK_HEIGHT;
		}
	} else if (dir == Direction.UP) {
		loop: for (i = Math.floor(this.y); i >= Math.floor(dest.y); i--) {
			for (j = Math.floor(this.x); j <= Math.floor(this.x + (this.w - 1) / BLOCK_WIDTH); j++) {
				if (!world.getBlock(i, j).type.passable) {
					canMove = false;
					blockedAt = i;
					break loop;
				}
			}
		}
		if (canMove) {
			this.y = dest.y;
			console.log('up:' + '(' + this.x + ',' + this.y + ')');
		} else {
			this.y = blockedAt + 1;
		}
	}

	// console.log('(' + this.x + ',' + this.y + ')');
}
