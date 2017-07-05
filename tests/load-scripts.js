$LAB

.script("../util/direction.js")
.script("direction-test.js")

.script("https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js")

.script("test-suite.js").wait(function() {
	runTests();
});
