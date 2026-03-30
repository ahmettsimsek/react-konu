import Berkant from "./components/berkant"
import Deneme from "./components/deneme"
import { useEffect, useState } from "react";

function App() {
  
  const [status,setStatus] = useState('deneme') // boolen örnek

  // useEffect, sayfa yüklendiği anda çalışmasını istediğim fonksiyonları içine yazarım. {} sonrasında gördüğüm [] array kısmı ise bizim render etme şeklimizdir. Fonksiyon yüklendiğinde arrayimin içi bir kez çalışıcak çünkü arrayımın içi boş.  
  // ama arrayimin yani [] içerisine bir tane değişken koyarsam ve o değişkene bağlı olarak sürekli tekrar çalıştırılmasını sağlayabilirim. Bunu useEffect kavramı sağlar bana. 

  // bir şeyler tetiklendikçe çalışmasını istiyorum dersek, o tetikleneni gelip array içerisine yazarsak, ona göre sürekli değişip değişmediğini anlayabilriz. Fetch kısmında aktif olarak kulanırız. 

  // normalde status'u, setStatus ile dışarıdan kontrtrol ediyorduk değişssin diye bunu useEffect ile kullanıcaz. 

  // bazen APİ'den veri çekerken APİ'nin state durumları veya statinin içindeki değerlere bağlı olarak değişmesi gerekebilir çünkü aynı api den veri çekmek  istemeyebiliriz veya sayfa sürekli sürekli render olabilir bunun iin array [] kısmı bize yardımcı olacaktır. . 

  useEffect (() =>{
    setStatus("deneme2") // sayfa yenidenm  yüklenince bu olur stringimiz
  },[]) // ilerleyen zamanda [] array kısmına status ile atama yapıcaz


  return (
    <div >{status}</div>
  );

}
// useState, useEffect, useRef, useMemo başlıklarını anlatıcaz
export default App;
