# What this section is
We can test the react js elemnrt in a single index.html file

# Steps
1.Create a new file(index.html)
2.



HTML DOM = A tree of nodes, 
React’s virtual DOM = A tree of React nodes (ReactNode).

ReactNode= 
It is a building block for a React’s virtual DOM 
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