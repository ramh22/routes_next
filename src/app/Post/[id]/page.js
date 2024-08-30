import React from 'react'

function post({ params }) {
  // console.log(params);
  
  return (
    <div>
      post:{params.id}
    </div>
  )
}

export default post
