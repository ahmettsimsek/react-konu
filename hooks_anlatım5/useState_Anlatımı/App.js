import Berkant from "./components/berkant"
import Deneme from "./components/deneme"
import { useState } from "react";

function App() {
  // ben bir count oluşturucam başlangıç değeri 0, setCount ise benim count içerisini güncelleyeceğim fonksiyondur. isim olarak deneme, setDeneme de diyebiliriz karışıklık olmasını engelleriz. 0 yerine başka rakam da ,string de, obje de verebiliriz. 

  // klasik değişken içerisinde ne taşıyorsak burda da taşıyabiliriz. Burda önemli oan değişken tanımlamak değil yanındaki fonksiyon ile update edebilmek. 

  const [count,setCount] = useState(0) // rakamsal örnek
  const [deneme,setDeneme] = useState({name: "ahmet"}) // array örnek
  const [renk,setRenk] = useState('blue') // string örnek
  const [status,setStatus] = useState('true') // boolen örnek

  const clickFunc = () => { // buton oluşturarak her tıklandığında count artar
    setCount (count +1)  /*fonk olduğu için parantez içinde her seferinde 1 artır dedik*/
  }

   const clickFunc2 = () => { // buton tıklandığı zaman renk değişir 
    setRenk ('red')  /*fonk olduğu için parantez içinde renk değişssin dedik*/
  }


   return (
    <div className="App"> 
    {count} {/*ekrana basar direk */}

    <br></br>
    <br></br>

    <button onClick={clickFunc}>tıkla</button>

    {/*renk değişimi içinde kullanabiliriz örneğin */}
    <div style={{color:renk}}>
      renk değişim alanı
    </div>

    <button onClick={clickFunc2}>tıkla2</button>
    </div>
  );


  // veya sayfa üzerisijdeki return silip status tanımlayıp true ise bunu return et false ise bunu da yapabiliriz. Yani birden fazla return oluşturabiliriz sayfa üzerinde 
  if(status) {
    return (
      <div>status durumu true</div>
    )
  }
  else{
    return(
      <div>
        status durumu false
        <button onClick={() => setStatus(!status)}>Tıkla</button>  {/*dışarıda fonlsiyon tanımlamadan bu şekilde içerisinde de çalıştırabilriz butonun. tıkla diyince false ise durum tersine çevirir ve true yapar. */}
      </div>
    )
  }



}
// useState, useEffect, useRef, useMemo başlıklarını anlatıcaz
export default App;
