let imgCards = ["card1f", "card1s", "card2f", "card2s", "card3f", "card3s",
  "card4f", "card4s", "card5f", "card5s", "card6f", "card6s", "card7f", "card7s", "card8f", "card8s"];
let clicks = false;
let timeString, secondsString, minutesString = "";
let cardBackNowID, cardBackPreID, cardImgkNowID, cardImgPreID =" ";
let minutes, seconds, totalPairCounter, stepsCounter = 0;
let startTime = true;
let starRating = "3";
let actualPairCounter = 0;
let cardMemorizing;
let beginGameTime;
totalPairCounter = 0;
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
    
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
    
  return array;
}

function createCard() {
  var cardArray = shuffle(imgCards);
  for (let i = 0; i <= 16; i++) {
    switch (i) {
      case 1:
        $( ".grid-container" ).append('<div class="card-grid1"><div id="'+cardArray[i-1]
        +'B" class ="front"></div><div id="'+cardArray[i-1]+'" class="back"></div></div>');
        break;
      case 2:
        $( ".grid-container" ).append('<div class="card-grid2"><div id="'+cardArray[i-1]
        +'B" class ="front"></div><div id="'+cardArray[i-1]+'" class="back"></div></div>');
        break;
      case 3:
        $( ".grid-container" ).append('<div class="card-grid3"><div id="'+cardArray[i-1]
        +'B" class ="front"></div><div id="'+cardArray[i-1]+'" class="back"></div></div>');
        break;
      case 4:
        $( ".grid-container" ).append('<div class="card-grid4"><div id="'+cardArray[i-1]
        +'B" class ="front"></div><div id="'+cardArray[i-1]+'" class="back"></div></div>');
        break;
      case 5:
        $( ".grid-container" ).append('<div class="card-grid5"><div id="'+cardArray[i-1]
        +'B" class ="front"></div><div id="'+cardArray[i-1]+'" class="back"></div></div>');
        break;
      case 6:
        $( ".grid-container" ).append('<div class="card-grid6"><div id="'+cardArray[i-1]
        +'B" class ="front"></div><div id="'+cardArray[i-1]+'" class="back"></div></div>');
        break;
      case 7:
        $( ".grid-container" ).append('<div class="card-grid7"><div id="'+cardArray[i-1]
        +'B" class ="front"></div><div id="'+cardArray[i-1]+'" class="back"></div></div>');
        break;
      case 8:
        $( ".grid-container" ).append('<div class="card-grid8"><div id="'+cardArray[i-1]
        +'B" class ="front"></div><div id="'+cardArray[i-1]+'" class="back"></div></div>');
        break;
      case 9:
        $( ".grid-container" ).append('<div class="card-grid9"><div id="'+cardArray[i-1]
        +'B" class ="front"></div><div id="'+cardArray[i-1]+'" class="back"></div></div>');
        break;
      case 10:
        $( ".grid-container" ).append('<div class="card-grid10"><div id="'+cardArray[i-1]
        +'B" class ="front"></div><div id="'+cardArray[i-1]+'" class="back"></div></div>');
        break;
      case 11:
        $( ".grid-container" ).append('<div class="card-grid11"><div id="'+cardArray[i-1]
        +'B" class ="front"></div><div id="'+cardArray[i-1]+'" class="back"></div></div>');
        break;
      case 12:
        $( ".grid-container" ).append('<div class="card-grid12"><div id="'+cardArray[i-1]
        +'B" class ="front"></div><div id="'+cardArray[i-1]+'" class="back"></div></div>');
        break;
      case 13:
        $( ".grid-container" ).append('<div class="card-grid13"><div id="'+cardArray[i-1]
        +'B" class ="front"></div><div id="'+cardArray[i-1]+'" class="back"></div></div>');
        break;
      case 14:
        $( ".grid-container" ).append('<div class="card-grid14"><div id="'+cardArray[i-1]
        +'B" class ="front"></div><div id="'+cardArray[i-1]+'" class="back"></div></div>');
        break;
      case 15:
        $( ".grid-container" ).append('<div class="card-grid15"><div id="'+cardArray[i-1]
        +'B" class ="front"></div><div id="'+cardArray[i-1]+'" class="back"></div></div>');
        break;
      case 16:
        $( ".grid-container" ).append('<div class="card-grid16"><div id="'+cardArray[i-1]
        +'B" class ="front"></div><div id="'+cardArray[i-1]+'" class="back"></div></div>');
    }
  }
  for (let i = 0; i <= 16; i++) {
    switch (i) {
      case 1:
        $( ".card-grid1" ).toggleClass("card-grid1 card-grid");
        break;
      case 2:
        $( ".card-grid2" ).toggleClass("card-grid2 card-grid");
        break;
      case 3:
        $( ".card-grid3" ).toggleClass("card-grid3 card-grid");
        break;
      case 4:
        $( ".card-grid4" ).toggleClass("card-grid4 card-grid");
        break;
      case 5:
        $( ".card-grid5" ).toggleClass("card-grid5 card-grid");
        break;
      case 6:
        $( ".card-grid6" ).toggleClass("card-grid6 card-grid");
        break;
      case 7:
        $( ".card-grid7" ).toggleClass("card-grid7 card-grid");
        break;
      case 8:
        $( ".card-grid8" ).toggleClass("card-grid8 card-grid");
        break;
      case 9:
        $( ".card-grid9" ).toggleClass("card-grid9 card-grid");
        break;
      case 10:
        $( ".card-grid10" ).toggleClass("card-grid10 card-grid");
        break;
      case 11:
        $( ".card-grid11" ).toggleClass("card-grid11 card-grid");
        break;
      case 12:
        $( ".card-grid12" ).toggleClass("card-grid12 card-grid");
        break;
      case 13:
        $( ".card-grid13" ).toggleClass("card-grid13 card-grid");
        break;
      case 14:
        $( ".card-grid14" ).toggleClass("card-grid14 card-grid");
        break;
      case 15:
        $( ".card-grid15" ).toggleClass("card-grid15 card-grid");
        break;
      case 16:
        $( ".card-grid16" ).toggleClass("card-grid16 card-grid");
    }
  }
}

