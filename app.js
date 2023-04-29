let run = 0;
let wicket = 0;
let hit = 0;
let inputRef = React.createRef();
let ballWiseRes = [];

function runCount(num){
    
    if( wicket< 10){
        hit = num;
        renderElement.render(<App />);
    }
    
}

// function add(){
//     {hit === 'W'?wicket += 1 : run += hit}
//     renderElement.render(<App />);
// }

function wicketCount(){
    if(wicket < 10){
        hit = "W";
        renderElement.render(<App />);
    }
}

const ScoreBoard = () =>

    (
        <>
        <button onClick={() => runCount(0)}>0</button>
        <button onClick={() => runCount(1)}>1</button>
        <button onClick={() => runCount(2)}>2</button>
        <button onClick={() => runCount(3)}>3</button>
        <button onClick={() => runCount(4)}>4</button>
        <button onClick={() => runCount(6)}>6</button>
        <button onClick={wicketCount}>Wicket</button>
        </>
    )
    
    const Result = () =>
        (
            <div>
                {ballWiseRes.map((res, index) => (
                        <span key={index}>{res}</span>    
                ))}
            </div>
        )

function handlerEvent(event){
    event.preventDefault();

    {hit === 'W'?wicket += 1 : run += hit}

    ballWiseRes.unshift(
        // <p>{hit}{", "+ inputRef.current.value}</p>
        <p>
            {`${hit}, ${inputRef.current.value}`}
        </p>
    );
    console.log(ballWiseRes);

    // console.log(inputRef.current.value);
    hit = 0;
    inputRef.current.value = "";
    renderElement.render(<App />);
}

const Form = () =>(
    <form onSubmit={handlerEvent}>
        <input value={hit}/>
        <input placeholder="Add a comment" ref={inputRef}/>
        {/* <button onClick={add}>Submit</button> */}
        <button>Submit</button>
    </form>
)
const App = () =>
    (
    <>
        <h1>SCORE KEEPER</h1>
        <h2>Score: {run}/{wicket}</h2>
        <ScoreBoard />
        <br />
        <Form />
        <hr />
        <Result />
    </> 
    )


const renderElement = ReactDOM.createRoot(document.getElementById("root"));
renderElement.render(<App />);