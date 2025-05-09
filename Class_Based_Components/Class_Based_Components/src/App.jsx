
// import Umamaheshwari from "./Home";
// import {Home1 as H1} from "./Home"
// import {Home2 as H2} from "./Home"
// import {Home3 as H3} from "./Home"
// import {BrowserRouter,Routes,Route} from "react-router-dom"
// import BrowserRouter from "react-router-dom/BrowserRouter"
// import {FaTrash,Faeye} from "react-icons/fa"
// //import Faeye from "react-icons/fa"

// import ClassbasedComponent from "./Home"  //Alias names
// import { Navbar } from "./Comps/NavBar/Navbar";

// class App extends React.Component{
//      render(){
//        return (
//          <>
//          <div>hello this is class based comp</div>
        
//          <Navbar />
//          <Products />
       
//          </>
//        )
//      }
//  }
//  export default App;



import React from "react";
import { Navbar } from "./Comps/NavBar/Navbar";
import Products from "./Products/Products";

class App extends React.Component{
  render(){
    return(
      <>
      <div>hello this is class based component</div>
      <Navbar/>
      <Products/>
      </>
    )
  }
}
export default App;