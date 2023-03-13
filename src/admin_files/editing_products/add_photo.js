import { Outlet, useLoaderData, useNavigate, useOutletContext} from "react-router-dom"
import {   useState } from "react";
import DisplayPhotos from "./display_photos";
import Loading from "../../universal/loading";
export default function AddPhoto()
{
    const loaderData=useLoaderData();
    const context=useOutletContext();
  const navigate=useNavigate();

   const[loading, setLoading]=useState(false)
    const [file, setFile]=useState();
    const [main, setMain]=useState(false)
    const [response, setResponse]=useState('')

    

 

    function submitHandler(e)
    {
        e.preventDefault()
        const formData=new FormData();
       formData.append('login',context.login)
       formData.append('password',context.password)
       if(main) formData.append('main', 1)
        if(file) formData.append('photo', file)
        console.log(formData.get('photo'))
        fetchMe(formData, loaderData, setResponse, setLoading, navigate)
       
    }
    return( 
        <div>
            <Outlet context={context} />
            {loading && <Loading />}
           
            <b className="important-message">{response.message}</b>
            <h1>Tutaj możesz dodać lub edytować zdjęcia wybranego produktu</h1>
            <form onSubmit={submitHandler} className='addPhotoForm'>
            <input type='text' name='login' value={context.login} readOnly style={{display:'none'}}/>
        <input type='password' name='password' value={context.login} readOnly style={{display:'none'}}/>
               <div><label htmlFor="file">Wybierz nowe zdjęcie</label>
            <input type='file'id='file'  name='image' onChange={(e)=>setFile(e.currentTarget.files[0])}/></div> 
            <div> 
            <label htmlFor='addPhoto'>Zdjęcie jest ikoną produktu?</label>
                <input id='addPhoto' type='checkbox' name='main' value='1' checked={main} onChange={(e)=>setMain(e.currentTarget.checked)}/> 
            </div>
            <button onClick={()=>setLoading(true)}>Dodaj zdjęcie</button>
            </form>
            <h2>Zdjęcia produktu</h2>
            <DisplayPhotos photos={loaderData?.images}/>
        </div>
    )
}


async function fetchMe(formData, loaderData, setResponse,setLoading, navigate)
{
    
    const data=formData

    const login=data.get('login')
    data.delete('login')
    const password=data.get('password')
    data.delete('password')
    const authorization='Basic '+btoa(login+":"+password)
    data.append('productId',loaderData.productId)
    data.append('shop',loaderData.shop)
    
    try{
        const response = await fetch('/server/requests/addImage.php',{
            method:  'POST',
            credentials: 'include',
            headers: {
                "Authorization": authorization,
               //'Content-Type': 'multipart/form-data; boundary=boundary'
            },
            body: data
        })
        if(response.ok)
        {
            const log= await response.json()
            console.log(log)
            if(log.success)
            {setResponse({...log, message: 'Udało się dodać produkt'});
            setLoading(false)
            navigate('./')
            
            }
            else throw new Error('Wystąpił błąd serwera. Nie udało się dodać produktu. '+log?.message)
        }
        else{

            throw new Error('Wystąpił błąd serwera. nie udało się dodać produktu.')
        }

    }catch(e){
        console.log(e.message)
        setLoading(false)
        setResponse({message: e.message, success: false})
    }
}