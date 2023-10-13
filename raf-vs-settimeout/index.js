const train = document.getElementById('train');

train.onclick = function() {
    let startTime = Date.now();
    let intervalId = setInterval(() => {
        let timePassed = Date.now() - startTime;
        train.style.top = timePassed / 5 + 'px';
        if (timePassed > 5000) {
            clearInterval(intervalId);
        }
    }, 10)
}


function animate({timing, draw, duration}) {
    let start = performance.now();
    
    requestAnimationFrame(function animate(time) {
        let timeFraction =  (time - start) / duration;
        if (timeFraction > 1) {
            timeFraction = 1;
        }

        let progress = timing(timeFraction);

        draw(progress);

        if (timeFraction < 1) {
            requestAnimationFrame(animate)
        }
    })
}