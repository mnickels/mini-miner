function Block(x, y, passable, hp) {
	this.x = x;
	this.y = y;
	this.passable = passable;
	this.breakable = hp > 0;
	this.hp = hp;
}

Block.prototype.isPassable = function() {
	return this.passable;
}
Block.prototype.isBreakable = function() {
	return this.breakable;
}

Block.prototype.doHit = function(dmg=1) {
	if (this.breakable) {
		this.hp -= dmg;
		if (this.hp <= 0) {
			this.destroy();
		}
	}
}
Block.prototype.destroy = function() { }

Block.prototype.update = function() { }
Block.prototype.render = function(screen) {
	screen.getContext().fillStyle = 'transparent';
	screen.getContext().fillRect((this.x - screen.getX()), (this.y - screen.getY()), BLOCK_WIDTH, BLOCK_HEIGHT);
}
