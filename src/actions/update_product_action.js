
export default async function updateProduct({params, request})
{
    const data=await request.formData()
    const login=data.get('login')
    data.delete('login')
    const password=data.get('password')
    data.delete('password')
    const authorization='Basic '+btoa(login+":"+password)
    data.append('id',params.id)
    const shop= params.shop === 'shop' ? true:false;
    data.append('shop',shop)
    try{
        const response = await fetch('/server/requests/changeProduct.php',{
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
            if(log.success)return({...log, shop});
            else throw new Error({'success': false,message: 'Wystąpił błąd serwera. Nie udało się dodać produktu. '+log?.message})
        }
        else{
            throw new Error('Wystąpił błąd serwera. nie udało się dodać produktu.')
        }

    }catch(e){
        console.log(e.message)
        return {message: e.message, success: false}
    }

}