//Contra/Konami Code Easter Egg
    // If the key isn't in the pattern, or isn't the current key in the pattern, reset
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        65: 'a',
        66:'b'
    }

    // the 'official' Konami Code sequence
    const konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a']

    // a variable to remember the 'position' the user has reached so far.
    let konamiCodePosition = 0;

    //add keydown event listener
    document.addEventListener('keydown', function(e) {
        //get the value of the key code from the key map
        let key = allowedKeys[e.keyCode];
        //get the value of the required key from the konami code
        let requiredKey = konamiCode[konamiCodePosition];

        if (key == requiredKey) {
            konamiCodePosition++;
        
            if (konamiCodePosition == konamiCode.length) {
            activateCheats();
            konamiCodePosition = 0;
        } 
    } else {
        konamiCodePosition = 0;
    }
    });

    function activateCheats() {
        const audio = new Audio('audio/06 Triumphal Return 1.mp3')
        setTimeout(() => {
        }, 50)
        audio.play();
        alert("You have activated the Konami Code: 30 lives gained!")
        
    }

