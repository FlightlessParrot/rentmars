import { useEffect, useState } from "react";
import { useActionData, useNavigate, useOutletContext } from "react-router-dom"
import { Form } from "react-router-dom"
import Loading from '../universal/loading'
import GoodMessage from "../universal/message";
export default  function  AddProduct()
{
    const context=useOutletContext()
    const actionData=useActionData();
    const [loading, setLoading]=useState(false)
    const navigate=useNavigate()
    useEffect(
        ()=>{
            setLoading(false) 
            if(actionData?.success)
            {
                setTimeout(()=>navigate('/admin/panel/edit/images/'+actionData.shop+'/'+actionData.id),3000)
            }
        
        },[setLoading, actionData]
    )
    console.log(actionData)
   


    console.log(actionData)
    console.log(context)
    return(
        <>{loading && <Loading />}
        {actionData?.success &&  <GoodMessage text={<>POMYŚLNIE DODANO PRODUKT. <br/>Za chwilę zostaniesz przekierowany do edycji zdjęć.</>} /> }
        <Form method="post" onSubmit={()=>setLoading(true)}>
            <p style={{color: 'red'}}>{actionData?.message}</p>
            <fieldset>
            <div><label htmlFor="shop">Sklep</label>
            <input id='shop' type='radio' name='shop' value={1} defaultChecked></input></div>
            <div><label htmlFor="rent">Wypożyczalnia</label>
            <input id='rent' type='radio' name='shop' value={0}></input></div>
            </fieldset>
            <label htmlFor="name">Nazwa</label>
            <input id='name' type='text' name='name' maxLength={25} required/>  
            <label htmlFor="cena">Cena</label>
            <input type='number' step="0.01" maxLength={1000} /> 
            <label htmlFor="new">Czy jest to nowa maszyna?</label>
            <input id='new' type='checkbox' name='new' value='1'></input>
            <label htmlFor="desc">Opis</label>
            <textarea id='desc' name='description' maxLength={1000} required />
          
            <input type='text' name='login' value={context.login} style={{display: 'none'}} readOnly></input>
            <input type='text' name='password' value={context.password} style={{display: 'none'}} readOnly></input>
            <button>Zapisz produkt i dodaj zdjęcia</button>
        </Form></>
    )
}