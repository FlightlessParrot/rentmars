import { useEffect, useReducer, useRef } from "react"
import { SwitchTransition, CSSTransition } from "react-transition-group"

export default function MainImage()
{
    const initial={
        title:'Wolisz Wypożyczyć?',
        image: '/images/loga/rent_500.png'
    }
    const [intro, dispatch]=useReducer(reducer, initial)
    const ref = useRef(null)
    useEffect(
        ()=>{
            const timeout=setTimeout(dispatch,5000)
            return(()=>clearTimeout(timeout))
        },[intro]
    )
    function reducer(state, action)
    {
        if(state.title==='Wolisz Wypożyczyć?')
        {
            return(
                {
                    title: 'Czy kupić?',
                    image: '/images/loga/maszyny_rentmars_logo_500.png'
                }
            )
        }
        else{
            return(initial)
        }
    }
    return(
        <div id="main_image">
            <SwitchTransition>
                <CSSTransition
                key={intro.title}
                nodeRef={ref}
                classNames="fru"
                timeout={1000}
                >
            <div ref={ref}>
                <h1>{intro.title}</h1>
                <img src={intro.image} />
            </div>
            </CSSTransition>
            </SwitchTransition>
        </div>
    )
}