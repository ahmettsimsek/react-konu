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
          <Route path="detail/:id*" element={<Detail />} /> {/*Detail sayfasına id numarasına göre yönlendirme yap demek*/}
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;

// Şimdi home sayfamızda 3 tane seçeneğimiz olsun ve hangi birine basarsam detaylar sayfası açılsın ancak açılan sayfada tıkladığımız kutucuğun ismi yazsın. 
