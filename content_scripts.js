const KEYUP_TIMEOUT_LENGTH = 500;
const TARGET_TIMEOUT_LENGTH = KEYUP_TIMEOUT_LENGTH * 2;

var targetElements;

window.addEventListener("load", (event) => {
    targetElements = document.querySelectorAll('a[href][class*="nav"], section[class*="bar"] a[href], div[class*="nav"] a[href], li a[href], ul[id*="nav"] li a[href]');
    for (var i = 0; i < targetElements.length; i++) {
        targetElements[i].style.backgroundColor = 'yellow';
    };
});



var keyword = '';
var matchedElement;
var matched = false;

document.addEventListener('keydown', keydownEvent);
function keydownEvent(event) {
    if (event.keyCode == 32 || (event.keyCode >= 65 && event.keyCode <= 90)) {
        keyword += event.key;
        if (matched) {
            highlight(keyword, matchedElement);
        } else {
            highlight(keyword, targetElements);
        }
    }
    if (event.key === 'Enter' && matchedElement) {
        keyword = '';
        matchedElement.click();
    }
}

let timeout;
let targetTimeout;
document.addEventListener('keyup', keyupEvent);
function keyupEvent(event) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        keyword = '';
        matched = true;
    }, KEYUP_TIMEOUT_LENGTH);
    clearTimeout(targetTimeout);
    targetTimeout = setTimeout(() => {
        matchedElement = null;
        matched = false;
        keyword = '';
    }, TARGET_TIMEOUT_LENGTH);
}

function highlight(keyword, elements) {
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