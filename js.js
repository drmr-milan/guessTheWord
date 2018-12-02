var category1 = document.getElementById('category1');
var category2 = document.getElementById('category2');
var category3 = document.getElementById('category3');
var category4 = document.getElementById('category4');
var category5 = document.getElementById('category5');

var middle = document.querySelector('.middle');

var startGame = document.getElementById('startGame');
var cat1Array = [
                    "BMW",
                    "AUDI",
                    "PORSHE",
                    "SKODA",
                    "MINI",
                    "SMART",
                    "HONDA"
                ];

var guess = document.getElementById('guess');
var guessesLeft = document.getElementById('guessesLeft');
var currentGuessLeft = 5;

function clearCategorys() {
    category1.classList.remove('activeCategory');
    category2.classList.remove('activeCategory');
    category3.classList.remove('activeCategory');
    category4.classList.remove('activeCategory');
    category5.classList.remove('activeCategory');
}

category1.addEventListener('click', function() {
    clearCategorys();
    category1.classList.add("activeCategory");
});

category2.addEventListener('click', function() {
    clearCategorys();
    category2.classList.add("activeCategory");
});

category3.addEventListener('click', function() {
    clearCategorys();
    category3.classList.add("activeCategory");
});

category4.addEventListener('click', function() {
    clearCategorys();
    category4.classList.add("activeCategory");
});

category5.addEventListener('click', function() {
    clearCategorys();
    category5.classList.add("activeCategory");
});

Array.prototype.random = function (length) {
    return this[Math.floor((Math.random()*length))];
}

var slot = "";
var valueChar = "";

startGame.addEventListener('click', function() {
    currentGuessLeft = 5;
    guessesLeft.innerHTML = currentGuessLeft;
    if(category1.className === "category activeCategory") {
        middle.innerHTML = "";
        var item = cat1Array.random(cat1Array.length);
        window.slot = item;
        

        for(i=0; i<item.length; i++) {
            var input = document.createElement("INPUT");
            input.classList.add("char");
            input.setAttribute('id', 'char'+i);
            input.maxLength = "1";

            valueChar = item.charAt(i);
            window.slot;

            middle.appendChild(input);
        }
    } else if(category2.className === "category activeCategory") {
        console.log("cat2");
    } else if(category3.className === "category activeCategory") {
        console.log("cat3");
    } else if(category4.className === "category activeCategory") {
        console.log("cat4");
    } else if(category5.className === "category activeCategory") {
        console.log("cat5");
    } else {
        alert("Please hoose category");
    }
})

guess.addEventListener('click', function() {     
    for(i=0; i<slot.length; i++) {

        var slotChar = slot.charAt(i);

        var input = document.getElementById('char'+i);        
        var inputChar = input.value;

        if(slotChar === inputChar) {
            input.classList.remove("transp");
            input.style.backgroundColor = "transparent";
            input.style.fontWeight = "regular";
        } else {
            input.style.backgroundColor = "rgba(255, 0, 0, .5)";
            input.style.fontWeight = "bold";
        } 
    }
    
    currentGuessLeft--;
    if(currentGuessLeft > 0) {
        guessesLeft.innerHTML = currentGuessLeft;
    } else {
        guessesLeft.innerHTML = "Game Over. Try again";
    }
})