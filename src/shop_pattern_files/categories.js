
export default function Category(props)
{
const jsxElements=props.elements.map((element,index)=>{

    return(
        <div className="category">
            <img src={element.photo} />
            <div>
                <img src={eelement.icon alt=''} />
                <p>{element.text}</p></div>
        </div>
    )
}


)

}