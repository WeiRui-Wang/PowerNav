// Timeout length for keyup event
const KEYUP_TIMEOUT_LENGTH = 321;

// Timeout length for target element matching sliding window
const TARGET_TIMEOUT_LENGTH = 654;

// Store all the target elements
var targetElements;

// When the window is loaded, highlight all the target elements
window.addEventListener("load", (event) => {
    targetElements = document.querySelectorAll('a[href][class*="nav"], section[class*="bar"] a[href], div[class*="nav"] a[href], li a[href], ul[id*="nav"] li a[href]');
    for (var i = 0; i < targetElements.length; i++) {
        // targetElements[i].style.backgroundColor = 'yellow';
    };
});

// Initialize keyword and matchedElement
var keyword = '';
var matchedElement;

// matched flag
var matched = false;

// Handle keydown events
document.addEventListener('keydown', keydownEvent);
function keydownEvent(event) {
    // Check if current focus is on a text input field or text area to prevent unintended navigation
    if (event.target.tagName.toLowerCase() === 'input' || event.target.tagName.toLowerCase() === 'textarea') {
        return;
    }
    // Check if the key is a modifier key and ignore input
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
        return;
    }
    // Only take character keys
    if (event.keyCode == 32 || (event.keyCode >= 65 && event.keyCode <= 90)) {
        // Append the key to the keyword
        keyword += event.key;
        if (matched) {
            // Highlight the matched element if there's a match
            highlight(keyword, matchedElement);
        } else {
            // Highlight all the target elements if there's no match yet
            highlight(keyword, targetElements);
        }
    }
    // Handle enter key press
    if (event.key === 'Enter' && matchedElement) {
        // Reset the keyword and click the matched element
        keyword = '';
        matchedElement.click();
    }
}

// Set up timeouts for keyup events and target element events
let timeout;
let targetTimeout;
document.addEventListener('keyup', keyupEvent);
function keyupEvent(event) {
    // Clear the timeout for keyup event
    clearTimeout(timeout);
    // Set a new timeout to reset the keyword and matched flag
    timeout = setTimeout(() => {
        keyword = '';
        matched = true;
    }, KEYUP_TIMEOUT_LENGTH);
    // Clear the timeout for target matched state
    clearTimeout(targetTimeout);
    // Set a new timeout to reset the matched element and keyword
    targetTimeout = setTimeout(() => {
        matchedElement = null;
        matched = false;
        keyword = '';
    }, TARGET_TIMEOUT_LENGTH);
}

// Highlight the matching elements
function highlight(keyword, elements) {
    var firstElement;
    if (!elements) {
        return;
    }
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const elementInnerText = element.innerText.toLowerCase();
        if (elementInnerText.startsWith(keyword.toLowerCase())) {
            // Change the background color to orange if there's a match
            // element.style.backgroundColor = 'orange';
            if (!firstElement && element.checkVisibility()) {
                firstElement = element;
            }
        }
        else {
            // Change the background color to yellow if there's no match
            // element.style.backgroundColor = 'yellow';
        }
    }
    // Focus on the first matching element and store it as matchedElement
    if (firstElement) {
        firstElement.focus();
        matchedElement = firstElement;
    }
}