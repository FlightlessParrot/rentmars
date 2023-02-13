
export default function NonSymetric(props)
{
    return(
        <div className="moved_div" style={{position: 'relative', top: '-100px'}}>
         <img loading="lazy" src="/images/images/non-symetric.png" style={{ width: '100%', height: '100px'}} alt=''/>
            {props.children}
         <img src="/images/images/non-symetric.png" style={{transform: 'rotate(180deg)', width: '100%', height: '100px'}} alt=''/>
        </div>
    )
}