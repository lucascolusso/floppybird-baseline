
function setBigScore(erase)
{
   var elemscore = $("#bigscore");
   elemscore.empty();

   if(erase)
      return;

   var digits = score.toString().split('');
   for(var i = 0; i < digits.length; i++)
      elemscore.append("<img src='assets/font_big_" + digits[i] + ".png' alt='" + digits[i] + "'>");
}

function setSmallScore()
{
  var elemscore = $("#currentscore");
  elemscore.empty();

  elemscore = score.toString();
  document.getElementById("currentscore").textContent=elemscore;
}

function setHighScore()
{
   var elemscore = $("#highscore");
   elemscore.empty();
   var digits = highscore.toString().split('');
   for(var i = 0; i < digits.length; i++)
      elemscore.append("<img src='assets/font_small_" + digits[i] + ".png' alt='" + digits[i] + "'>");
}


// show the scores and the feedback
function showScore()
{
   lastScore = score;
   round++;
   end_play = new Date();

   //have they beaten the high score?
   if(score > highscore)
   {
      //yeah!
      highscore = score;
      //save it!
      setCookie("highscore", highscore, 999);
   }
   else
   {
     //update the scoreboard
     setSmallScore();
     setHighScore();
    };

    $('#myModal').modal('show');

    }

    $("#restartbt").click(function() {

    end_reflect = new Date();
    sendscore();

    //start the game over!
    showSplash();
});