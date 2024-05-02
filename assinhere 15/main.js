var guestARR = ["Ahmed", "Mustafa", "Mohsin", "Fasih"];
var canNotAttend = "Ahmed";
console.log(canNotAttend + " " + "can not attend the dinner");
var newGuest = "Fasih";
guestARR[guestARR.indexOf(canNotAttend)] = newGuest;
//console.log(guestARR);
guestARR.map(function (items) { return console.log("Dear ".concat(items, " you are inivited to the dinner")); });
