import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import './HyperMove.css';
import HomePage from "./Pages/Home/Home";

const HyperMove = (props) => {

    return(
       <React.Fragment>
<Header/>
<HomePage/>
<Footer/>
</React.Fragment>
    );
}

export default HyperMove;