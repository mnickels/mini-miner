// inherits from Entity
function Mob(x, y, width, height, speed) {
	Entity.call(this, x, y, width, height);

	this.speed = speed;
}

Mob.prototype = Object.create(Entity.prototype);
Mob.prototype.constructor = Mob;

Mob.prototype.move = function(dir, dist) {
	var dest = Direction.move(this.x, this.y, dir, dist);
	
}
