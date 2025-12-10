import './Navbar.css'
import govgidelogo from './assets/react.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown, faArrowDown91, faArrowDownAZ, faCaretDown, faCircle, faCircleQuestion, faHouse, faQuestion, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function NavBar(){
    return(
        <div className='nav-bar'>
           <img src='#' alt='logo here'/>
           <div className='icons'>
                <FontAwesomeIcon icon={faHouse}/> 
                <FontAwesomeIcon icon={faSearch}/>
           </div>
        </div>
    )

}

function ProductCard({title,price,isAvailable}){
    const [availableity,changeStatus] = useState(isAvailable)
    function change(){
        if (availableity){
            changeStatus(false)
        }
        else{
            changeStatus(true)
        }
    }
    return(
        <>
        <div className='product-card'>
            <h2>Product: {title}</h2>
            <h4>Price: {price} </h4>
            <h4>{availableity? "In Stock":"Out Of Stock"}</h4>
            <button onClick={change}>click me to change status</button>
        </div>   
        </>
    )
}

function ParentCard(){
    return(
        <>
        <div className='parent-cards'>
            <ProductCard  title="T-Shirt" price={1000} isAvailable={true} />
            <ProductCard  title="Trouser" price={2000} isAvailable={false} />
            <ProductCard  title="Hat" price={500} isAvailable={false} />
        </div>
        </>
    )

}


function Count(){
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
export {NavBar,Count,ProductCard,ParentCard}