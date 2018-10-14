function ToDo(props){
    return <div> ToDo: {props.item}</div>
}

function List(props){
    var list = ['clean car', 'finish email', 'get groceries'];
    return(
        // create a jsx expression to map over an array of elements
        <ul>
            {/* when I have similar elements display sequentially they must have a key, react requires unique identifiers */}
            {list.map((todo)=> <ToDo key={todo} item={todo} /> )}
        </ul>
    )
}

ReactDOM.render(<List/>, 
    document.getElementById('root'))


    