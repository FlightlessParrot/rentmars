
export default async function shopLoader({request})
{
    let url = new URL(await request.url);
    // let searchTerm = url.searchParams.get("search")
    let category= url.searchParams.get("category")
    //  const value=searchTerm+category+' '+url.searchParams
    //const pro=JSON.parse(products)
    
    console.log('?'+url.searchParams)
    
    try{
        const response = await fetch('http://localhost/rentmars-server/requests/getProducts.php'+'?'+url.searchParams, {method: 'GET',
    credentials: 'include'})
    if(response.ok)
        {
          
            const log= await response.json()  
          console.log({...log, category: category})
            return {...log, category: category};
        }
        else{
            throw new Error('Wystąpił błąd serwera')
        }

    }catch(e){
        console.log(e.message)
        return {success: false,message: e.message}
    }
}