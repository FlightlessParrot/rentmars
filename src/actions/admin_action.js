
export default async function adminAction({request})
{
    
    const data=await request.formData()
    console.log(data)
    const login= data.get('login')
    const password = data.get('password')
    const authorization='Basic '+btoa(login+":"+password)
    try{
        
        const response = await fetch('http://localhost/rentmars-server/authenticate.php',{
            method: 'GET',
            credentials: 'include',
            headers: {
                "Authorization": authorization
            }
        })
        if(response.ok)
        {
            console.log(response)
            const log= await response.json()
            return (log ? {message:'logowanie udane', login: login, password: password, value: true} : {message: 'Wprowadzone dane są niepoprawne', value: false})
        }
        else{
            throw new Error('Wystąpił błąd serwera')
        }

    }catch(e){
        console.log(e.message)
        return {message: 'Wystąpił błąd', value: false}
    }

}