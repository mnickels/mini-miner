function runTests() {
	directionTest();
}

const Result = {
	PASS: "pass",
	FAIL: "fail",
	WARN: "warn",
}

function result(testText, result) {
	$("#tests").append(
		"<div class='test " + result + "'>" +
			testText +
		"</div>"
	);
}