import { useEffect, useRef } from 'react';
import {Form,  useLoaderData, useSubmit } from 'react-router-dom'
export default function ProductOptions(props)
{
    const check=useLoaderData();
    const submit=useSubmit();
    const formRef=useRef(null)
    const buildRef=useRef(null)
    const gardRef=useRef(null)
    const newRef = useRef(null)
    const refArray=[buildRef, gardRef, newRef]
    useEffect(()=>console.log(check),[check]
    )

    return(
        <div className="product_options">
            <h2>Czego szukasz</h2>
            <Form method='get' ref={formRef}>
                <fieldset onChange={()=>{submit(formRef.current)}}>
            <input ref={buildRef} type='radio'name='category' value='building' required ></input>
            <input ref={gardRef} type='radio'name='category' value='garden' required ></input>
            <input ref={newRef} type='radio'name='category' value='new' required ></input>
            </fieldset>
            <div className="orange_line"></div>
                    <p>Zbyt wiele produktów?</p>
                    <b>wypróbuj naszą wyszukiwarkę</b>
                    
                    <input type='search' name='search' maxLength='80'></input> <button><img src='' alt='ikona lupy'/></button>
                    </Form>
                    </div>
    )
}