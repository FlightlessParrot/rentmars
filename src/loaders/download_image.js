
export default async function downloadImage({params})
{
    console.log(params.id)
    try{
        const response = await fetch('http://localhost/rentmars-server/requests/getimage.php?id='+params.id+'&shop='+params.shop,{
            method: 'GET',
            credentials: 'include',
          
        })
        if(response.ok)
        {
            const log= await response.text()
       
           console.log(log)
           return log;
        }
        else{
            throw new Error('Wystąpił błąd serwera')
        }

    }catch(e){
        console.log(e.message)
        return {message: e.message}
    }
}