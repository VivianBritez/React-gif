import React from 'react'

export const GiFGridItem = ( { url , title} ) => {
   
    return (
        <div className="card">
            <p>{ title }</p> 
            <img  src={ url } alt={ title }/>
            
        </div>
    )
}
