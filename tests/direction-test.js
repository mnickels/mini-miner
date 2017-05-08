function directionTest() {
	var passes = 0;
	var tests = 3;

	// test 1
	p = Direction.move(0, 0, Direction.DOWN, 25);
	p = Direction.move(p.x, p.y, Direction.RIGHT, 25);
	p = Direction.move(p.x, p.y, Direction.RIGHT, 25);
	if (p.x == 50 && p.y == 25) {
		passes++;
	}

	// test 2
	p = Direction.move(0, 0, Direction.DOWN, 25);
	p = Direction.move(p.x, p.y, Direction.LEFT, 2);
	p = Direction.move(p.x, p.y, Direction.UP, 10);
	p = Direction.move(p.x, p.y, Direction.RIGHT, -3);
	if (p.x == -5 && p.y == 15) {
		passes++;
	}

	// test 3
	p = Direction.move(0, 0, Direction.UP, 50);
	p = Direction.move(p.x, p.y, Direction.LEFT, 20);
	p = Direction.move(p.x, p.y, Direction.UP, 5);
	if (p.x == -20 && p.y == -55) {
		passes++;
	}

	if (passes == tests) {
		result("direction.move()", Result.PASS);
	} else if (passes == 0) {
		result("direction.move()", Result.FAIL);
	} else {
		result("direction.move()", Result.WARN);
	}
}