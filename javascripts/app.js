var newPlayer = {};
$(document).ready(function() {

// Switch between good and bad characters.

  $("#class-good").click(function() {
      $("#class-select-bad").hide();
      $("#class-select-good").show();
  });

  $("#class-bad").click(function() {
      $("#class-select-bad").show();
      $("#class-select-good").hide();
      $("#profile").hide();
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
        console.log("newPlayer", newPlayer);
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "");
        break;
        case "card--battleground":
        moveAlong =($("#player-name").val() !== "");
        break;
    }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }
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

//      console.log("That was Scott", newPlayer);
      newPlayer.class = new ScottPilgrim;
//      console.log("This is the new Scott", newPlayer);

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
    } else if (clickedButton === "GideoGraves") {
      newPlayer.class = new GideoGraves;
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
      };

      if (newPlayer.weapon === null) {
        newPlayer.weapon = new Weapon;
      }

      console.log("This is who you are", newPlayer);
      console.log("This is your class", newPlayer.class);
      console.log("This is your weapon", newPlayer.weapon);

      // Create Random Enemy
      var opponent = new Player();
      opponent.generateClass();
      opponent.setWeapon(new Sword());

      // Populate Enemy Stat box


  }); //End of Click event handler

});