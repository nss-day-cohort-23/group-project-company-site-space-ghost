var board1 = {
    name: "Space Ripper",
    pic: "somefakeimg.com/img.jpg",
    description: "Intergalactic speed and control. Moves you through the snow like a spaceship.",
    price: 499.99,
    length: "53in.",
    powpow: "5/5"
};

var board2 = {
    name: "Ace 9",
    pic: "somefakeimg.com/img.jpg",    
    description: "Moderate skill board for freestyle cruising.",
    price: 299.99,
    length: "50in.",
    powpow: "4/5"
};

var board3 = {
    name: "Black Ice",
    pic: "somefakeimg.com/img.jpg",    
    description: "Extreme Expert Board for Pros only, brah. Tear. It. Up.",
    price: 299.99,
    length: "50in.",
    powpow: "5/5"
};

var board4 = {
    name: "Sean White Special",
    pic: "somefakeimg.com/img.jpg",    
    description: "Board for jabronis.",
    price: 149.99,
    length: "49in.",
    powpow: "1/5"
};

var board5 = {
    name: "Tunneller",
    pic: "somefakeimg.com/img.jpg",    
    description: "If you're trying to get buried knee deep in snow, this is what you need. This thing sinks.",
    price: 199.99,
    length: "40in.",
    powpow: "3/5"
};
var board6 = {
    name: "Green Man",
    pic: "somefakeimg.com/img.jpg",    
    description: "Free yourself. Forget how long you've been standing there. The Green Man board was made to just stand around.",
    price: 179.99,
    length: "51in.",
    powpow: "2/5"
};

var shirt = {
    name: "Hella Bogus T-shirt",
    pic: "somefakeimg.com/img.jpg",    
    description: "Shred in style with this super cool tshirt.",
    price: 19.99,
    size: "Medium",
    powpow: "4/5"
};

var jacket = {
    name: "Cold Weather Jacket",
    pic: "somefakeimg.com/img.jpg",    
    description: "Jacket rated for temperatures as low as -25F. Will keep your loins toasty no matter the powder conditions.",
    price: 99.99,
    size: "Large",
    powpow: "4/5"
};

var beanie = {
    name: "Shweeeeet Beanie",
    pic: "somefakeimg.com/img.jpg",    
    description: "The perfect dome cover for chill dudes and dudettes.",
    price: 14.99,
    size: "Small",
    powpow: "3/5"
};



var prodArray = [board1, board2, board3, shirt, jacket, beanie];

for (var i = 0; i < prodArray.length; i++) {
    for(var prop in prodArray[i]) {
        prodArray[0].prop
    }
}

prodArray[0].size