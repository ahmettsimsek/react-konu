import Berkant from "./components/berkant"
import Deneme from "./components/deneme"

function App() {

  const clickFunc = () => {
      console.log("tıkladınızzzzzzzz")
  }

  return (
    <div className="App"> 

      <button onClick={clickFunc}>tıkla</button>

    </div>
  );
}
// click özelliği için, onclick = {x} ile sağlarız. Yanı tıklanaınca x fonksiyonunu çalıştır bana derim.  

// js'sel kodlar yani onclick üzerinde tanımlayacağım kodları ben return üzerinde tanımlamam gerek aslında jsx kulanıyorum demek yanlış olmaz. 
export default App;
