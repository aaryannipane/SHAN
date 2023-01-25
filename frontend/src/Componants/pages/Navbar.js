import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return ( 
        <>
        <ul>
           
            <li><NavLink to="/"  style={({isActive})=>{return{backgroundColor: isActive ?  'skyblue': ''}}}>Home</NavLink></li>
           
            
        </ul>
    </>
    );
    };
    export default Navbar;