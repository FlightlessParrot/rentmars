
import{ Link} from 'react-router-dom'
import Pager from '../universal/pager'
export default function Products(props)
{
   


  

const jsxProducts = props.products.map(
    (element, index)=>{
        
        const photo=props.images.filter(e=>e.productId===element.id && e.main==='1')
        const src= photo[0]?.path ? '/server'+photo[0].path : ''
        return(<div className="product" key={element.id}>
            <img src={src} alt='zdjęcie produktu' />
            <div className="product_info_div" />
            <b>{element.name}</b>
           
           {(props.shop && element?.price!==0) && <p>cena: {element.price} zł</p>}
           

       
        <div className="details_div"><Link to={'./'+ element.id}>Zobacz szczegóły</Link></div>
           </div>
        )
    }
)





return(
    <Pager jsxProducts={jsxProducts} />
)
}