function gameTime(){
  seconds++;
  if(seconds == 60){
	  minutes++;
	  seconds = 0;
  }
  if(seconds < 10){
    secondsString = "0"+seconds.toString();
  } else {
    secondsString = seconds.toString();
  }
  if(minutes < 10){
    minutesString = "0"+minutes.toString();
  } else {
    minutesString = minutes.toString();
  }
  timeString = minutesString + ':' + secondsString;
  $(".clock").text(timeString);
}

/* This formula: "$(function(){" is equivalent to
 this formula: "$(document).ready(function () {" It's "only" shorter.*/

$(function(){
  /* By default: Y is the axis of rotation. */
  $(".card-grid").flip({
    axis: 'y',
  });

  /* Bottom blue X button : will be X the axis of rotation. */

  $("#axis-x-btn").click(function(){
    $(".card-grid").flip({axis: 'x'});
  });

  /* Bottom blue Y button : will be Y the axis of rotation. */

  $("#axis-y-btn").click(function(){
    $(".card-grid").flip({axis: 'y'});
  });

  /* May be for example : "trigger : hover" a plus button.
  to develop, help memorize. etc., etc., */

  /*The names of the variables are talkative, so there is no explanation here.
  I do not know what to write about yet. */

  /* If We use the "jquery.flip.min.js" then It is mandatory for one site
   of the image to be class name : "front", other "back". */

  /* The ".back" class it the image site, the click is turned off there. */

  $(".front").click(function(){
    if(startTime == true){
      startTime = false;
      seconds = 0;
      minutes = 0;
      beginGameTime = setInterval("gameTime()", 1000);
    }
    stepsCounter++;
    $(".steps").text(stepsCounter.toString());
    if ( stepsCounter >= 30 && stepsCounter <= 50) {
      $("#starOne").removeClass("fa-star").addClass('fa-star-o');
      starRating = "2";
    }
    if ( stepsCounter > 50) {
      $("#starTwo").removeClass("fa-star").addClass('fa-star-o');
      starRating = "1";
    }
    actualPairCounter++;
    if ( actualPairCounter === 1 ) {
      cardBackPreID = this.id;
      cardImgPreID = this.id.slice(0, 6);
      cardBackNowID = " ";
      cardImgNowID = " ";
      clearTimeout(cardMemorizing);
    }
    if ( actualPairCounter === 2 ) {
      actualPairCounter = 0;
      cardBackNowID = this.id;
      cardImgNowID = this.id.slice(0, 6);

      /* These operations are due to id names. Each card has a pair,
       but the ID must be different. For example: because of the
        getelementById function. But the pairs must be found. ID names are so.
        For example:
        card1f-> the first card1 image side
        card1s-> the second card1 image side. (These are the same pictures.
        These are a pair.
        card1fB (B=back), card1sB the back of the same pictures.
        Here you need to cut the "indexes" ("s" or/and "f"). */
      
      var n = cardImgNowID.slice(0, 5).localeCompare(cardImgPreID.slice(0, 5));
      
      if ( n === 0 ) {

        /* These are a pair */
        /* animation, sounds? */

        totalPairCounter++;
        if ( totalPairCounter === 8 ) {

          /* The memory card deck is ready. */

          totalPairCounter = 0;
          popupOpenClose();
        }
      }
      if ( !(n === 0) ) {

        /* These are not a pair
         reversing them */ 

        stepsCounter--;
        cardMemorizing = setInterval(function() {
          $(document.getElementById(cardImgPreID)).trigger('click');
          $(document.getElementById(cardBackNowID)).trigger('click');
          actualPairCounter = 0;
        }, 500);
      }
    }
  });
});

