import Berkant from "./components/berkant"
import Deneme from "./components/deneme"
import { useEffect, useRef, useState, useMemo } from "react";

function App() {

  const[count, setCount] = useState(0)
  
  // çok büyük bir döngü oluşturuyorum, bu benim uygulamamı yavaşlatıcak.
  const func4 = (num) => {
    console.log("hesaplanıyor....")
    for(let i= 0;i< 10000000000;i++){
      num += 1
    }
    return num
  } // bunun çalışması süre alacak ancak memo ile bunu sadece başta render edicez değişiklik yapınca baştaki gibi uzun beklemiycez. 


  const memo = useMemo(()=> func4(count),[count])
//USEmEMO DIŞARIDAN BİR PARAMETRE ALICAK, hangi parametreye göre değişmesini istiyorum count'a göre. 


  // UseMmeo, örneğin sayfamıza bir veri çektik ve bu veri çok çok büyük bir veri diyelim, bir değer değiştirdiğimde o veriyi de baştan değiştirmem gerekecektir. Böylü büyük veriyi baştan çekmek uygulamamızı yavaşlatacaktır. 

  // useMmeo, sayfaya çekilen veriyi 1 kez çeker onu hafızada tutar ve siz sayfayı render etmiş bile olsak o veriyi 1 kez çekip her dakika kullanabiliriz. 

  return (
    <>
    {memo}
    </>
  );

}
// useState, useEffect, useRef, useMemo başlıklarını anlatıcaz
export default App;
