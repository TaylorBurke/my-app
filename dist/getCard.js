"use strict";
var getCard = function (max) {
    var min = 0;
    return Math.floor(Math.random() * max); //The maximum is exclusive and the minimum is inclusive
};
var testCards = function () {
    var card = 0;
    while (card != 63) {
        card = getCard(64);
    }
    console.log("success");
};
testCards();
// console.log(getCard(64));
