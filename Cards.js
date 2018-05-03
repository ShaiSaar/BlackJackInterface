
cards = {
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
}



Cards.prototype.chooseRandom = function(){
    var arr = Object.keys(this).map(function (key) { return {key:this[key]}; });
    let cardPicked = Math.floor(Math.random()*52);
    console.log(arr[cardPicked]);
    return arr[cardPicked];
}

let card= new Cards();