const KEYUP_TIMEOUT_LENGTH = 456;
const TARGET_TIMEOUT_LENGTH = KEYUP_TIMEOUT_LENGTH * 2;

var elements;

window.addEventListener("load", (event) => {
    elements = document.querySelectorAll('a[href][class*="nav"], section[class*="bar"] a[href], div[class*="nav"] a[href], li a[href], ul[id*="nav"] li a[href]');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = 'yellow';
    };
});


var keyword = '';
var matchedElement;

document.addEventListener('keydown', keydownEvent);
function keydownEvent(event) {
    if (event.keyCode == 32 || (event.keyCode >= 65 && event.keyCode <= 90)) {
        keyword += event.key;
        highlight(keyword);
    }
    if (event.key === 'Enter' && matchedElement) {
        keyword = '';
        matchedElement.click();
    }
}

let timeout;
document.addEventListener('keyup', keyupEvent);
function keyupEvent(event) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        keyword = '';
    }, KEYUP_TIMEOUT_LENGTH);
}

function highlight(keyword) {
    var firstElement;
    if (!elements) {
        return;
    }
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const elementInnerText = element.innerText.toLowerCase();
        if (elementInnerText.startsWith(keyword.toLowerCase())) {
            element.style.backgroundColor = 'orange';
            if (!firstElement && element.checkVisibility()) {
                firstElement = element;
            }
        }
        else {
            element.style.backgroundColor = 'yellow';
        }
    }
    if (firstElement) {
        firstElement.focus();
        matchedElement = firstElement;
    }
}