function restartGame() {
  if (confirm('Are you sure you want to start the game again?')) {
    // Exit
    location.reload()
  } else {
    // Do nothing!
    return true;
  }
}

/* It is fundamental that you can quit a program. */
function exitGameFunction(){
  if (confirm('Are you sure you want to exit?')) {
      // Exit
      close();
  } else {
      // Do nothing!
      return true;
  }  
}

function popupOpenClose() {
	/* Open popup */
  /* Close popup if user clicks on background */
  /* set the variables these handles time game and star rating */
  starRating = "";
  if ( stepsCounter < 30 ) {
    starRating = "* * *";
  }
  if ( stepsCounter >= 30 && stepsCounter <= 50) {
    starRating = "* *";
  }
  if ( stepsCounter > 50) {
    starRating = "*";
  }
  let gameTime = minutes + ' min ' + seconds + ' sec';
  document.getElementById("popup").innerHTML = '<span class="popup-text">'+
  'Congratulations ! You win !<br><br>Game time: ' + gameTime + '<br>Star Rating:' + starRating + '<br>Steps: ' + stepsCounter + 
  '<br>Click on the green window to the continue...<br></span>';
  /* Open popup */
  $(".popup-text").on("click", function() {
    /* Close popup if user clicks on background */
    location.reload();
    $("#popup").hide();
	});
}

shuffle(imgCards);
createCard();

/* An obvious fact, if it is free: The relationship between the task
and the curriculum is very small. But I'm glad to hear that - by examining
"half" of the internet - I got a lot of information.
I don't care itself the technique, "just" the information,
displaying of the thought. That's why I'm not interested in
for example "Artificial Intelligence." Which is very useful and
important TECHNICS, business, etc. but
theoretically / philosophically does not make much sense.
It's been a known and proved fact at least for a hundred years. */
