/*

function choiceFunctions() {
    do_guess();
    btnColor();
}

let colorArray = ["blue", "green", "yellow", "orange", "red", "purple"];

let x = Math.abs(randomNum - guess);
    if (x > 50) {
        myBtn2.style.backgroundColor = 'purple';
        myBtn2.style.color = 'white';
    } else if (x > 25 && x < 50) {
        myBtn2.style.backgroundColor = 'red';
        myBtn2.style.color = 'white';
    } else if (x > 10 && x < 25) {
        myBtn2.style.backgroundColor = 'orange';
        myBtn2.style.color = 'white';
    } else if (x > 5 && x < 10) {
        myBtn2.style.backgroundColor = 'yellow';
        myBtn2.style.color = 'white';
    } else if (x != 0 && x < 5) {
        myBtn2.style.backgroundColor = 'green';
        myBtn2.style.color = 'white';
    } else if (x = 0) {
        myBtn2.style.backgroundColor = 'blue';
        myBtn2.style.color = 'white';
    }

Include a graphic of a chromatic range and an explanation of how the closer they get, the better.
Maybe an animated figure (hand, person) who moves from one color to another as the user guesses.

Change visual to a rainbow road at bottom with someone moving across it, with space over top.
Change win animation to something more appropriate, or more involved fireworks.
    6 columns, each with a color, the animated guy moves from the center of one column to the other.

    var number = 120;
    var percentToGet = 50;
    var percent = (percentToGet / 100) * number;
    alert(percentToGet + "% of " + number "is" + percent);


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
        }
        else if (btnColor > percent2 && btnColor < percent1) {
            myBtn2.style.backgroundColor = 'orange';
            myBtn2.style.color = 'white';
        }
        else if (btnColor > percent3 && btnColor < percent2) {
            myBtn2.style.backgroundColor = 'yellow';
            myBtn2.style.color = 'blue';
        }
        else if (btnColor > percent4 && btnColor < percent3) {
            myBtn2.style.backgroundColor = 'green';
            myBtn2.style.color = 'white';
        }
        else if (btnColor !== 0 && btnColor < percent4) {
            myBtn2.style.backgroundColor = 'blue';
            myBtn2.style.color = 'white';
        }
        else if (btnColor == 0) {
            myBtn2.style.backgroundColor = 'purple';
            myBtn2.style.color = 'white';
        }
        else {
        }
}

make image
set initial image position
change image position each time a result is set
    along the rainbow for valid guesses, somewhere else for invalid guesses.
    different pictures on rotation, and a unique one for invalid guesses.


<img id="mario1" src="./assets/marioBase.jpg" alt="Mario running 1." />

    mario1 {
    display: block;
    height: 50px;
    width: 50px;
    margin-left: auto;
    margin-right: auto;
}

    mario1.style.height: 50px;
    mario1.style.width: 60px;

*/
