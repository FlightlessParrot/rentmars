
export default async function shopLoader({request})
{
    let url = new URL(await request.url);
    let searchTerm = url.searchParams.get("search")
    let category= url.searchParams.get("category")
     const value=searchTerm+category+' '+url.searchParams
    //const pro=JSON.parse(products)
    console.log('http://localhost/rentmars-server/requests/getProducts.php'+'?'+url.searchParams)
    try{
        const response = await fetch('http://localhost/rentmars-server/requests/getProducts.php'+'?'+url.searchParams, {method: 'POST',
    credentials: 'include'})
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
        return e.message
    }
}