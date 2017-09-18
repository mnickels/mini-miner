// inherits from Entity
function Mob(x, y, width, height, speed) {
	Entity.call(this, x, y, width, height);

	this.speed = speed;
}

Mob.prototype = Object.create(Entity.prototype);
Mob.prototype.constructor = Mob;

Mob.prototype.move = function(dir, dist) {
	var dest = Direction.move(this.x, this.y, dir, dist);

	var top = world.getBlock(dest.x, Math.floor(dest.y));
	var bottom = world.getBlock(dest.x, Math.ceil(dest.y));

	var isColliding = top.isColliding(this.x, this.y, this.w, this.h);
	isColliding = bottom.isColliding(this.x, this.y, this.w, this.h) || isColliding;

	var isPassable = top.isPassable();
	isPassable = bottom.isPassable() || isPassable;

	if (!isColliding && isPassable) {
		this.x = dest.x;
		this.y = dest.y;
	}
}
