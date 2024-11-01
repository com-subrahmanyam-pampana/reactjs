# What this section is
Let understand how we can use React JS in  single index.html file


# HTML DOM:
HTML DOM = A tree of nodes.
Definition: The HTML DOM (Document Object Model) represents the structure of a web page as a tree of objects. It is the actual representation of the page rendered in the browser.

Updates: When you manipulate the HTML DOM directly (for example, by changing content or styles with JavaScript), the browser must reflow and repaint the entire DOM. This can be inefficient, especially for complex pages with many updates, leading to performance issues.

Performance: Direct manipulation of the HTML DOM can be slow because every change requires the browser to update the UI, which can lead to noticeable lag in large applications.
# React DOM
React’s virtual DOM = A tree of React nodes (ReactNode).
The Virtual DOM is a lightweight copy of the actual DOM that React uses to optimize updates. It’s a JavaScript representation of the UI.
When changes are made in a React application (like state updates), React first updates the Virtual DOM. It then compares this new Virtual DOM with the previous version using a process called "reconciliation."

Diffing Algorithm: React efficiently determines what has changed by comparing the old and new Virtual DOMs. It calculates the minimal number of changes needed and then updates only those parts of the actual HTML DOM.

Performance: This approach minimizes direct manipulation of the HTML DOM, leading to improved performance and a smoother user experience. It reduces the number of reflows and repaints required by the browser.

# React and ReactDOM Scripts:

The <script> tags load React and ReactDOM libraries from Facebook's CDN. These libraries are essential for creating and managing React components and rendering them to the DOM.


ReactNode= 
1.It is a building block for a React’s virtual DOM 
It can be either
ReactElement: This is the primary type in React. It’s a light, stateless, immutable, virtual representation of a DOM element.

ReactText: This is a string or a number. It’s a virtual representation of a Text Node in the DOM.

ReactFragment: This is an array of ReactNode elements.

# render method:
The ReactDOM.render method takes three parameters: 
(i).a ReactElement,(ii). a regular DOMElement,(iii) a callback function:

ReactDOM.render(ReactElement, DOMElement, callback);

The ReactElement is the root element in the tree of ReactNodes that you have created, the regular DOMElement is a container DOM node for that tree, and the callback is an optional function executed after the tree is rendered 

#  createElement
React.createElement(type, props, children);

createElement that creates a ReactElement and takes three parameters: type, props and children:
# type
The type parameter can be either:

String: could be an HTML tag name such as div, p, span, and so on. React support all the common HTML tags and attributes.
ReactClass: is created via React.createClass method, basically a custom component.

# props:
The props parameter is a plain Javascript object.
React.createElement(
    'h1',
    {
       className: 'title',
       style: {
           background: 'red',
           color: 'white',
           fontFamily: 'Verdana'
       }
    },
    'Hello, World!!!'
);

# The children parameter.
The children parameter describes what child elements this element should have, if any. 
A child element could be any ReactNode: a ReactElement, a ReactText or a ReactFragment.