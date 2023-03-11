

export default async function removeAction({request, params })
{
    const data=await request.formData()

    const login= data.get('login')
    const password = data.get('password')
    const authorization='Basic '+btoa(login+":"+password)
 
    try{
        
        const response = await fetch('http://localhost/rentmars-server/requests/remove.php?database='+params.shop+'&id='+params.id,{
            method: 'DELETE',
            credentials: 'include',
            headers: {
                "Authorization": authorization
            }
        })
        if(response.ok)
        {
           
            const log= await response.json()
           console.log(log)
            return log
        }
        else{
            throw new Error('Wystąpił błąd serwera')
        }

    }catch(e){
        console.log(e.message)
        return {message: e.message+' Nie udało się usunąć produktu.', success: false}
    }

}