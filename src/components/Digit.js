import React from 'react'
import './Digit.css'

const digit = (props) => {
return(
    <button className='button' onClick={(event) => props.click(event, props.sign)}>{props.sign}</button>    )
}



export default digit;