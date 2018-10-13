

// /* 

//     Creating componed with pure React
//     - syntax to create a reusable component
//     - remember a component is a reactElement and stateMachine in one wrapper
//     - the createClass function takes an object called the specification object
//     - the specification object defines methods and properties the component has
//     - every react component must have a render method
// */
// var HelloWorld = React.createClass({
//     /* 
//         - the render key and function is the bare minimum a componenet requires
//         - the render function can look at the current state to determine what it wants to display
//      */
//     render: function(){
//         return React.createElement(
//             // this is a stateless component
//             'h3', {className: 'highlight'}, 'Hello World from a component!'
//         )
//     }

// });

// // Creating a function with JSX
// var HelloWorldJSX = React.createClass({
//     render: function() {
//         return <h3 className='highlight-jsx'>
//             Hello World from a JSX component
//                </h3>
//     }
// });

// // create a nodeElemement of my component
// var reactComponentElement = React.createElement(helloworld);

// // Append to the DOM and VDOM
// ReactDOM.render(reactComponentElement, 
//     document.getElementById('reactclass-1'))

// // Rendering a function JSX syle
// // ReactDOM.render(<HelloWorld />, document.getElementById('reactclass-2'));

// // ReactDOM.render(<HelloWorldJSX />, document.getElementById("reactclass-3"));

// ReactDOM.render(<HelloWorld />,
//     document.getElementById('reactclass-2'));

// ReactDOM.render(<HelloWorldJsx />,
//     document.getElementById('reactclass-3'));

// The React.createClass creates a reusable component

// It takes a specification object as the input and this object
// here has a single 'render' function defined. This specifies
// what makes up a component, its look and feel

// The 'render' function is the bare minimum that has to exist in
// this specification object

// This object encapsulates the state of the component
var HelloWorld = React.createClass({
    render: function() {
        // This can return null or a React element based on the
        // current state.
        // This is a stateless component so we simply return a
        // static element
        return React.createElement(
            'h3', {className: 'highlight'}, 'Hello world from a component!');
    }
});

var HelloWorldJsx = React.createClass({
    render: function() {
        return <h3 className='highlight-jsx'> 
                    Hello world from a component using JSX! 
               </h3>
    }
});

var reactComponentElement = React.createElement(HelloWorld);
ReactDOM.render(reactComponentElement,
    document.getElementById('reactclass-1'));

ReactDOM.render(<HelloWorld />,
    document.getElementById('reactclass-2'));

ReactDOM.render(<HelloWorldJsx />,
    document.getElementById('reactclass-3'));
