import React from 'react'

export default props => (
    <input 
        {...props.input} 
        className='form-control' 
        placeholder={props.readOnly} 
        type={props.type} 
    />
)