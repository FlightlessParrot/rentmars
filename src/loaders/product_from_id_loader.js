
export default async function productFromIdLoader({params})
{
   const shop=params.shop==='shop'? true:false;
   const id=params.id
    const link = '/server/requests/getProductFromId.php?shop='+shop+'&id='+id
    try{
        const response = await fetch(link, {method: 'GET',
    credentials: 'include'})
    if(response.ok)
        {
          
            const log= await response.json()  
          console.log({...log, shop, id})
            return {...log, shop: params.shop, id};
        }
        else{
            throw new Error('Wystąpił błąd serwera')
        }

    }catch(e){
        console.log(e.message)
        return {success: false, message: e.message}
    }

}