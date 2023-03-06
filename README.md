# PowerNav

A lightweight extension for accessibility and power users by using dynamic navigation elements common pattern matching across vairous websites.

PowerNav is a Chrome extension that enhances website navigation for accessibility and power users. The extension allows users to define search patterns for specific types of elements on a web page, such as links, buttons, or form fields. When activated, PowerNav searches the page for matching elements and highlights them.

The code provided is part of the implementation of PowerNav's search and highlighting feature. The elements variable is initialized with a list of selectors that match the types of elements PowerNav can search for. The code then loops through each element and sets its background color to yellow.

The keydownEvent function is called when a key is pressed while the extension is activated. The function adds the pressed key to the keyword variable and calls the highlight function with the current keyword. If the pressed key is the "Enter" key and a matching element is found, the function resets the keyword and clicks on the matched element.

The highlight function loops through each element in the elements list and checks whether its inner text starts with the given keyword. If it does, the element's background color is set to orange, and if it is visible on the page, the function sets it as the first matching element. If no matching elements are found, the function sets the background color of the element to yellow. Finally, if a matching element is found, the function sets focus on it and sets it as the matched element.

The extension allows users to quickly navigate to and interact with elements on a website, enhancing accessibility and productivity for power users.
