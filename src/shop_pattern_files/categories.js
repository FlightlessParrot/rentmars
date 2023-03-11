import { useState } from "react";

export default function Categories(props)
{
   const [background, setBackground]= useState(0)
const jsxElements=props.elements.map((element,index)=>{

    return(
        <div className="category" style={(background===index)?{backgroundColor:'#FAFAFA', color: '#FAFAFA'}:{}}  key={index} 
        onClick={(e)=>{ 
            setBackground(index)
            props.setCategory(index===0? true : false)
        }}>
            <img src={element.photo} alt=''/>
            <div>
                <img src={element.icon} alt='' />
                <p>{element.text}</p></div>
        </div>
    )
}


)
return(<div className="image_options_div">
    {jsxElements}
</div>)
}