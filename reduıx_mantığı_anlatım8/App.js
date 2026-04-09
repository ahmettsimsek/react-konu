import axios from "axios";
import { useEffect,useState } from "react";
import {useDispatch,useSelector}  from "react-redux";


function App() {
  const dispatch = useDispatch()
 
  // Store içindeki "change" reducer'ından "init" değerini çekiyoruz
  // state.change dememizin sebebi store'da 'change' ismini vermemiz
  const { init } = useSelector(state => state.change);

  const getData = () => {
    dispatch({type:'CHANGE', payload: "deneme"})
    // değeri değiştirmek istersem dispatch ile 2 değer göndermemiz gereklidir. type değerine CHANGE yazdık çünkü changeReducer.js ile eşleşmesi gerekli. payload değeri olarak deneme gönderdim, buda changeReducer.js sayfasına gider eşleşme için. Eşleşme olursa payloadı init yerine koy deriz artık. 
    // sonolarak, useSelectorler ile ekrana yazdır init değerini deriz. Buşekilde butona basınca metin değerimiz değişir.
  }
  return (
    <>
      {init}
      <button onClick={getData}>verileri al</button>
    </>
  );

}

export default App;

// ilk olarak kurulum yapacağız. " npm install redux react-redux redux-thunk redux-devtools-extension" 

// Redux, bizim 2 componentimiz var diyelim. Head ve Body kısımlarım. Bu komponentler birbirinden ayrı sayfalarda. Sürekli props veya iç içe yapılarla taşımak zahmetli ve karmaşık bir durum. Bu sebeple redux kullanıcaz artık. 

// src içerisinde redux isimli klasör oluşturucaz. İçerisinde actions, reducers klasörleri ve store.js dosyası olacaktır.

// store.js dosyasına giderek içeriğii oluşturucaz ve ardından index.js sayfasında değişiklik yapacağız. 

// Şimde bizim bir action bir tane de reducerımız olsun. changeReducer.js adlı. oluşturduktan sonra store.js içerisinde  combineReducers kısmında karşılarız ki tüm sayfa içerisinde kullanabilelim.

//actions'u olacak bunu actions kısmından yapabiliriz ancak biz ana sayfa yani App.js üzerinden yapıcaz. 
