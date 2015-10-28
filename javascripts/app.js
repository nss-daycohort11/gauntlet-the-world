var newPlayer = {};
var opponent = {};
$(document).ready(function() {
  
 // Pick Character hover section with stats.
  $(".tiptext").mouseover(function() {
    $(this).children(".description").show();
    }).mouseout(function() {
    $(this).children(".description").hide();
  });

  /*
    Test code to generate a human player and an orc player
   */
  var Pilgrim = new Human();
  Pilgrim.setWeapon(new Hammer());
  Pilgrim.generateClass();  // This will be used for "Surprise me" option
  // console.log(Pilgrim.toString());

  var evilEx = new EvilEx();
  evilEx.generateClass();
  evilEx.setWeapon(new Sword());
  //console.log(evilEx);
  // console.log(evilEx.toString());

  /*
    Test code to generate a spell
   */
  var spell = new Sphere();
  // console.log("spell: ", spell.toString());


  /*
    END OF TEST CODE





  // BEGIN GAME HEREEEEEEEE
    Show the initial view that accepts player name
   */
  $("#player-setup").show();

  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;

    switch (nextCard) {
      case "card--class":
        newPlayer = new Player($("#player-name").val());
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--battleground":
        moveAlong =($("#player-name").val() !== "");
        break;
    }
    // console.log("isGood", newPlayer.isGood);
    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }

    // Switch between good and bad characters.

    $("#class-good").click(function() {
      if (moveAlong) {
        $("#class-select-bad").hide();
        $("#class-select-good").show();
      }
    });

    $("#class-bad").click(function() {
      if (moveAlong) {
        $("#class-select-bad").show();
        $("#class-select-good").hide();
      }
    });
  
  });

  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
