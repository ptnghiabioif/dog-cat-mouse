function Mouse(name) {
    this.name = name;
    this.isDead = false;
}

Mouse.prototype.die = function() {
    this.isDead = true;
}
Mouse.prototype.run = function() {
    console.log('Running...');
}

module.exports = Mouse;