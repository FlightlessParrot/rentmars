
export default function GoodMessage(props)
{
    return(
        <div className="darkness" >
            <div>
                <p style={{color: 'green'}}>{props.text}</p>
            </div>
        </div>
    )
}