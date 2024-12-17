let interval;             //defining the veariable  
const image = document.getElementById('memeImage');     //image 

function makeItMove(direction) {       //call fuction
    clearInterval(interval); // Clear any existing interval
    interval = setInterval(() => {
        let left = parseInt(window.getComputedStyle(image).left, 10);
        let top = parseInt(window.getComputedStyle(image).top, 10);

        if (direction === 'right') left += 5;   //parameter conditions          
        if (direction === 'left') left -= 5;    //parameter conditions
        if (direction === 'up') top -= 5;       //parameter conditions
        if (direction === 'down') top += 5;     //parameter conditions

        image.style.left = `${left}px`;         //css referene property
        image.style.top = `${top}px`;           //css referene property
    }, 50);
}

function stopMoving() {                     //fuction stop
    clearInterval(interval);                   //clear intervil
}
