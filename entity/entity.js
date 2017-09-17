function Entity(x, y, width, height) {
	this.x = x;
	this.y = y;
	this.w = width;
	this.h = height;
}

Entity.prototype.getX = function() {
	return this.x;
}
Entity.prototype.getY = function() {
	return this.y;
}
Entity.prototype.getCenteredX = function() {
	return this.x + (this.w / 2);
}
Entity.prototype.getCenteredY = function() {
	return this.y + (this.h / 2);
}

Entity.prototype.getWidth = function() {
	return this.w;
}
Entity.prototype.getHeight = function() {
	return this.h;
}

Entity.prototype.isColliding = function(x, y, w, h) {
	var x0 = x;
	var y0 = y;
	var x1 = x + w;
	var y1 = y + h;

	var X0 = this.x;
	var Y0 = this.y;
	var X1 = this.x + this.w;
	var Y1 = this.y + this.h;

	if ((X0 < x0 && x0 < X1) && (Y0 < y0 && y0 < Y1)) {
		return true;
	} else if ((X0 < x1 && x1 < X1) && (Y0 < y0 && y0 < Y1)) {
		return true;
	} else if ((X0 < x0 && x0 < X1) && (Y0 < y1 && y1 < Y1)) {
		return true;
	} else if ((X0 < x1 && x1 < X1) && (Y0 < y1 && y1 < Y1)) {
		return true;
	}
	return false;
}

Entity.prototype.render = function(screen) {
	screen.getContext().fillStyle = "pink";
	screen.getContext().fillRect((this.x - screen.getX()), (this.y - screen.getY()), this.w, this.h);
};