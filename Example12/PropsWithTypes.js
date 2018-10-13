
var Contents = React.createClass({

    // set up a function to validate that my props are of appropriate type
    // inside propTypes I can specify every props type
    propTypes: {
        text: React.PropTypes.string,
        number: React.PropTypes.number,
        enabled: React.PropTypes.bool,
        important: React.PropTypes.string.isRequired,
        // I can build a custom validator as such
        animalName: function(properties, propertyName, componentName){
            var propertyValue = properties[propertyName];
            // actual vailidation
            if (propertyValue != 'Oba' && propertValue != 'Moje'){
                throw Error('Name value is wrong')
            }
        }



    },
    getDefaultProps: function(){
        return {
            text: 'These are contents of this container',
            number: 5,
            enabled: true,
            important: 'Blah',
            animalName: 'Oba'
        }

    },                                                                      
    render: function(){
        return(
            <div className="contents">
                <div>
                    Text: {this.props.text}
                </div>
                <div>
                    Number: {this.props.number}
                </div>
                <div>
                    Enables: {this.props.enabled ? 'true' : 'false'}
                </div>
                <div>
                    important: {this.props.important}
                </div>
                <div>
                    Animal Name: {this.props.animalName}
                </div>

            </div>
        )
    }
})

ReactDOM.render(<Contents />,
            document.getElementById('root'))