console.log("Connected")

/*

 This module demeonstrates how a variable can determine
 what renders inside of a component

 - state determines how a componet will be rendered
 - I can simply build a react component with only a render method
 - Component names usually begin with a capital letter
 - I can use the render function to determine how the component is to be displayed
 - one component can be nested in another


*/

// set state 
var casual = false;

function Hi(){
    return(
        <div className="blue">
            Hi!
        </div>
    )
}


function Hello(){
    return(
        <div className="pink"> 
            Hello
        </div>
    )
}

// establish a component the original way, this is compatable with old browsers:
var Greeting = React.createClass({
    render: function(){
        if (casual){
            return <Hi/>
        } else {
            return <Hello />
        }
    }
})

// Render the component to the DOM
ReactDOM.render(<Greeting/>, document.getElementById('reactclass-1'))

console.log("File is reading")