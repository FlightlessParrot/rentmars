import { useState } from "react"
import { CSSTransition } from "react-transition-group"


export default function ImageLink(props)
{
    const [rotate, setRotate]=useState(false)

    return(
        <div onMouseEnter={()=>setRotate(true)} onMouseLeave={()=>setRotate(false)}>
            <CSSTransition in={rotate} timeout={1500} classNames='rotate'>
        <div className="image_link">
            <b>{props.text}</b>
            <div className="link_image"><img src={props.link} alt=''/>
            <div><img loading="lazy" src={props.logo} alt='logo'/></div>
</div>
        </div></CSSTransition></div>
    )
}