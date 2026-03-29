import Berkant from "./components/berkant"
import Deneme from "./components/deneme"

function App() {

  return (
    <div className="App"> 
      {/*COMPONENT MANTIĞI */}
      <Berkant/>
      <Deneme/>

    </div>
  );
}
//component, bizim sayfalarda kullanacağımız yapıları parçalaya parçalaya klasörler içerisine dağıtmamıza ve gerektiğinde çekmemize yardımcı olan yapılardır. Örneğin 3 ttane div olsun hepsinin aynı app.js sayfada render edilmesi mantıklı mı değil tabiki burada component mantığı ortaya çıkar. src altında klasör oluşturucaz bu sebeple.  

// index.js bizi sadece app içerisindekileri render ediyor aşağıdaki gibi yani sadece app üzerindeki şeyleri gösteriyor demek yani eklediğimiz componentleri göremeyiz demektir eklemez isek 

// gördüğümüz gibi component içerisinde birsürü işlem yapsak da burada 1 satır halinde yazdık ve app.js içerisi hep temiz şekilde kalacaktır. 
export default App;
