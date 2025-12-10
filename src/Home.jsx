import './Home.css'
import govgidelogo from './assets/react.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown, faArrowDown91, faArrowDownAZ, faCaretDown, faCircle, faCircleQuestion, faHouse, faQuestion, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
function Home(){

    const repeatCount= 10;

    return (
        <>
<div className="app-container">
    <nav className="top-nav">
        <div>
            <a><img src={govgidelogo} alt='logo'></img></a>
        </div>
        <div className='nav-bar-icons'>
            <FontAwesomeIcon icon={faHouse} style={{ fontSize: '24px'}}/>
            <FontAwesomeIcon icon={faCircleQuestion } style={{ fontSize: '24px'}}/>
            <FontAwesomeIcon icon={faSearch} style={{ fontSize: '24px'}}/>
        </div>
        <div className='search-input'>
            <input type="text" placeholder='Search'/>
        </div>
    </nav>

    <main className="content-area">
        <div className="left">
            <div className='profile'>
               <a><img src={govgidelogo} alt='logo'></img></a>
                <h3>Abdulaziz</h3>
                <FontAwesomeIcon icon={faCaretDown}/>
            </div>
            <div className='drop-down'>
               <ul>
                    <li>Abdulaziz</li>
                    <li>Posts</li>
                    <li>Signout</li>
               </ul>
                
            </div>
        </div>
        <div className="right">


            {Array(repeatCount).fill().map((_, index) => (
                // The key prop is REQUIRED when creating lists of elements
                <div className='post' key={index}> 
                    <div className='post-header'>
                        <a><img src={govgidelogo} alt='logo'></img></a>
                        <h1>Abdulaziz - Post #{index + 1}</h1>
                    </div>
                    <div>
                        <p>This is discription</p>
                    </div>
                    <div>
                        <p>More...</p>
                    </div>
                </div>
            ))}

        </div>
    </main>
</div>
        </>
    )
}


function Counter(){
    const [count,setCount] = useState(0);
    
    function increment(){
        setCount(count + 1)
        console.log(count)
    }
    function decrement(){
        if (count > 0){
            setCount(count - 1)
            console.log(count)
        }
    }
    function reset(){
        setCount(0)
    }

    return(
        <div className='counter-return'>
            <p className='count-variable'>variable: {count}</p>
            <div className='count-buttons'>
                <button onClick={increment}>add</button>
                <button onClick={decrement}>subtract</button>
                <button onClick={reset}>reset</button>
            </div>
        </div>
    );
}

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value); // update state
  };

  const clearInput = () => {
    setInput(""); // reset state
  };

  const calculate = () => {
    try {
      // evaluate the expression
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div style={{ width: "200px", margin: "50px auto", textAlign: "center" }}>
      <h2>React Calculator</h2>

      <input id="calc-input" type="text" value={input} readOnly />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "5px" }}>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("/")}>/</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("*")}>*</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("-")}>-</button>

        <button onClick={() => clearInput()}>C</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => calculate()}>=</button>
        <button onClick={() => handleClick("+")}>+</button>
      </div>
    </div>
  );
}

export {Home,Counter,Calculator}