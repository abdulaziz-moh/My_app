import './Home.css'
import govgidelogo from './assets/react.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown, faArrowDown91, faArrowDownAZ, faCaretDown, faCircle, faCircleQuestion, faHouse, faQuestion, faSearch } from '@fortawesome/free-solid-svg-icons';
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

export {Home}