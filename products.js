// OBJECTS //
var board1 = {
    name: "Space Ripper",
    pic: "images/board5.jpg",
    description: "Intergalactic speed and control. Moves you through the snow like a spaceship.",
    price: 499.99,
    length: "53in.",
    powpow: "5/5"
};

var board2 = {
    name: "Ace 9",
    pic: "images/board1.jpg",    
    description: "Moderate skill board for freestyle cruising.",
    price: 299.99,
    length: "50in.",
    powpow: "4/5"
};

var board3 = {
    name: "Black Ice",
    pic: "images/board2.jpg",    
    description: "Extreme Expert Board for Pros only, brah. Tear. It. Up.",
    price: 299.99,
    length: "50in.",
    powpow: "5/5"
};

var board4 = {
    name: "Sean White Special",
    pic: "images/board6.jpg",    
    description: "Board for jabronis.",
    price: 149.99,
    length: "49in.",
    powpow: "1/5"
};

var board5 = {
    name: "Tunneller",
    pic: "images/board4.jpg",    
    description: "If you're trying to get buried knee deep in snow, this is what you need. This thing sinks.",
    price: 199.99,
    length: "40in.",
    powpow: "3/5"
};
var board6 = {
    name: "Green Man",
    pic: "images/greenman.jpg",    
    description: "Free yourself. Forget how long you've been standing there. The Green Man board was made to just stand around.",
    price: 179.99,
    length: "51in.",
    powpow: "2/5"
};

var shirt = {
    name: "Hella Bogus T-shirt",
    pic: "images/supergnar.jpg",    
    description: "Shred in style with this super cool tshirt.",
    price: 19.99,
    size: "Medium",
    powpow: "4/5"
};

var jacket = {
    name: "Cold Weather Jacket",
    pic: "images/jacket1.jpg",    
    description: "Jacket rated for temperatures as low as -25F. Will keep your loins toasty no matter the powder conditions.",
    price: 99.99,
    size: "Large",
    powpow: "4/5"
};

var beanie = {
    name: "Shweeeeet Beanie",
    pic: "images/beanie.jpg",    
    description: "The perfect dome cover for chill dudes and dudettes.",
    price: 14.99,
    size: "Small",
    powpow: "3/5"
};

var prodArray = [board1, board2, board3, board4, board5, board6] 
var clothArray = [shirt, jacket, beanie];
var masterBoardHTML = [];
var masterClothHTML = [];

// Snow Boards For Loop //

for (var i = 0; i < prodArray.length; i++) {
    var listHTML = "<h3 class='arrayname'>" + prodArray[i].name + "</h3><hr>";
    listHTML += "<img class='arraypic' src='" + prodArray[i].pic + "'><hr>";
    listHTML += "<h4 class='arraydescription'>" + prodArray[i].description + "</h4>";
    listHTML += "<h4 class='arrayprice'>Price: " + prodArray[i].price + "</h4>";
    listHTML += "<h4 class='arraylength'>Length: " + prodArray[i].length + "</h4>";
    listHTML += "<h4 class='arraypowpow'>Pow Pow Rating: " + prodArray[i].powpow + "</h4>";
    masterBoardHTML.push(listHTML);
}
document.getElementById("card1").innerHTML = masterBoardHTML[0];
document.getElementById("card2").innerHTML = masterBoardHTML[1];
document.getElementById("card3").innerHTML = masterBoardHTML[2];
document.getElementById("card4").innerHTML = masterBoardHTML[3];
document.getElementById("card5").innerHTML = masterBoardHTML[4];
document.getElementById("card6").innerHTML = masterBoardHTML[5];

// CLOTHING FOR LOOP //

for (var i = 0; i < clothArray.length; i++) {
    var listHTML = "<h3 class='arrayname'>" + clothArray[i].name + "</h4>";
    listHTML += "<img class='arraypic' src='" + clothArray[i].pic + "'>";
    listHTML += "<h4 class='arraydescription'>" + clothArray[i].description + "</h4>";
    listHTML += "<h4 class='arrayprice'>Price: " + clothArray[i].price + "</h4>";
    listHTML += "<h4 class='arraysize'>Size: " + clothArray[i].size + "</h4>";
    listHTML += "<h4 class='arraypowpow'>Pow Pow Rating: " + clothArray[i].powpow + "</h4>";
    masterClothHTML.push(listHTML);
}

document.getElementById("card7").innerHTML = masterClothHTML[0];
document.getElementById("card8").innerHTML = masterClothHTML[1];
document.getElementById("card9").innerHTML = masterClothHTML[2];