
/*
    - props.children is a powerful way to access child elements before I even know what they are

*/

function RedText(props){
    // props.children refers to all children of this component
    return <div className="red">{props.children}</div>
}

function GreenText(props){
    return <div className="green">{props.children}</div>
}

ReactDOM.render(<RedText> Hello </RedText>, document.getElementById('outer-1'))

ReactDOM.render(
    <RedText>
        Some nested elements: 
        <span><i>here</i></span> &amp; <span><b>here</b></span>
    </RedText>, document.getElementById('outer-2')
)

ReactDOM.render(
    <GreenText>
        Some nested Elements: 
        {/* component children can contain other nested components */}
        <RedText>here</RedText> and <RedText>here</RedText>
    </GreenText>, document.getElementById('outer-3')
)