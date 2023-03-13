
export default async function updateProduct({ request})
{
    const data=await request.formData()
    const login=data.get('login')
    data.delete('login')
    const password=data.get('password')
    data.delete('password')
    const authorization='Basic '+btoa(login+":"+password)
  
    try{
        const response = await fetch('/server/requests/changePassword.php',{
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
            if(log.success)return({...log});
            else throw new Error({'success': false,message: 'Wystąpił błąd serwera. Nie udało się zmienić hasła. '+log?.message})
        }
        else{
            throw new Error('Wystąpił błąd serwera. Nie udało się zmienić hasła.')
        }

    }catch(e){
        console.log(e.message)
        return {message: e.message, success: false}
    }

}