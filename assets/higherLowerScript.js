let input = document.getElementById("guess");
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("myBtn2").click();
        }
    });

let myBtn1 = document.getElementById('myBtn1');
    myBtn1.addEventListener('click', function onClick() {
        myBtn1.style.backgroundColor = 'lightskyblue';
        myBtn1.style.color = 'white';
    });

/* v8-Changelog:

    JS Line 13-18: Added eventListener to change button color to salmon on click.
    Added fireworks effects on correct guess.
    Added CSS page and separated out functions to its own page.
    Added background image.
    Added 'made by' tag to footer.
    Added border to container and changed styling.
    Added text shadow to game title.
    Added hide/reveal to 2nd container.
    Added extra message if user guesses it correct on first guess.
    Added flexbox to keep footer at bottom of screen.
    Added README.
    Added a font-family to the footer.
    Added color change to the second button on correct answer.
    Added color change to the rest of the buttons, organized the color changes.
    Moved a few function-specific variable declarations back to the top of the funcs page.
    Removed the color change for the other answers and set up a color scheme depending on how far away your guess is.  Will continue to fiddle with it.
    Made the color change only if the guess is a valid guess, otherwise it goes gray.
    Made the btnColorChange be determined by how far off the guess is from the randomNum relative to the maximum by percent. 

*/

/* Issues:

    Lost the smaller-sized text box. Now it's fullscreen (lost something when I took the divs out to fix centering issue.)
    Can you style prompt boxes?
    Center the placeholder in the text box (or just perma-resize the box, but couldn't hurt to do both...or could it?)
    Start adding some animations, sounds, an instructional video, etc.
    Automatically move to text boxes for input and enter purposes.  Ease-of-Use.

*/