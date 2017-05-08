/*
 * Input
 *
 * Holds pressed state of keyboard keys
 *      keycodes: a list of integers that equate to the key codes that trigger the Input
 */
function Input(keycodes) {
    this.state = false;
    this.keycodes = keycodes;
}

Input.prototype.isDown = function() {
    return this.state;
}
Input.prototype.setDown = function() {
    this.state = true;
}
Input.prototype.setUp = function() {
    this.state = false;
}