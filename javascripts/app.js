$(document).ready(function() {

  /*
    Test code to generate a human player and an orc player
   */
  var ScottPilgrim = new Human();
  ScottPilgrim.setWeapon(new Hammer());
  ScottPilgrim.generateClass();  // This will be used for "Surprise me" option
  console.log(ScottPilgrim.toString());

  var evilEx = new EvilEx();
  evilEx.generateClass();
  evilEx.setWeapon(new Sword());
  console.log(evilEx);
  console.log(evilEx.toString());

  /*
    Test code to generate a spell
   */
  var spell = new Sphere();
  console.log("spell: ", spell.toString());


  /*
    END OF TEST CODE

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
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "");
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
    $(".card").hide();
    $("." + previousCard).show();
  });

});