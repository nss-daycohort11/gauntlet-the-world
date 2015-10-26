var Weapon = function() {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;

  this.toString = function() {
    return this.name;
  }
};

// Physical Weapons
var Knives = function() {
  this.name = "knives";
  this.damage = 4;
  this.hands = 1;
};
Knives.prototype = new Weapon();

var Sword = function() {
  this.name = "sword";
  this.damage = 14;
  this.hands = 2;
};
Sword.prototype = new Weapon();

var Hammer = function() {
  this.name = "large hammer";
  this.damage = 18;
  this.hands = 2;
};
Hammer.prototype = new Weapon();

var Gun = function() {
  this.name = "ray gun";
  this.damage = 14;
  this.hands = 1;
};
Gun.prototype = new Weapon();


// Musical Weapons
var Guitar = function() {
  this.name = "guitar";
  this.damage = 4;
  this.hands = 2;
};
Guitar.prototype = new Weapon();

var Bass = function() {
  this.name = "bass";
  this.damage = 14;
  this.hands = 2;
};
Bass.prototype = new Weapon();

var Drums = function() {
  this.name = "drums";
  this.damage = 18;
  this.hands = 2;
};
Drums.prototype = new Weapon();

var Mic = function() {
  this.name = "mic";
  this.damage = 14;
  this.hands = 1;
};
Mic.prototype = new Weapon();