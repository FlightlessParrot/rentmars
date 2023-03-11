import { useOutletContext, useSubmit } from "react-router-dom"
import { useRef } from "react";
import { Link, Form } from "react-router-dom";
export default function DisplayPhotos(props)
{
    const context=useOutletContext();
    const submit=useSubmit();
    const formRef=useRef(null)
    const jsxElements=props.photos.map(
        (element,index )=>{
        return(
            <div key={element.id} className='product'> 
                <img src={element.path} alt='zdjęcie produktu' loading='lazy'/> 
                <div> <label htmlFor={'photo'+index}>Zdjęcie jest ikoną produktu?</label>
                <input id={'photo'+index} type='radio' name='id' value={element.id} checked={element.main} onChange={()=>submit(formRef.current,{method: 'put'}) }/> 
                </div>
                <div className="details_div">
                    
                <Link to={'./remove/images/'+element.id+'/confirm'} style={{backgroundColor: 'red'}}>Usuń zdjęcie</Link></div>
            </div>
        )
        })
        return(
            <Form method='put' ref={formRef} className='products'>
                <input type='text' name='login' value={context.login} readOnly style={{display:'none'}}/>
        <input type='password' name='password' value={context.login} readOnly style={{display:'none'}}/>
                {jsxElements}

            </Form>
        )
}