import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { CSSTransition } from "react-transition-group"
import {Loader} from "../main"

export default function ImageLink(props)
{
    
    const [rotate, setRotate]=useState(false)
    const navigate=useNavigate();

    function redirect(setLoading)
    {
        
            setLoading(true); 
        
      
        if(props.shop)
        {
            navigate('/shop')
        }
        else{
            navigate('/rent')
        }

    }


    return(
    <Loader.Consumer>
     {(setLoading)=>  {
        
     return( <div onMouseEnter={()=>setRotate(true)} onMouseLeave={()=>setRotate(false)} onClick={()=>redirect(setLoading)}>
            <CSSTransition in={rotate} timeout={1500} classNames='rotate'>
        <div className="image_link">
            <b>{props.text}</b>
            <div className="link_image" ><img src={props.link} alt=''/>
            <div><img loading="lazy" src={props.logo} alt='logo'/></div>
</div>
        </div></CSSTransition></div>)}}
        
        </Loader.Consumer>
    )
}