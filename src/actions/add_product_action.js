
export default async function addProductAction({request})
{
    const data=await request.formData()
    const login=data.get('login')
    data.delete('login')
    const password=data.get('password')
    data.delete('password')
    const authorization='Basic '+btoa(login+":"+password)
    const shop=data.get('shop')
    try{
        const response = await fetch('/server/requests/addproduct.php',{
            method: 'POST',
            credentials: 'include',
            headers: {
                "Authorization": authorization
            },
            body: data
        })
        if(response.ok)
        {
            const log= await response.json()
            console.log(log)
            if(log.success)return({...log, shop: shop});
            else throw new Error('Wystąpił błąd serwera. Nie udało się dodać produktu. '+log?.message)
        }
        else{
            throw new Error('Wystąpił błąd serwera. nie udało się dodać produktu.')
        }

    }catch(e){
        console.log(e.message)
        return {message: e.message, success: false}
    }

}