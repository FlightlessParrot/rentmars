import products from '../test/products.json' 
export default async function shopLoader({request})
{
    let url = new URL(request.url);
    let searchTerm = url.searchParams.get("search")
    let category= url.searchParams.get("category")
    const value=searchTerm+category+' '+url.searchParams
    //const pro=JSON.parse(products)
    return products;
}