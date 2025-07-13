import React from 'react'

const BtnPages = ({children, onClick = (e)=> e.preventDefault()}) => {



  return (
<button onClick={onClick} className='btn btn-primary border-0 btn-md'>
{children
}
</button>
  )
}

export default BtnPages
