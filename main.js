/*
=======================================================

** Week 3 - Project 2 **
*** More Functioning ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be logged to the console.

In order to make the results easy to read,
please use console.log("Question #") to declare the
problem number being solved followed by console.log(yourAnswer) after each question.

For any methods that we didn't cover, please refer to the Functions Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

BASIC TRACK: 1-9
ADVANCED TRACK: 10-13

=======================================================
*/
document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");

// 1. Without using Math.min(), write a function called minimum(),
//    that takes two numbers from a user,
//    and outputs the smaller number into the HTML page.
function minimum2(userInput) {
    console.log(userInput);
    var splitEm = userInput.split(',');
    console.log(splitEm);
    console.log(splitEm.length);
    if (splitEm.length === 2) {
        var least = splitEm.sort(function(a, b) {
            return a - b
        });
        return least[0];
    } else {
        return document.getElementById("q1").innerHTML = "Please enter only two numbers for this function!";

    }
};

document.getElementById("q1Butn").addEventListener("click", function() {
    document.getElementById("q1a").innerHTML = 'The smallest number you entered was ' + minimum2(document.getElementById("q1input").value);
});

// 2. Create a new function called minimum3(),
//    to find the smallest of three numbers,
//    input by a user,
//    and the smallest displayed within the HTML page.
function minimum3(userInput) {
    console.log(userInput);
    var splitEm = userInput.split(',');
    console.log(typeof splitEm);
    if (splitEm.length === 3) {
        var least = splitEm.sort(function(a, b) {
            return a - b;
        });
        return least[0];
    } else {
        return document.getElementById("q2").innerHTML = "Please enter only three numbers for this function!";
    }
};

document.getElementById("q2Butn").addEventListener("click", function() {
    document.getElementById("q2a").innerHTML = 'The smallest number you entered was ' + minimum3(document.getElementById("q2input").value);
});



// 3. Declare a function called sum() that takes an array of numbers as an argument adds them together and displays the result within the HTML page.
//    i.e. sum([1, 2, 3, 4]) should return 10.

function sum(inputToAdd) {
    console.log(inputToAdd);
    var splitToAdd = inputToAdd.split(',');
    var total = 0;
    console.dir(splitToAdd);
    var arr = [1, 2, 3];

    for (var i = 0; i < splitToAdd.length; i++) { //convert to integer somewhere


        total += parseInt(splitToAdd[i]);
    }
    console.log(total);
    return total;
};

document.getElementById("q3Butn").addEventListener("click", function() {
    document.getElementById("q3").innerHTML = 'The sum of your numbers is ' + sum(document.getElementById("q3input").value);
});




// 4. Declare a function called multiply() that takes an array of numbers and multiplies them together.
//    i.e. multiply([1, 2, 3, 4]) should return 24.

function multiply(userInput4) {
    console.log(userInput4);
    var splitz = userInput4.split(',');
    var total = 1;
    console.log(splitz);
    //var arr = [1,2,3];

    for (var i = 0; i < splitz.length; i++) { //convert to integer somewhere


        total *= parseInt(splitz[i]);
    }
    console.log(total);
    return total;
};

document.getElementById("q4Butn").addEventListener("click", function() {
    document.getElementById("q4").innerHTML = 'The product of your numbers is ' + multiply(document.getElementById("q4input").value);
});





// 5. Write a function called filterSixPlus() that takes the following array and removes words
//    that are less than six characters.
var words = ["window", "table", "cup", "knife", "barstool", "glass", "charger", "outlet"];

