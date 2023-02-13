
export default function ContactData(props)
{

    return(
        <div>
            {props.link && <a href={props.link} >
           <img src={props.src} alt={props.alt}/> 
           <b>{props.text}</b></ a>}
           {!props.link && < >
           <img src={props.src} alt={props.alt}/> 
           <b>{props.text}</b></>}
        </div>
    )
}