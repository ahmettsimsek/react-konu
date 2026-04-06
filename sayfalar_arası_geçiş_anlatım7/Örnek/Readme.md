// Şimdi home sayfamızda 3 tane seçeneğimiz olsun ve hangi birine basarsam detaylar sayfası açılsın ancak açılan sayfada tıkladığımız kutucuğun ismi yazsın. 

// src altında "data.js" isimli dosya açacağız. Home.jsx dosyasına tanımladığımız arrayımızı buraya taşıyoruz. 

// şimdi her bir <div>'e id numarasına göre detaylar sayfasında yönlendirme yapmak istiyorum.

// bunun için App.js dosyasına gidiyoruz ve detail sayfasına gitmesin sadece detaylar sayfasına id numarasına bağlı olarak gitsin. "detail/:id " yazmalıyız.

// sonrasında dışardan fonksiyonumuza değer alımı sağlayacağız, ve son olarak id göre detay sayfasına yönlendirme sağlayacağız ${id} ile. 

// Şimdi de Detail sayfasına giderek id'e göre tıkladığımız şeyi de ekrana yazdırır, 

----------------------------------------------------------------------------------------------------------------------------------------------------------------

# React Router DOM: Dinamik Yönlendirme ve useParams 🔗

Bu bölüm, bir veri listesinden seçilen öğenin ID numarasına göre dinamik bir detay sayfasına yönlendirilmesini ve bu sayfada ilgili verinin filtrelenerek gösterilmesini kapsamaktadır.

## 🛠️ 1. Dinamik Rota Tanımlama (App.js)

Bir sayfanın dışarıdan bir parametre (ID, isim vb.) alabilmesi için `path` kısmında `:` işareti kullanılır. Bu, React Router'a bu kısmın değişken olduğunu söyler.

```javascript
<Routes>
  <Route path="/" element={<Home />} />
  {/* ':id' kısmı dışarıdan gelecek değişken değeri temsil eder */}
  <Route path="/detail/:id" element={<Detail />} />
</Routes>

📂 2. Veri Yapısı (data.js)
Verileri merkezi bir dosyada tutup ihtiyaç duyulan sayfalarda import ederek kullanıyoruz.

JavaScript
const arr = [
    { name: "Telefon", id: 1 },
    { name: "Televizyon", id: 2 },
    { name: "Araba", id: 3 }
];

export default arr;
🏠 3. Listeleme ve Yönlendirme (Home.jsx)
Ana sayfada verileri map ile dönerken, her öğeye tıklandığında ilgili ID'yi URL'ye gönderen bir fonksiyon tetikliyoruz.

JavaScript
const yonlendirFunc = (id) => {  
    // URL'yi /detail/1, /detail/2 gibi dinamik hale getirir
    window.location = `/detail/${id}`; 
}

// ... render içinde
{arr.map((item, i) => (
    <div key={i} onClick={() => yonlendirFunc(item.id)}>
        {item.name}
    </div>
))}
🔍 4. Veriyi Karşılama ve Filtreleme (Detail.jsx)
Detay sayfasında, URL'deki ID'yi yakalamak için useParams hook'unu kullanıyoruz.

useParams() Nedir?
URL'deki parametreleri bir obje olarak döndürür. App.js içinde :id olarak tanımladığımız değişkeni buradan çekeriz.

JavaScript
import { useParams } from 'react-router-dom';
import arr from '../data';

const Detail = () => {
    const { id } = useParams(); // URL'deki ID'yi yakalar (Örn: 1)

    return (
        <>
            {/* Gelen ID ile ana veriyi filtreleyip ekrana basıyoruz */}
            {arr.filter(dt => dt.id == id).map((dat, i) => (
                <div key={i}>{dat.name}</div>
            ))}
        </>
    );
}
💡 Öğrenilen Teknik Kavramlar
Dynamic Routing: Sabit URL'ler yerine değişken içeren (/detail/:id) yapılar kurma.

useParams: URL üzerindeki dinamik değerleri yakalayıp bileşen içinde kullanma.

Data Filtering: Dışarıdan gelen bir dizi (array) içerisinden, belirli bir kritere (ID) uyan veriyi süzüp gösterme.

Programmatic Navigation: Kullanıcıyı kod yoluyla (fonksiyon içinden) başka bir sayfaya yönlendirme.
