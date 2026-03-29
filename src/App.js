import Berkant from "./components/berkant"
import Deneme from "./components/deneme"

function App() {

  const atama = "props mantığı"
  return (
    <div className="App"> 
      {/*COMPONENT MANTIĞI */}
      <Berkant/>
      <Deneme props={atama}/>

    </div>
  );
}
// Ben component oluşturdum, içerisine yazılar da oluşturdum, ben app.js üzerinden bir bilgiye componentlerimin sayfasına gönderebilir miyim veya bu sayfaların iiçerisinde karşılayıp yazdırabilir miyim dersem burada karşıma props kavramı cıkacaktır.  

// APP.JS sayfam üzerinden, componentin içine bir şey göndermek istiyorsam istediğim isimle x={} şeklinde parantez içerisine eklerim. 

// ben bu x'i component sayfasına gönderdim ancak onun haberi var mı dersek, o component sayfasına gidiyoruz, burada fonksiyon içerisindeki parantez içerisine süslü parantez ile  yazarız tanımladığımız ismi çünkü orada gelir olduğu belli olsun bu. 
export default App;
