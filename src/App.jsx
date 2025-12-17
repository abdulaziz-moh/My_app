// import './App.css'
import {Home,Counter,Calculator} from './Home.jsx';
import {NavBar,ParentCard,Team} from "./Tools.jsx";

// const element = (<h1>hi why do you get broken</h1>);
function App() {
  return (
  <>
    <NavBar/>
    <ParentCard/>
    <Team/>
    {/* <Calculator/> */}
    {/* <Counter/> */}
    {/* <Home /> */}
  </>  
  )
}

export{ App}