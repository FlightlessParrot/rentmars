import{ Link} from 'react-router-dom'
export default function Products(props)
{
const jsxProducts = props.products.map(
    (element, index)=>{
        return(<div className="product" key={element.id}>
            <img src={element.photo} alt='zdjęcie produktu' />
            <div className="product_info_div" />
            <b>{element.name}</b>
           {props.shop===true && <p>cena: {element.cena}</p>}

       
        <div className="details_div"><Link to={'./'+ element.id}>Zobacz szczegóły</Link></div>
           </div>
        )
    }
)
return(
    <>
    {jsxProducts}</>
)
}