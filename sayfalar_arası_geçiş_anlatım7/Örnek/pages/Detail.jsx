import React, { useEffect, useState } from 'react'
import { data, useParams } from 'react-router-dom'
import arr from '../data'

const Detail = () => {
    const [data, setData] = useState([])
    const {id} = useParams() // useParams hooksumuzu kullanıcaz, APP.js de id olarak kullandığımız için burda da id diye çağırıyoruz. Bu hooks eğer yukarıdan bir isim gönderirsen bunları karşılamamızı sağlar.


    // sayfa yüklendiğinde dışarıdan gelen arr arayimizden bir filter yapmasını istiyeceğim ve arr ekrana bastıracaktır.
    useEffect(() =>{
        setData(arr)
    },[id])

    console.log("id",id)

    const yonlendirFunc = () => {
        window.location = "/" // home sf yönlendirir
    }

  return (
    <>
        <button onClick={yonlendirFunc}>yönlendir</button>

        {
            data.filter(dt => dt.id == id).map((dat,i) => (
                <div key = {i}>{dat.name}</div> // artık seçtiğimiz şey geçtiğimiz sayfada görünmüş olacaktır isim olarak
            ))
        }
    </>
  )
}

export default Detail
