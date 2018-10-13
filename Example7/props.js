console.log("Connected")


var Contents = React.createClass({
    // set default properties of the component, but whats the difference than state if default
    // the properties set out here are available for use across the component
    getDefaultProps: function(){
        return {
            text: 'These are the contents of this container'
        }
    }, 

    render: function(){
        return (
            <div className="contents">
                {this.props.text}
            </div>
        );

    }
});

ReactDOM.render(<Contents />, document.getElementById('outer'))