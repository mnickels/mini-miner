/*
 * InputListener
 * contains Inputs for game
 *
 * access inputs via <InputListenerObj>.inputs.<inputName(see constructor)>.isDown();
 */
function InputListener() {
	this.inputs = {
		left: new Input(INPUT_LEFT_KEYCODES),
        right: new Input(INPUT_RIGHT_KEYCODES),
        up: new Input(INPUT_UP_KEYCODES),
        down: new Input(INPUT_DOWN_KEYCODES),
	};
	ILobj = this;
	window.addEventListener('keydown', function(e) {
		ILobj.keyPressed(e.keyCode);
	});
	window.addEventListener('keyup', function(e) {
		ILobj.keyReleased(e.keyCode);
    });
}

InputListener.prototype.keyPressed = function(keyCode) {
	for (key in this.inputs) {
		if (this.inputs[key].keycodes.indexOf(keyCode) != -1) {
			this.inputs[key].setDown();
		}
	}
}
InputListener.prototype.keyReleased = function(keyCode) {
	for (key in this.inputs) {
        if (this.inputs[key].keycodes.indexOf(keyCode) != -1) {
            this.inputs[key].setUp();
        }
    }
}