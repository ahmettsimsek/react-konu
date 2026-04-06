import React from 'react'
import arr from '../data'

const Home = () => {


    // 2. olarak----- burda da fonksiyonumuz dışarıdan değer almasını id ile karşılamak istiyorum 
    const yonlendirFunc = (id) => {  
        window.location = `/detail/${id}` /*  3. olarak-----karşıladıktan sonra gelen değerin fonksiyonel olarak ekrana yazması için ${id} kullanacağız */
    }

  return (
    <div>
        {
            arr.map((arr,i) => (
                <div 
                onClick={() => yonlendirFunc(arr.id)} // 1. olarak-----dışarıdan değer almasını istiyorum fonksiyonun bunu her bir datanın id'i vardı bende bunların buraya gelmesini isitorum oda arr.id ile sağlarım
                style={{margin: "10px", cursor: "pointer", border:"1px solid black", padding:"5px"}}>{arr.name}
                </div>
            ))
        }
    </div>
  )
}

export default Home

// Şimdi home sayfamızda 3 tane seçeneğimiz olsun ve hangi birine basarsam detaylar sayfası açılsın ancak açılan sayfada tıkladığımız kutucuğun ismi yazsın. 

// src altında "data.js" isimli dosya açacağız. Home.jsx dosyasına tanımladığımız arrayımızı buraya taşıyoruz. 

// şimdi her bir <div>'e id numarasına göre detaylar sayfasında yönlendirme yapmak istiyorum.

// bunun için App.js dosyasına gidiyoruz ve detail sayfasına gitmesin sadece detaylar sayfasına id numarasına bağlı olarak gitsin. "detail/:id " yazmalıyız.

// sonrasında dışardan fonksiyonumuza değer alımı sağlayacağız, ve son olarak id göre detay sayfasına yönlendirme sağlayacağız ${id} ile. 

// Şimdi de Detail sayfasına giderek id'e göre tıkladığımız şeyi de ekrana yazdırır, 
