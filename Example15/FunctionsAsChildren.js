
/* I love javascript, python and ruby */
/* I will soon love c++ */

// Child component
function Numbers(props){
    var numberList = [];

    // I can execute functions 
    for (var i = 1; i <=props.upto; i++){
        numberList.push(props.children(i))
    }

    // an array returns a react fragement, when interpretated they are expanded to individual elemnents
    return  <div>{numberList}</div>
    
}

// Parent component
function List(props){
    return (
        <Numbers upto={props.upto}>
            {(index)=> <div key={index}>{index}</div>}
        </Numbers>
    )
}

ReactDOM.render(<List upto={10}/>,
    document.getElementById('root')
    );