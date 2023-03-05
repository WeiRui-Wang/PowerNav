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

function highlight(keyword) {
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const elementInnerText = element.innerText.toLowerCase();

        if (elementInnerText.startsWith(keyword.toLowerCase())) {
            element.style.backgroundColor = 'orange';
        }
        else {
            element.style.backgroundColor = '';
        }
    }
}
