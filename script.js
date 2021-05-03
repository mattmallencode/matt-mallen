/* 
    Attribution: 
    1. Sources made use of in the blog page have been referenced with hyperlinks or in an attribution section.
    2. I made use of one piece of CSS I found online to fix issues with Safari mobile. Links included with code.
    3. Colour gradients were made using an automated tool called CSS Gradient. Available from: https://cssgradient.io/
    4. Filters were made with an automated tool: filter generator. Available from: https://codepen.io/sosuke/pen/Pjoqqp
    5. Website colour scheme and design is inspired by the Ubuntu Linux distribution. Available from: https://ubuntu.com/
    6. All page transition animations were made using the swup page transition library. Available from: https://swup.js.org/
    7. Icons used in navbar and on the info page are free even without attribution. Available from: https://uxwing.com/
    8. Font used is Ubuntu. Available from: https://fonts.google.com/specimen/Ubuntu
    9. Matt Mallen created all other content, markup, and CSS. Available from: https://cs1.ucc.ie/~mm55/ca1/index.html
*/

const options = {
    containers: [".swup"],
    linkSelector: "a:not([data-no-swup])",
};

const swup = new Swup(options);

