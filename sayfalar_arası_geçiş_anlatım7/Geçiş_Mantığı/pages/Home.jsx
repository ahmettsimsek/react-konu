import React from 'react'

const Home = () => {

    // fonksiyonm her zaman  return ustunde yazılır
    const yonlendirFunc = () => {  
        window.location = "/detail" /* detail diye bunu app sayfamızda tanımlamıştık. Butona basınca locate et yani yönlendir dedik.  */
    }

  return (
    <div>
        <button onClick={yonlendirFunc}>yönlendir</button>
    </div>
  )
}

export default Home
