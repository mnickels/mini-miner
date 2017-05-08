const Direction = {
	UP: 0,
	RIGHT: 1,
	DOWN: 2,
	LEFT: 3,
	move: function(x, y, dir, dist) {
		var newX = x + (dir == this.LEFT ? -1 : (dir == this.RIGHT ? 1 : 0)) * dist;
		var newY = y + (dir == this.UP ? -1 : (dir == this.DOWN ? 1 : 0)) * dist;
		return {
			x: newX,
			y: newY
		};
	}
}