//    console.log("what cardis this?", previousCard);

    $(".card").hide();
    if (previousCard === "card--name") {
    $("." + previousCard).show();
    } else {
    if (newPlayer.isGood === true) {
      $("#class-select-bad").hide();
      $("#class-select-good").show();
      } else if (newPlayer.isGood === false) {
      $("#class-select-bad").show();
      $("#class-select-good").hide();
      }
    }

  });


      // When any button is clicked, update player values
  $(".card__button").click(function(e) {
//    console.log($(this).children().children()[1].getAttribute('name'));
    var clickedButton = $(this).children().children()[1].getAttribute('name');

//    console.log("clickedButton:", clickedButton);
    if (clickedButton === "good") {
      newPlayer.isGood = true;
//     console.log("is Good:", clickedButton);
      } else if (clickedButton === "bad") {
        newPlayer.isGood = false;
      };
    if (clickedButton === "ScottPilgrim") {
      newPlayer.class = new ScottPilgrim;
      } else if (clickedButton === "RamonaFlowers") {
      newPlayer.class = new RamonaFlowers;
    }else if (clickedButton === "NegaScott") {
      newPlayer.class = new NegaScott;
    }else if (clickedButton === "KimPines") {
      newPlayer.class = new KimPines;
    }else if (clickedButton === "StevenStills") {
      newPlayer.class = new StevenStills;
    }else if (clickedButton === "YoungNeil") {
      newPlayer.class = new YoungNeil;
    }else if (clickedButton === "WallaceWells") {
      newPlayer.class = new WallaceWells;
    }else if (clickedButton === "KnivesChau") {
      newPlayer.class = new KnivesChau;
    } else if (clickedButton === "GideonGraves") {
      newPlayer.class = new GideonGraves;
    }else if (clickedButton === "LucasLee") {
      newPlayer.class = new LucasLee;
    }else if (clickedButton === "MatthewPatel") {
      newPlayer.class = new MatthewPatel;
    }else if (clickedButton === "EnvyAdams") {
      newPlayer.class = new EnvyAdams;
    }else if (clickedButton === "ToddIngram") {
      newPlayer.class = new ToddIngram;
    }else if (clickedButton === "KenKyleKatanagi") {
      newPlayer.class = new KenKyleKatanagi;
    }else if (clickedButton === "LynetteGuycott") {
      newPlayer.class = new LynetteGuycott;
    }else if (clickedButton === "RoxyRichter") {
      newPlayer.class = new RoxyRichter;
    } else if (clickedButton === "Surprise") {
      newPlayer.class = "Surprise";
    //options are to either have a massive if/else statement, or put an extra value/class/id on button
    //If the extra value on button is true then: newPlayer.class = clickedButton
    //How to execute the generateClass function?
    } //End off character class selection

    if (clickedButton === "Sword") {
      newPlayer.weapon = new Sword;
    } else if (clickedButton === "Hammer") {
      newPlayer.weapon = new Hammer;
    }else if (clickedButton === "Gun") {
      newPlayer.weapon = new Gun;
    }else if (clickedButton === "Knives") {
      newPlayer.weapon = new Knives;
    }else if (clickedButton === "Guitar") {
      newPlayer.weapon = new Guitar;
    }else if (clickedButton === "Bass") {
      newPlayer.weapon = new Bass;
    }else if (clickedButton === "Drums") {
      newPlayer.weapon = new Drums;
    }else if (clickedButton === "Mic") {
      newPlayer.weapon = new Mic;
    };



// START GAMEPLAY
     if (clickedButton === "Start") {
      console.log("FIGHT!");
      if (newPlayer.class === null) {
        newPlayer.class = new PlayerClass;
      } else if (newPlayer.class === "Surprise") {
        newPlayer.generateClass();
      } else {
          // console.log("newPlayer",newPlayer);
          // console.log("our Health before modifying", newPlayer.health);
          newPlayer.health += newPlayer.class.healthBonus;
          newPlayer.strength +=  newPlayer.class.strengthBonus;
          newPlayer.intelligence +=  newPlayer.class.intelligenceBonus;
          newPlayer.evade += newPlayer.class.evadeBonus;
      };
      var playerMaxHealth = newPlayer.health;
      if (newPlayer.weapon === null) {
        newPlayer.weapon = new Weapon;
      }
      // Create Random Enemy
      opponent = new Player();
      opponent.generateClass();
      opponent.setWeapon(new Sword());
      var opponentMaxHealth = opponent.health;

      // Populate Initial Stat boxes
      // Player stat box
      $(".playerName").html(newPlayer.playerName+" playing as");
      $(".playerClass").html(newPlayer.class.name);
      $(".playerWeapon").html("Wpn: "+newPlayer.weapon.name);
      $(".playerHP").html("HP: "+newPlayer.health);

      // Opponent Stat Box
      $(".opponentClass").html(opponent.class.name);
      $(".opponentWeapon").html("Wpn: "+opponent.weapon.name);
      $(".opponentHP").html("HP: "+opponent.health);
    }
 

      // Attack GAMEPLAY
      if (clickedButton === "attack") {
            console.log("You attacked!!!!");
            newPlayer.health -= opponent.strength * 0.1 + opponent.weapon.damage;
      $(".opponentHP").html("HP: "+opponent.health);

            opponent.health -= newPlayer.strength*0.1 + newPlayer.weapon.damage;
      $(".playerHP").html("HP: "+newPlayer.health);
            
      console.log("after attack us Health", newPlayer.health);
      console.log("after attack their Health", opponent.health);

    if (newPlayer.health <= 0) {
      $(this).children().remove();
      newPlayer.health = 0;
      $(".playerHP").html("HP: " + newPlayer.health);
      if (opponent.health <= 0) {
              opponent.health = 0;
      $(".playerHP").html("HP: " + opponent.health);
        alert("DOUBLE KNOCK-OUT!!!!");
        console.log("DOUBLE KNOCK-OUT!!!!");
      } else {
        alert("KO! YOU LOSE!");
        console.log("KO! YOU LOSE!");
      }
    } else if (opponent.health <= 0) {
      $(this).children().remove();
      opponent.health = 0;
      $(".playerHP").html("HP: " + opponent.health);      newPlayer.health = 0;
        alert("KO! YOU WIN!!!");
        console.log("KO! YOU WIN!!!");
    }

      }



  }); //End of Click event handler

});