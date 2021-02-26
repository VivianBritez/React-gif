import React, { useState } from 'react';
import PropTypes from 'prop-types'


export const AddCategory = ({ setcategories} ) => {
    const [inputValue, setinputValue] = useState('');

    const handledInputChangue = (e) =>{
        setinputValue(e.target.value);
    }
    const handledSubmit = (e)=>{
        e.preventDefault();
        if( inputValue.trim().length > 2){
            setcategories( catg => [ inputValue , ...catg]);
            setinputValue('');
        }
       
    }
    return (
    <div className="container-input">
        
       <form  onSubmit= { handledSubmit}>
           
        
            <input
                type = "text"
                value= { inputValue}
                onChange= { handledInputChangue}
                > 
                </input>
            
        </form> 
    </div>
    )
}

AddCategory.propTypes = {
    setcategories: PropTypes.func.isRequired
}
