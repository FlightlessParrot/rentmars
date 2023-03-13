
export default async function addEditPhoto({params, request })
{
    console.log(params.id)
    let data=await request.formData()
    
    const login=data.get('login')
    data.delete('login')
    const password=data.get('password')
    data.delete('password')
    const authorization='Basic '+btoa(login+":"+password)
    const id=data.get('id')
    console.log(id)
    data.append('productId',params.id)
    data.append('shop',params.shop)
    
 
    try{
        const response = await fetch('/server/requests/setMainImage.php',{
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
            if(log.success)return(log);
            else throw new Error('Wystąpił błąd serwera.'+log?.message)
        }
        else{
            throw new Error('Wystąpił połączenia. ')
        }

    }catch(e){
        console.log(e.message)
        return {message: e.message, success: false}
    }

}