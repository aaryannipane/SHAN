import { useSelector } from "react-redux";
import { SelectCurrentToken,SelectCurrentUser } from "./authSlice";
import {Link } from "react-router-dom";


const welcome =()=>{
    const user=useSelector(SelectCurrentToken) 
    const token =useSelector(SelectCurrentToken)

    const welcome =user?`Welcome $(user)!` :'welcome!'
    const tokenAbbr=`${token.slice(0,9)}...`

    const content=(
        <section className="welcome">
        <h1>{welcome}</h1>
        <p>Token:{tokenAbbr}</p>
        <p><Link to="/userlist">Go to the users List</Link></p>
        </section>
    )
return content 
}

export default welcome