function filterSixPlus(arr) {

    for (i = 0; i < arr.length; i++) {
        if (arr[i].length < 6) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}
document.getElementById('q5Butn').addEventListener('click', function() {
    document.getElementById('q5').innerHTML = filterSixPlus(words)
});



// 6. Use a function to ask a user for a temperature in Celsius and converts it to Fahrenheit.
//    HINT: You may need to use parseFloat to convert the user's string input to a float.


function tempConvert(tempInput) {
    var celcius = parseFloat(tempInput);
    celcius = (celcius - 32) / 1.8;
    value = celcius.toFixed();
    return value;

}
document.getElementById('q6Butn').addEventListener('click', function() {
    document.getElementById('q6').innerHTML =
        (document.getElementById('q6input').value) + 'degrees Fahrenheit = ' + tempConvert(document.getElementById('q6input').value) + ' degrees Celcius'
});


// 7. Adding to the code in #6, ask the user a second time to determine whether they'd like to convert from Fahrenheit to Celsius
//    or from Celsius to Fahrenheit. To keep it simple, instruct them to use "F to C" or "C to F".
//    Display an error if they do not follow the rules.
function tempConversion(userChoice) {
    if (userChoice === "C to F") {
        var userInput = prompt("Please enter the degree.");
        userInput = parseFloat(userInput);
        userInput *= 1.8;
        userInput += 32;
        value = userInput.toFixed(0);
        return value;
    } else if (userChoice === "F to C") {
        var userInput = prompt("Please enter the degree.");
        userInput = parseFloat(userInput);
        userInput -= 32;
        userInput /= 1.8;
        value = userInput.toFixed(0);
        return value;
    } else {
        userChoice = prompt("You didn't pick F to C or C to F. TRY AGAIN!")
        tempConversion(userChoice);
    }
}


document.getElementById('q7Butn').addEventListener('click', function() {
    document.getElementById('q7').innerHTML =
        document.getElementById('q7input').value + ' = ' + tempConversion(document.getElementById('q7input').value)
});

// 8. Write a function countBs() that takes a string as its only argument and returns
//    a number that indicates how many uppercase “B” characters are in the string.
//    HINT: Google charAt()
//
function countBBs(arg) {
    var numOfB = 0;
    for ( i = 0; i < arg.length; i++) {
        if (arg.charAt(i) === 'B') {
            numOfB += 1;

          }

        };
        return numOfB;
}



    document.getElementById('q8Butn').addEventListener('click', function() {
      //  console.log(document.getElementById('q8input').value);
        document.getElementById('q8').innerHTML = 'We count ' + countBBs(document.getElementById('q8input').value) + ' B\'s'
    });

    // 9. http://games.usvsth3m.com/javascript-under-pressure/
    //    Have fun with these!
    //    Get as far as you can and record your progress and time.
    //    We'll try this again in a few weeks!







    // ADVANCED TRACK
    // 10. Write a function called countChars() that behaves like countBs(), except it takes a
    //     second argument that indicates what character is to be counted.
    //
    //
    function countChars(str, char) {
        var numOfChar = 0;

        for (var i = 0; i < str.length; i++) {
            if (str[i] === char)
            numOfChar += 1;

          }
            return numOfChar;
        };


    document.getElementById('q10Butn').addEventListener('click', function() {
        document.getElementById('q10').innerHTML =
            countChars(document.getElementById('q10input1').value, document.getElementById('q10input2').value) });





    // 11. Declare a function called ohZero that replaces all of the o's in a string with 0's.


function ohZero(str){
  var split = str.split("");
for (var i = 0; i < split.length; i++) {
    if (split[i] === 'o' || split[i] ==='O'){
     split[i] = '0';
   }else{
     console.log( "No o\'s or O\'s detected in your string to replace");
   }
}return split.join("");

}
document.getElementById('q11Butn').addEventListener('click', function() {
document.getElementById('q11').innerHTML =
        ohZero(document.getElementById('q11input1').value);
});
    // 12. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.


function beerSong() {
    var chorus = ' bottles of beer on the wall! ';
    var chorus1 = ' bottles of beer on the wall, ';
    var chorus2 = ' bottles of beer,';
    var chorus3 = ' take one down, pass it around, ';
    var chorus4 = ' bottle of beer, '
    var chorus5 = ' bottle of beer on the wall! '
    var counter = 0;
    for (var i = 99; i > 0; i--) {
        //counter += console.log(i + chorus + i + chorus2 + chorus3 + (i-1) + chorus)
        if (i === 2) {
          console.log(i + chorus + i + chorus2 + chorus3 + (i-1) + chorus5)
console.log('')
        }else if  (i === 1) {
            console.log(i + chorus5 + i + chorus4 + chorus3 + "no more bottles of beer on the wall!" )
        }else{
          counter += console.log(i + chorus + i + chorus2 + chorus3 + (i-1) + chorus)
            console.log('')
        }
}
};
//beerSong();


    // 13. Create a 'Guessing Game'. The game starts by picking a random number.
    //     It then prompts the user to guess the number. If the user's number is lower/higher,
    //     it will prompt the user to enter another guess and tell the user if the guess was
    //     too high or too low. This continues until the correct guess is entered.
    //     When the correct guess is entered the user is given a success message with the correct number.
    function guessingGame() {
      var guessString = prompt("Please guess a number 1 through 5");
      var guessNum = parseInt(guessString);
      var randomNum = Math.floor(Math.random() * 6);
      while (guessNum != randomNum) {
        if (guessNum < randomNum) {
            guessNum = prompt("Nope! Too low! Please guess another number.");
        }
        else {
            guessNum = prompt("Nope! Too high! Please guess another number.");
        }
      };

      alert("You're amazing! The number was " + randomNum);
    }

    //guessingGame();
