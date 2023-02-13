
export default function Foot(props)
{
    const jsxElements=props.text.map((element, i)=><p key={i}>{element}</p>)
    return(
        <div className="foot">
           
            <b>{props.title}</b> 
            <div className="line"></div>
            {jsxElements}
        </div>
    )
}