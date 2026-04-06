import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
// kütüphaneleri eklemez isek çalışmazlar

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> {/*uygulama açılınca render edilen ilk sf / ile belirtilir yani home sf gidince bunu göster*/}
          <Route path="detail/*" element={<Detail />} /> {/*Detail sf gidince bunu göster*/}
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;

// Sayfalar arası geçiş için oncelikle paketini yükleyerek işleme başlıyor olmamız gerekiyor. (npm i react-router-dom) ile kurulumu sağlarız. goggle giderek "react router dom v6" yazıp öıkan kod bloğunda <BrowserRouter> kısmını kopyalayıp projemize koyalım. 

//src altında sayfalarımızı temsil edicek bir klasör oluşturarak, sayfalarımızı oraya yerleştirmeliyiz. 

//  bu şekilde home yazan sayfa bizi karşılar bunun sebebi 3000 hostumuzda zaten / ile yazarsak home sf render eder  ancak /detail yazarsan detail sayfasına yönlendirecektir. eğer gidip /fkglks yazarsak hiçbir yere göndermez beni sayfa çünkü böyle bir sayfam yok
