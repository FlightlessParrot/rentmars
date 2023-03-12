import{ Link } from 'react-router-dom'
import Pager from '../../universal/pager'
export default function Products(props)
{
    console.log(props.shop)
    const jsxProducts = props.products.map(
        (element, index)=>{
    
            const photo=props.images.filter(e=>e.productId===element.id && e.main===1)
            return(<div className="product" key={element.id}>
                <img src={'/server'+photo[0]?.path} alt='zdjęcie produktu' />
                <div className="product_info_div" />
                <b>{element.name}</b>
                {(props.shop==='shop' && element?.price!==0) && <p>cena: {element.price} zł</p>}
    

       
        <div className="details_div"><Link to={'/admin/panel/edit-product/desc/'+props.shop+'/'+ element.id}>Edytuj produkt</Link></div>
        <div className="details_div" style={{background: 'red'}}><Link to={'./remove/'+props.shop+'/'+element.id+'/confirm'}>Usuń Produkt</Link></div>
           </div>
        )
    }
)
return(
    <>
    <Pager jsxProducts={jsxProducts} />
    </>
)
}