import { useEffect, useRef, useState } from "react";
import { useActionData, useLoaderData, useNavigate, useOutletContext } from "react-router-dom"
import { Form } from "react-router-dom"
import Loading from '../universal/loading'
import GoodMessage from "../universal/message";
export default  function  AddProduct(props)
{
    const context=useOutletContext()
    const actionData=useActionData();
    const loaderData=useLoaderData();
    const [loading, setLoading]=useState(false)
    const [shop, setShop]=useState(true)
    const [category, setCategory]=useState(true)
    const [name, setName]=useState('')
    const [price, setPrice]=useState(0)
    const [newValue, setNewValue]=useState(false)
    const [description, setDescription]=useState('')
    const navigate=useNavigate()
    
    useEffect(
        ()=>{
            setLoading(false) 
            if(actionData?.success)
            {const link='/admin/panel/edit-product/images/'+actionData.shop+'/'+actionData.id;
                setTimeout(()=>navigate(link),3000)
            }
        
        },[setLoading, actionData]
    )
        useEffect(
            ()=>{
                console.log((props.edit && loaderData.success ))
                if(props.edit && loaderData.success)
                {
                    setShop(loaderData.shop)
                    setCategory(loaderData.product[0].building)
                    loaderData.product[0].price && setPrice(loaderData.product[0].price)
                    setNewValue(loaderData.product[0].new)
                    setDescription(loaderData.product[0].description)
                    setName(loaderData.product[0].name)
                }
            }
        ,[loaderData])
    

        
    
  
  
    return(
        <>{loading && <Loading />}
        {actionData?.success &&  <GoodMessage text={<>POMYŚLNIE {!props.edit ? 'DODANO' : 'EDYTOWANO'} PRODUKT. <br/>Za chwilę zostaniesz przekierowany do edycji zdjęć.</>} /> }
        <Form method="post" onSubmit={()=>setLoading(true)} className='add-product'>
            <p style={{color: 'red'}}>{actionData?.message}</p>
           {!props.edit && ( <fieldset>
            <div><label htmlFor="shop">Sklep</label>
            <input id='shop' type='radio' name='shop' value={true}  checked={shop} onChange={()=>setShop(true)}></input></div>
            <div><label htmlFor="rent">Wypożyczalnia</label>
            <input id='rent' type='radio' name='shop' value={false} checked={!shop} onChange={()=>setShop(false)}></input></div>
            </fieldset>)}
            <fieldset>
            <div><label htmlFor="building">Maszyny budowlane</label>
            <input id='building' type='radio' name='category' value={true} checked={category} onChange={()=>setCategory(true)}></input></div>
            <div><label htmlFor="garden">Maszyny ogrodnicze</label>
            <input id='garden' type='radio' name='category' value={false} checked={!category}  onChange={()=>setCategory(false)}></input></div>
            </fieldset>
            <label htmlFor="name">Nazwa</label>
            <input id='name' type='text' name='name' maxLength={25} value={name} onChange={(e)=>setName(e.currentTarget.value)} required/>  
            {shop && <><label htmlFor="cena">Cena</label>
            <input type='number' name="price" step="0.01" maxLength={1000} value={price} onChange={(e)=>setPrice(e.currentTarget.value)} /> </>}
            <div><label htmlFor="new">Czy jest to nowa maszyna?</label>
            <input id='new' type='checkbox' name='new' value='1' checked={newValue} onChange={()=>setNewValue((s)=>!s)}></input></div>
            <label htmlFor="desc">Opis</label>
            <textarea id='desc' name='description' value={description} onChange={(e)=>(setDescription(e.currentTarget.value))} maxLength={1000} required />
          
            <input type='text' name='login' value={context.login} style={{display: 'none'}} readOnly></input>
            <input type='text' name='password' value={context.password} style={{display: 'none'}} readOnly></input>
            <button>Zapisz {props.edit ? 'zmiany' : 'produkt'} i dodaj zdjęcia</button>
        </Form></>
    )
}