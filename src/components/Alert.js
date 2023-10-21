import React from 'react'

export default function Alert(props) {
  const capital=(word)=>{
    const letter = word.toLowerCase();
    return letter.charAt(0).toUpperCase() + letter.slice(1)

  }
  return (
    
        props.alert && < div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{capital(props.alert.type)}</strong>: {props.alert.msg}
 
</div>
      
    
  )
}
