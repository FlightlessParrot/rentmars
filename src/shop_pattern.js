import Photo from './shop_pattern_files/photo'

export default function ShopPattern(props)
{
    
    return(
        <>
        <div className='placeholder'> </div>
        <Photo photo1={props.photos[0]} photo2={props.photos[1]} photo3={props.photos[2]}/>
        </>

    )
}