import React from "react";
import Appbar from "../components/Appbar";

function Menu() {
    return (
        <div>
        <Appbar/>
        <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Menu:</h1>
        <form>
            <h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Cheeseburger:       $6.8</h2><br/>
            <h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Hamburger:     $5.5</h2><br/>
        </form>
        </div>
    );
}

export default Menu;
