import React from 'react'

const Detail = () => {

    const yonlendirFunc = () => {
        window.location = "/" // home sf yönlendirir
    }

  return (
    <div>
        <button onClick={yonlendirFunc}>yönlendir</button>
    </div>
  )
}

export default Detail
