import { useState, useEffect } from "react"
import { useActionData, useOutletContext, useSubmit } from "react-router-dom"


export default function ChangePassword()
{
    
    const [message, setMessage]=useState('')
    const [newPass, setNewPass]=useState('')
    const [conPass, setConPass]=useState('')
    const [style, setStyle]=useState({boxShadow: "4px 4px 5px green"})
    const actionData=useActionData();
    const context=useOutletContext();
    const submit=useSubmit();
    useEffect(
    ()=>{
        const styles= !(newPass===conPass && newPass.length>=5) ? {boxShadow: "4px 4px 5px red"}: {boxShadow: "4px 4px 5px green"}
        const text1= newPass.length<5 ? 'Hasło jest za krótkie. ': ''
        const text2= !(newPass===conPass) ? 'Hasła są różne. ': ''
        setMessage(text1+text2)
        console.log(styles)
        setStyle(styles)
        
    },[newPass, conPass]
    
    )

    console.log(style)
    function submiter(e)
    {
        e.preventDefault();

        if(newPass.length>=5 && newPass===conPass)submit(e.currentTarget,{method: 'put'});
    }
    return(<form id='change-form'>
        <b>{actionData?.message && actionData?.message} <br />
        {message}</b>
        <div>
            <label htmlFor="newPass">Podaj nowe hasło: </label>
            <input style={style} name='newPass' id='newPass' type='password' minLength={5} value={newPass} onChange={(e)=>setNewPass(e.currentTarget.value)} required />
        </div>
        <div>
            <label htmlFor="conPass">Powtórz nowe hasło: </label>
            <input style={style} name='conPass' id='conPass' type='password' value={conPass} minLength={5} onChange={(e)=>setConPass(e.currentTarget.value)} required />
        </div>
        
        <input type='text' name='login' value={context.login} style={{display: 'none'}} readOnly></input>
            <input type='text' name='password' value={context.password} style={{display: 'none'}} readOnly></input>
            <button onClick={submiter}> Zmień hasło</button>
    </form>)
}