function Player(x, y, width, height, speed) {
	Mob.call(this, x, y, width, height, speed);
}

Player.prototype = Object.create(Mob.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function(delta, kbInputs) {

	if (kbInputs.left.isDown()) {
		this.move(Direction.LEFT, delta * this.speed);
	}
	if (kbInputs.right.isDown()) {
		this.move(Direction.RIGHT, delta * this.speed);
	}
	if (kbInputs.up.isDown()) {
		this.move(Direction.UP, delta * this.speed);
	}
	if (kbInputs.down.isDown()) {
		this.move(Direction.DOWN, delta * this.speed);
	}
}