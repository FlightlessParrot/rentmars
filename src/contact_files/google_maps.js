import { GoogleMap,useLoadScript, Marker } from "@react-google-maps/api";
import {apiKey} from "../confidential/api_key";
import { useMemo } from "react";

import React from 'react'
//import mustang from '../../images/ikonki/logo_pin100.png'


export default function GoogleMaps()
{

  const {isLoaded} = useLoadScript(apiKey)


  if(!isLoaded) return <div className="mapParent"><div className='map'>Loading...</div></div>
    
         return(
            <div className="map_parent"><div className='map'><Map /></div></div>
         )


}
function Map()
{
   const center= useMemo(()=>({lat:52.58070251762099, lng: 17.01411156863362}),[])
   
    return(<GoogleMap zoom={18} center={center} mapContainerClassName='map'>
       <Marker position={center} icon={'/images/images/marker.png'}></Marker>
        </GoogleMap>)
}

