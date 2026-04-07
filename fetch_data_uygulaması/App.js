import axios from "axios";
import { useEffect, useState } from "react";
import { DiVim } from "react-icons/di";


function App() {

const [country, setCountry] = useState([])

useEffect(() => { //sayfa yüklendiğinde bir fonk çağırıcam getCountry adında
  const getCountry = async() => { // daha sonra ben bu fonk sayfa yüklendiğinde çağırmak istiyorum. ben bundan anlık gelmesini bekliyorum çünkü js de APİ isteklerinin ne zaman sonlanacağını bilmiyorum. Dolayısıyla bu veri bana 5 sn de gelebilir 10 saniyede de gelebilir. js oto diğer tarafa geçer ancak 5 saniye beklemeden geçti diyelim ne olur, verileri çekemeyiz undefined döndürürüz. bunu döndürmemek için asekron(async) await fonksiyonları kullanırız. Öncelikle axios ile çekeceğiz yoksa kütphaneye ekliycez(npm i axios ) sonrasında data'A istekte bulunuruz
    const data = await axios.get('https://restcountries.com/v3.1/all')
    setCountry(data) // setCountry ile update edicem, ne atıcam içine çektiğim dataları
  }
  getCountry()
}, [])


  return (
    <>
      {
        country?.data?.map((dt,i) => (
          <div key={i}>{dt.name.common}</div> // verileri ekrana yazar 
        ))
      }
    </>
  );

}

export default App;

// Normalde ayrı sayfalarda yapılmalı ancak biz tek sayfada kafa karıştırmasın diye yapacağız. 

// APİ üzerinden çalışıcaz. Goggle da rest countries kısmına gitmemiz gerekiyor. all countries api'sini almamız gerekmektedir.   

// buton, click vb bir şey yapmıycam ben sadece sayfa yüklendiği anda bütün verilerimi fetch etmek istiyorum. useEffect hooks'u ile yapıcam.