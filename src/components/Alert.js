import React from 'react'

export default function Alert(props) {
  
  const capitalize=(word)=>{                 // The purpose of this fuction is to make in 'success' word S is capital i.e. 'Success'  
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">   {/*props.alert && isliye likha taki props.alert ye to null hai initially to usko iss condition se resolve karnge (this is happen because all JSX will be converted into Javscript calls)*/}
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
    </div>
  )
}
