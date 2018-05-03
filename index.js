function init(){


    //console.log(cards);
    var stay1 = document.getElementById("stay1");
    var stay2 = document.getElementById("stay2");
    var draw1 = document.getElementById("draw1");
    var draw2 = document.getElementById("draw2");
    var totalScore1 = document.getElementById("totalScore1");
    var totalScore2 = document.getElementById("totalScore2");

    var stayNdone1=false;
    var stayNdone2=false;

    totalScore1 = 0;
    totalScore2 = 0;

    stay1.addEventListener("click", stayCard);
    stay2.addEventListener("click", stayCard);
    draw1.addEventListener("click", drawCard);
    draw2.addEventListener("click", drawCard);

    //document.getElementById("stay1").disabled = true;

    function drawCard() {
        var id = this.id;
        let cardName = chooseRandom();
        let card= cards[cardName];

        if(id==="draw1"){
            totalScore1+=card;
            document.getElementById("totalScore1").innerText = totalScore1.toString();
            document.getElementById("cardOne").src = "pics/"+ cardName;
            checkIfTotalScoreIsOver21(totalScore1, id);
        }else{
            totalScore2+=card;
            document.getElementById("totalScore2").innerText = totalScore2.toString();
            document.getElementById("cardTwo").src = "pics/"+ cardName;
            checkIfTotalScoreIsOver21(totalScore2, id);
        }
    }

    function checkIfTotalScoreIsOver21(score,id) {
        if(score>21){
            if(id==="draw1"){
                playerTwoWin();
                disableALL();
                return;
            }
            playerOneWin();
            disableALL();
        } else if(score===21){
            if(id==="draw1"){
                playerOneWin();
                disableALL();
                return;
            }
            playerTwoWin();
            disableALL();
            return;
        }else if(totalScore1==totalScore2){
            alert("ITS A TIE");
        }
    }

    function stayCard() {
        let user = this.id;
        user = user[user.length-1];

        if (user==1){
            draw1.disabled = true;
        }else{
            draw2.disabled = true;

        }
        // need to check who it is
        document.getElementById(this.id).disabled = true;
        checkIfBothStay();
    }

    function checkIfBothStay() {
        stayNdone1 = document.getElementById("stay1").disabled;
        stayNdone2 = document.getElementById("stay2").disabled;

        if(stayNdone1 && stayNdone2){
          if(totalScore1>totalScore2){
              playerOneWin();
              disableALL();
              return;
          } else if (totalScore1==totalScore2){
                  alert("ITS A TIE");
                    return;
          }
          playerTwoWin();
          disableALL();
          return;
        }
    }

    function playerOneWin() {
        document.getElementById("playerBoxOne").setAttribute("class", "win");
        document.getElementById("playerBoxTwo").setAttribute("class", "loose");
    }

    function playerTwoWin() {
        document.getElementById("playerBoxOne").setAttribute("class", "loose");
        document.getElementById("playerBoxTwo").setAttribute("class", "win");
    }

    function disableALL() {
        draw1.disabled = true;
        draw2.disabled = true;

    }
    function reset(){
        window.location.reload();

    }


    const cards = {
        "2C.png": 2,
        "2D.png": 2,
        "2H.png": 2,
        "2S.png": 2,

        "3C.png": 3,
        "3D.png": 3,
        "3H.png": 3,
        "3S.png": 3,

        "4C.png": 4,
        "4D.png": 4,
        "4H.png": 4,
        "4S.png": 4,

        "5C.png": 5,
        "5D.png": 5,
        "5H.png": 5,
        "5S.png": 5,

        "6C.png": 6,
        "6D.png": 6,
        "6H.png": 6,
        "6S.png": 6,

        "7C.png": 7,
        "7D.png": 7,
        "7H.png": 7,
        "7S.png": 7,

        "8C.png": 8,
        "8D.png": 8,
        "8H.png": 8,
        "8S.png": 8,

        "9C.png": 9,
        "9D.png": 9,
        "9H.png": 9,
        "9S.png": 9,

        "10C.png": 10,
        "10D.png": 10,
        "10H.png": 10,
        "10S.png": 10,

        "AC.png": 11,
        "AD.png": 11,
        "AH.png": 11,
        "AS.png": 11,

        "JC.png": 10,
        "JD.png": 10,
        "JH.png": 10,
        "JS.png": 10,

        "QC.png": 10,
        "QD.png": 10,
        "QH.png": 10,
        "QS.png": 10,

        "kC.png": 10,
        "KD.png": 10,
        "KH.png": 10,
        "KS.png": 10,
    };

    function chooseRandom() {
        var result;
        var count = 0;
        for (var prop in cards)
            if (Math.random() < 1/++count)
                result = prop;
        return result;
    }

    console.log(chooseRandom());
    //alert("shai");
};

