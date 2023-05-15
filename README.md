# PowerNav ![Store icon](https://user-images.githubusercontent.com/58345470/224576465-52aeb7e7-691d-476b-939d-4e1d28395267.png)

PowerNav allows users to quickly navigate to and interact with navigation menu elements on most website, enhancing the productivity for accessibility and power users.

PowerNav is a Chrome extension designed to facilitate efficient and accessible web navigation using keyboard inputs. By searching for, highlighting, and navigating to page elements based on user-entered keywords, PowerNav enhances the browsing experience for power users and individuals who rely on keyboard navigation due to accessibility requirements.

### Usage

Once installed, PowerNav automatically begins functioning on all web pages, targeting elements such as links within sections, divs, lists, or any other element that has a "nav" in its class or ID. When a user starts typing, the tool looks for elements that start with the entered keyword.

The following keyboard events are of importance:

1. Typing Characters (A-Z, Space): As you type, PowerNav starts searching for matching elements on the page based on the keyword entered. The first element that matches the keyword will be focused and stored as the "matched" element.

2. Enter Key: Pressing the "Enter" key when there's a matched element will navigate to (or 'click') the matched element.

Please note that PowerNav ignores keystrokes when focus is on text input fields or text areas to prevent unintended navigation. Also, the tool ignores modifier keys (Alt, Ctrl, Meta, Shift).

#### Timeouts

PowerNav uses timeouts to reset the keyword and matched element. If a key isn't pressed within 456 milliseconds, the keyword is reset. Similarly, if no matching element is found within 789 milliseconds, the matched element state is reset.

### Visual Feedback

In the current version of the script, visual feedback (changing the background color of the matched elements) is commented out. However, if uncommented, it will highlight all potential navigation targets in yellow and the currently matched element in orange. This can provide an easier visual reference to users.

Note: This tool is designed for accessibility and power users and may require a basic understanding of keyboard navigation principles to be used effectively. Always make sure to double-check the target of your navigation before hitting the "Enter" key.

![Marquee promo tile](https://user-images.githubusercontent.com/58345470/224576466-5a902f1c-8abf-413b-bd56-6b7c62a23878.png)

![PowerNav](https://user-images.githubusercontent.com/58345470/224559818-0e99decc-59e0-4c9d-a240-b80bd0ed9c25.gif)

![Small promo tile](https://user-images.githubusercontent.com/58345470/224576472-1e4ef32c-1d1e-4958-a817-13ce9842d20e.png)

**Enable highlight on focused object in Chrome setting as illustrated below to make navigation focus easier to observed:**

![image](https://user-images.githubusercontent.com/58345470/224555405-239b8773-9690-4a56-a4fb-a51c2469a177.png)

PowerNav enhances website navigation for accessibility and power users. The extension allows users to search button text and automatically focus on the element. When activated, PowerNav searches the page for matching elements and user can quickly navigate within the webpage.

![Screenshot 2023-05-15 161940](https://github.com/WeiRui-Wang/PowerNav/assets/58345470/ce8b8f72-b898-4e30-a013-ad02e9d3352c)
![Screenshot 2023-05-15 155638](https://github.com/WeiRui-Wang/PowerNav/assets/58345470/69eed723-df31-40bb-adaf-c62941250776)
![Screenshots](https://user-images.githubusercontent.com/58345470/224576474-853a89bd-06e3-46a2-9504-ac19e3e15a6a.png)
