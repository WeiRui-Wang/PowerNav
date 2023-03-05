var elements;
if (document.readyState !== 'loading') {
    elements = document.querySelectorAll('a[href][class*="nav"], section[class*="bar"] a[href], div[class*="nav"] a[href], li a[href], ul[id*="nav"] li');
    // for (var i = 0; i < elements.length; i++) {
    //     elements[i].style.backgroundColor = 'yellow';
    // }
}

document.addEventListener('keydown', keydownEvent);
function keydownEvent(event) {
    const keyword = event.key;
    highlight(keyword);
}

function getGradientColor(steps, step) {
    const yellow = [255, 255, 0];
    const orange = [255, 165, 0];

    const ratio = step % steps / (steps - 1);

    const red = Math.round(yellow[0] + (orange[0] - yellow[0]) * ratio);
    const green = Math.round(yellow[1] + (orange[1] - yellow[1]) * ratio);
    const blue = Math.round(yellow[2] + (orange[2] - yellow[2]) * ratio);

    return `rgb(${red},${green},${blue})`;
}

function highlight(keyword) {
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const elementInnerText = element.innerText.toLowerCase();

        if (elementInnerText.startsWith(keyword.toLowerCase())) {
            element.style.backgroundColor = getGradientColor(elements.length, i);
        }
        else {
            element.style.backgroundColor = '';
        }
    }
}
