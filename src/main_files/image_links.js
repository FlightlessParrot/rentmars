import ImageLink from "./image_link"
export default function ImageLinks()
{
    return(
        <div id='image_links'>
            <ImageLink text='KUP' link='/images/images/cart_380.png' logo='/images/loga/maszyny_rentmars_logo_500.png' shop={true}/>
            <div className="orange_line"></div>
            <ImageLink text='WYPOŻYCZ' link='/images/images/hour-glass_307.png' logo='/images/loga/rent_500.png' shop={false}/>
        </div>
    )
}