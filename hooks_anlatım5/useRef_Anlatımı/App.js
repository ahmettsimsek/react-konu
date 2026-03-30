import Berkant from "./components/berkant"
import Deneme from "./components/deneme"
import { useEffect, useRef, useState } from "react";

function App() {
  
  const firstRef = useRef();
  // useState ile useRef kullanım mantığı benzerdir. Sadece useState kulanırken her bir değişiklik yapıldığında sürekli yeniden çağırılıcak yeniden render olacaktır yenilenecektir sayfamız, Bazen sayfamızı render etmek istemessek bazen tek değişiklik olduğunda komple orda çalışmasını istiyorum dersem useRef kullanabilirim.

  //Önemli bir hooks olmasına rağmen çok sık kullanılan bir hook depğil useRef.

  return (
    <> {/*react da en az 1 tane fragment lazım yani sarmalayn bir yapı olması lazım.  Bunu kullanmazsan hata alırsın. Normalde bunu html-css de kullanırken input ile placeholder=text ile girdi almasını sağlardık ve getelementbyıd ile çıktı arardık ancak react bize hook vermiş hazır şekilde.    */}
    
    <input ref={firstRef}  placeholder="ara"/>
    </>
  );

}
// useState, useEffect, useRef, useMemo başlıklarını anlatıcaz
export default App;
