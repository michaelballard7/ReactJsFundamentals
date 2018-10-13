

// a component with two nested Components 

var Student = React.createClass({
    render: function(){
        return (
            <div className="student">
                <div>
                    Name: {this.props.name} 
                </div>
                
                {/* dont forget to pass the children */}
                <Academic 
                        grade={this.props.grade}
                        subjects={this.props.subjects}/>
                <Extras clubs={this.props.clubs} /> 
            </div>
        )
       
    }
})

// nested component need props to be passed down from the parent
var Academic = React.createClass({
    render: function(){
        return(
            // dont forget to attach css classes to Divs defined in html
            <div className='academic'>   
                
                <div >  
                    Grade: {this.props.grade}
                </div>

                <div > 
                    Subjects: {this.props.subjects}      
                </div>
            </div>
        )
    }
})



var Extras = React.createClass({
    render: function(){
        return(

            <div className="extras">
            
                <div>
                    clubs: {this.props.clubs}
                </div>
            
            </div>
        )

    }
})

ReactDOM.render( <Student 
                    name="Michael Ballard" 
                    grade = "5"
                    clubs = "Boxing, Fencing"
                    subjects = "Math, Science"/>, 
                    document.getElementById('root'));
    