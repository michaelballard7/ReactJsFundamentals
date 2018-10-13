


var Student = React.createClass({
    render: function() {
        return(
            <div className="student">
                <div> Name: {this.props.name} </div>

                 {/* I can pass all properties down from a component with the spread operator */}

                <Info {...this.props} />

            {/* I can pass operators then specify which I would like to overide */}
            <Info {...this.props} clubs="Darts, KickBoxing" />

            </div>

           
        )
    }

});

var Info = React.createClass({
    render: function(){
        return( 
            <div className='info'>
                <div>
                    Grade: {this.props.grade}
                </div>
                <div>
                    Subjects: {this.props.subjects}
                </div>
                <div>
                    Clubs: {this.props.clubs}
                </div>
            </div>
        );
    }
});

ReactDOM.render(<Student
                    name="Michael"
                    clubs="chess, tennis"
                    grade="Ph.d"
                    subjects="Math, Computer Science"
                    
    />, document.getElementById('root'))