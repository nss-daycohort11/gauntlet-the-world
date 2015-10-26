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
      Scott Pilgrim 
      Ramona Flowers
      NegaScott 
 */
var Fighter = function() {
  this.healthBonus = 20;
  this.strengthBonus = 10;
};
Fighter.prototype = new PlayerClass();

var ScottPilgrim = function() {
  this.name = "Scott Pilgrim"; 
  this.healthBonus = this.healthBonus + 25;
  this.strengthBonus = this.strengthBonus + 30;
};
ScottPilgrim.prototype = new Fighter();

var RamonaFlowers = function() {
  this.name = "Ramona Flowers";
  this.healthBonus = this.healthBonus + 20;
  this.strengthBonus = this.strengthBonus + 10;
};
RamonaFlowers.prototype = new Fighter();

var NegaScott = function() {
  this.name = "NegaScott"; 
  this.healthBonus = this.healthBonus + 35;
  this.strengthBonus = this.strengthBonus + 30;
};
NegaScott.prototype = new Fighter();


/*
    MUSICAL CLASSES
      Kim Pines 
      Steven Stills
      Young Neil 
 */
var Musician = function() {
  this.name = "Musician"; //Mage
  this.magical = true;
  this.healthBonus = this.healthBonus - 10;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
Musician.prototype = new PlayerClass();

var KimPines = function() {
  this.name = "Kim Pines"; 
  this.healthBonus = this.healthBonus + 5;
  this.strengthBonus = this.strengthBonus - 5;
  this.intelligenceBonus = this.intelligenceBonus + 25;
};
KimPines.prototype = new Musician();

var StevenStills = function() {
  this.name = "Steven Stills"; 
  this.healthBonus = this.healthBonus - 15;
  this.strengthBonus = this.strengthBonus - 25;
  this.intelligenceBonus = this.intelligenceBonus + 40;
};
StevenStills.prototype = new Musician();

var YoungNeil = function() {
  this.name = "Young Neil"; 
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 10;
};
YoungNeil.prototype = new Musician();

/*
    STALKER CLASSES
      Wallace Wells = Thief
      Knives Chau = Ninja
 */

var Stalker = function() {
  this.strengthBonus = 10;
  this.evadeBonus = 5;
};
Stalker.prototype = new PlayerClass();

var WallaceWells = function() {
  this.name = "Wallace Wells"; 
  this.healthBonus = this.healthBonus + 5;
  this.evadeBonus = this.evadeBonus + 15;
};
WallaceWells.prototype = new Stalker();

var KnivesChau = function() {
  this.name = "Knives Chau"; 
  this.strengthBonus = this.strengthBonus + 15;
  this.evadeBonus = this.evadeBonus + 5;
};
KnivesChau.prototype = new Stalker();

//  BAD GUYS }: ) ---------------------------------------------------------------------------------------------------------------------------
/*
    EVIL FIGHTER CLASSES
      Gideon Graves 
      Lucas Lee
 */

var GideonGraves = function() {
  this.name = "Gideon Graves"; 
  this.healthBonus = this.healthBonus + 25;
  this.strengthBonus = this.strengthBonus + 30;
};
GideonGraves.prototype = new Fighter();

var LucasLee = function() {
  this.name = "Lucas Lee"; 
  this.healthBonus = this.healthBonus + 25;
  this.strengthBonus = this.strengthBonus + 30;
};
LucasLee.prototype = new Fighter();

/*
    EVIL MUSICAL CLASSES
      Envy Adams
      Todd Ingram
      Ken Katanagi
      Kyle Katanagi
 */

var EnvyAdams = function() {
  this.name = "Envy Adams"; 
  this.healthBonus = this.healthBonus + 5;
  this.strengthBonus = this.strengthBonus - 5;
  this.intelligenceBonus = this.intelligenceBonus + 25;
};
EnvyAdams.prototype = new Musician();

var ToddIngram = function() {
  this.name = "Todd Ingram"; 
  this.healthBonus = this.healthBonus + 5;
  this.strengthBonus = this.strengthBonus - 5;
  this.intelligenceBonus = this.intelligenceBonus + 25;
};
ToddIngram.prototype = new Musician();

var KenKatanagi = function() {
  this.name = "Ken Katanagi"; 
  this.healthBonus = this.healthBonus + 5;
  this.strengthBonus = this.strengthBonus - 5;
  this.intelligenceBonus = this.intelligenceBonus + 25;
};
KenKatanagi.prototype = new Musician();

var KyleKatanagi = function() {
  this.name = "Kyle Katanagi"; 
  this.healthBonus = this.healthBonus + 5;
  this.strengthBonus = this.strengthBonus - 5;
  this.intelligenceBonus = this.intelligenceBonus + 25;
};
KyleKatanagi.prototype = new Musician();

/*
    EVIL STALKER CLASSES
      Matthew Patel
      Roxy
 */

var MatthewPatel = function() {
  this.name = "Matthew Patel"; 
  this.healthBonus = this.healthBonus + 5;
  this.evadeBonus = this.evadeBonus + 15;
};
MatthewPatel.prototype = new Stalker();

var RoxyRichter = function() {
  this.name = "Roxy Richter"; 
  this.strengthBonus = this.strengthBonus + 15;
  this.evadeBonus = this.evadeBonus + 5;
};
RoxyRichter.prototype = new Stalker();