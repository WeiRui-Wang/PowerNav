var elements;
if (document.readyState !== 'loading') {
    elements = document.querySelectorAll('a[href][class*="nav"], section[class*="bar"] a[href], div[class*="nav"] a[href], li a[href], ul[id*="nav"] li a[href]');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = 'yellow';
    }
}

var keyword = '';
var matchedElement;

document.addEventListener('keydown', keydownEvent);
function keydownEvent(event) {
    keyword += event.key;
    highlight(keyword);
    if (event.key === 'Enter' && matchedElement) {
        keyword = '';
        matchedElement.click();
    }
}

function highlight(keyword) {
    var firstElement;
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