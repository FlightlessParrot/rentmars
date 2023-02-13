

export default function IconText(props)
{
return(
    <div className="icon_text">
        <img src={props.link} loading="lazy" alt='' />
        <b>{props.text}</b>
    </div>
)
}