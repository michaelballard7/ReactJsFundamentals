

function BlueBox(props){
    return <Box color="blue" />
}

function RedBox(props){
    return <Box color="red" />
}

function GreenBox(props){
    return <Box color="green" />
}


function RandomBox(props){
    const boxes = [
        BlueBox,
        RedBox,
        GreenBox
    ]
    const SomeBox = boxes[props.index]

    return <SomeBox />;
}
    

// functional components only have a render method
function Box(props){
    // to specify style attributes set up an object with all style specifications
    const divStyle = {
        backgroundColor: props.color
    };
    return (
        <div className="box" style={divStyle}>

        </div>
    )
}


ReactDOM.render(
    <RandomBox index={Math.floor(Math.random()*3)} />,
    document.getElementById('outer-4')
)

ReactDOM.render(
    <Box color="yellow" />,
    document.getElementById("root")
)

ReactDOM.render(
    <BlueBox  />,
    document.getElementById("outer-1")
)

ReactDOM.render(
    <RedBox />,
    document.getElementById("outer-2")
)

ReactDOM.render(
    <GreenBox  />,
    document.getElementById("outer-3")
)
