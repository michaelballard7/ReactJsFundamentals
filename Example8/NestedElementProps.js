

// The container component is the parent element
var Container = React.createClass({
    
    render: function(){
        return (
            <div className = "container">
                <Contents text="Child one Hardcoded" /> 
            </div>
        );
    }
});




// this element recieves information from another componentx
// if a component does not have a getDefaultProps method they are most likely passed from a parent
var Contents = React.createClass({
    render: function(){
        return(
            <div className='contents'>
                {this.props.text}   

            </div>
        )
    }
});