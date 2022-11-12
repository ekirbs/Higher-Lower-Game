let roundedMaxChoice, randomNum;

let guessArray = [];

function do_maxChoice () {
    let valid_input = false;
    let message1 = document.getElementById("message1");

    while(!valid_input) {
        let maxChoice = window.prompt("Choose your own maximum number.  (It has to be a positive number greater than one).");

        roundedMaxChoice = Math.round(Number(maxChoice));

        if(!isNaN(roundedMaxChoice) && roundedMaxChoice > 1) {
            valid_input = true;
        
            randomNum = Number(Math.floor(Math.random() * roundedMaxChoice) + 1);
        }
        console.log(randomNum);
        container2.classList.remove("hide");   
    }
    message1.innerHTML = `Now, guess a number between 1 and ${roundedMaxChoice}.  After you enter your guess, press the Guess button, or press Enter, and see if you got it right!`;
}


function do_guess() {
    let guess = Number(document.getElementById("guess").value);
    let message2 = document.getElementById("message2");

    if(isNaN(guess)) {
        message2.innerHTML = "You need to choose a <i>number</i>!  <b>Please try again.</b>";
        myBtn2.style.backgroundColor = 'gray';
        myBtn2.style.color = 'white';
    }
    else if(guess < 1 || guess > roundedMaxChoice) {
        message2.innerHTML = "You have to choose a number <i>in the range you selected</i>!  <b>Please try again.</b>";
        myBtn2.style.backgroundColor = 'gray';
        myBtn2.style.color = 'white';
    }
    else if(guessArray.includes(guess)) {
            message2.innerHTML = "You guessed that number already!  <b>Please try again.</b>";
            myBtn2.style.backgroundColor = 'gray';
            myBtn2.style.color = 'white';
    }
    else {
        guessArray.push(guess);
        btnColorChange();
        
        if(guess < randomNum) {
            message2.innerHTML = "No, try a higher number.";
        }
        else if(guess > randomNum) {
            message2.innerHTML = "No, try a lower number.";
        }
        else {
            light_blue_touchpaper();
            audio.play();
            victoryCheer.classList.remove("hide");
            marioRunning.classList.add("hide");

            if(guess == randomNum && guessArray.length == 1) {
                message2.innerHTML = `<b>You got it!</b><br>It only took you ${guessArray.length} guess!<br>Your guess was: ${guess}.`;
            } 
            else {
                message2.innerHTML = `<b>You got it!</b><br>It took you ${guessArray.length} guesses.<br>Your guesses were: ${guessArray.join(", ")}.`;
            }
        }
    }  
}

function btnColorChange() {
    let guess = Number(document.getElementById("guess").value);
    let btnColor = Math.abs(Number(randomNum - guess));

    let percentToGet1 = 50;
    let percentToGet2 = 25;
    let percentToGet3 = 10;
    let percentToGet4 = 5;

    let percent1 = (percentToGet1 / 100) * randomNum;
    let percent2 = (percentToGet2 / 100) * randomNum;
    let percent3 = (percentToGet3 / 100) * randomNum;
    let percent4 = (percentToGet4 / 100) * randomNum;

        if (btnColor > percent1 && guess < randomNum  && guess >= 1) {
            myBtn2.style.backgroundColor = 'red';
            myBtn2.style.color = 'white';
            mario1.style.right = '600px';
        }
        else if (btnColor > percent2 && btnColor < percent1) {
            myBtn2.style.backgroundColor = 'orange';
            myBtn2.style.color = 'white';
            mario1.style.right = '400px';
        }
        else if (btnColor > percent3 && btnColor < percent2) {
            myBtn2.style.backgroundColor = 'yellow';
            myBtn2.style.color = 'blue';
            mario1.style.right = '200px';
        }
        else if (btnColor > percent4 && btnColor < percent3) {
            myBtn2.style.backgroundColor = 'green';
            myBtn2.style.color = 'white';
            mario1.style.right = '1px';
        }
        else if (btnColor !== 0 && btnColor < percent4) {
            myBtn2.style.backgroundColor = 'blue';
            myBtn2.style.color = 'white';
            mario1.style.right = '-200px';
        }
        else if (btnColor == 0) {
            myBtn2.style.backgroundColor = 'purple';
            myBtn2.style.color = 'white';
            mario1.style.right = '-400px';
        }
        else {
        }
}
//couldn't I use a loop array here somehow?