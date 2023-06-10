const numbers = document.querySelectorAll('.facts__item_numbers');
const time = 1000;
const step = 1;
let wasPlayed = false;

function runNumbers(elem, num) {
    wasPlayed = true;
    n = 0;
    let t = Math.round(time / (num / step));
    let interval = setInterval(() => {
        n = n + step;
        if (n >= num) {
            clearInterval(interval);
        }
        elem.innerHTML = n;
    }, t);
}


const element = document.querySelector('.facts__item_numbers');

const searchVisibility = function (target) {
   
    const targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        left: window.pageXOffset + target.getBoundingClientRect().left,
        right: window.pageXOffset + target.getBoundingClientRect().right,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },

        windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        };

    if (targetPosition.bottom > windowPosition.top && 
        targetPosition.top < windowPosition.bottom && 
        targetPosition.right > windowPosition.left && 
        targetPosition.left < windowPosition.right) { 
      
        if (!wasPlayed) {
            numbers.forEach(number => runNumbers(number, +number.textContent));
        }

    } else {
        wasPlayed = false;
       
    };
};


window.addEventListener('scroll', function () {
    searchVisibility(element);
});


searchVisibility(element);
