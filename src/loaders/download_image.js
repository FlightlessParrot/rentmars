
export default async function downloadImage({params})
{
    const shop = params.shop
    try{
        const response = await fetch('/server/requests/getImage.php?id='+params.id+'&shop='+shop,{
            method: 'GET',
            credentials: 'include',
          
        })
        if(response.ok)
        {
            const log= await response.json()
       
           console.log(log)
           return {...log, productId: params.id, shop: params.shop};
        }
        else{
            throw new Error('Wystąpił błąd serwera')
        }

    }catch(e){
        console.log(e.message)
        return {message: e.message}
    }
}