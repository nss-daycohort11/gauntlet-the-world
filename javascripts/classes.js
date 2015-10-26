/*
  Base function for a player, or enemy, class (profession)
 */
var PlayerClass = function() {
  this.name = "Loser";
  this.healthBonus = 0;
  this.strengthBonus = 0;
  this.intelligenceBonus = 0;
  this.evadeBonus = 0;
  this.defenseBonus = 0;
  this.magical = false;

  this.toString = function() {
    return this.name;
  }
};

/*
    FIGHTER CLASSES
      - Warrior
      - Valkyrie
      - Berserker
      - Monk
 */
var Fighter = function() {
  this.healthBonus = 20;
  this.strengthBonus = 10;
};
Fighter.prototype = new PlayerClass();


var Warrior = function() {
  this.name = "Scott Pilgrim"; //Warrior
  this.healthBonus = this.healthBonus + 25;
  this.strengthBonus = this.strengthBonus + 30;
};
Warrior.prototype = new Fighter();


var Valkyrie = function() {
  this.name = "Ramona Flowers"; //Valkyrie
  this.healthBonus = this.healthBonus + 20;
  this.strengthBonus = this.strengthBonus + 10;
};
Valkyrie.prototype = new Fighter();


var Berserker = function() {
  this.name = "NegaScott"; //Berserker
  this.healthBonus = this.healthBonus + 35;
  this.strengthBonus = this.strengthBonus + 30;
};
Berserker.prototype = new Fighter();


var Monk = function() {
  this.name = "Monk";
  this.healthBonus = this.healthBonus + 10;
  this.strengthBonus = this.strengthBonus + 40;
};
Monk.prototype = new Fighter();


/*
    MAGICAL CLASSES
      - Shaman
      - Wizard
      - Conujurer
      - Sorcerer
 */
var Musician = function() {
  this.name = "Musician"; //Mage
  this.magical = true;
  this.healthBonus = this.healthBonus - 10;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
Musician.prototype = new PlayerClass();


var Shaman = function() {
  this.name = "Kim Pines"; //Shaman
  this.healthBonus = this.healthBonus + 5;
  this.strengthBonus = this.strengthBonus - 5;
  this.intelligenceBonus = this.intelligenceBonus + 25;
};
Shaman.prototype = new Musician();


var Wizard = function() {
  this.name = "Steven Stills"; //Wizard
  this.healthBonus = this.healthBonus - 15;
  this.strengthBonus = this.strengthBonus - 25;
  this.intelligenceBonus = this.intelligenceBonus + 40;
};
Wizard.prototype = new Musician();


var Conjurer = function() {
  this.name = "Young Neil"; //Conjurer
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 10;
};
Conjurer.prototype = new Musician();


var Sorcerer = function() {
  this.name = "Sorcerer";
  this.healthBonus = this.healthBonus - 5;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 30;
};
Sorcerer.prototype = new Musician();

/*
    Stealth CLASSES
      - Thief
      - Ninja
      - Assassin
 */

var Stalker = function() {
  this.strengthBonus = 10;
  this.evadeBonus = 5;
};
Stalker.prototype = new PlayerClass();

var Thief = function() {
  this.name = "Wallace Wells"; //Thief
  this.healthBonus = this.healthBonus + 5;
  this.evadeBonus = this.evadeBonus + 15;
};
Thief.prototype = new Stalker();

var Ninja = function() {
  this.name = "Knives Chau"; //Ninja
  this.strengthBonus = this.strengthBonus + 15;
  this.evadeBonus = this.evadeBonus + 5;
};
Ninja.prototype = new Stalker();
