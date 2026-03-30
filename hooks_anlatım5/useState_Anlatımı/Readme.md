# 🎣 React Hooks: useState Kullanımı
React'ta bir bileşenin (component) durumunu (state) yönetmek için en çok kullanılan Hook useState'tir. State, bir bileşenin hafızası gibidir; veriler değiştikçe React'ın sayfayı otomatik olarak tekrar render etmesini (güncellemesini) sağlar.

# 📝 Temel Yapı ve Tanımlama
useState bize iki değer döndürür: güncel değer ve bu değeri değiştirmemizi sağlayan bir fonksiyon.
```
JavaScript
const [deger, setDeger] = useState(baslangicDegeri);
deger: Saklamak istediğimiz verinin kendisi.

setDeger: Bu veriyi güncellemek için kullanacağımız özel fonksiyon.

baslangicDegeri: Değişkenin ilk hali (Sayı, String, Array, Obje veya Boolean olabilir).
```

# 🚀 Örnek Kullanım Senaryoları
```
JavaScript
const [count, setCount] = useState(0);             // Sayısal değer
const [renk, setRenk] = useState('blue');          // String değer
const [user, setUser] = useState({name: "Ahmet"}); // Obje (Array de olabilir)
const [status, setStatus] = useState(true);        // Boolean (Mantıksal)
```
💡 Kritik Bilgiler ve İpuçları
1. Neden Normal Değişken Değil de State?
Klasik bir let x = 5 değişkenini güncellediğinizde React sayfanın değiştiğini anlamaz. Ancak setCount(6) dediğinizde React, "State değişti, o zaman ekrandaki görüntüyü güncellemeliyim" der.

2. Fonksiyonel Güncelleme (Setters)
State'i güncellemek için fonksiyonları iki şekilde kullanabiliriz:

Dışarıda Tanımlayarak: onClick={clickFunc}

Satır İçinde (Inline): onClick={() => setStatus(!status)} (Durumu tersine çevirmek/Toggle için çok kullanışlıdır).

3. Koşullu Render (Conditional Rendering)
State değerine göre ekranın tamamını veya bir kısmını değiştirebiliriz. Örneğin status true ise farklı bir HTML, false ise farklı bir HTML döndürebiliriz:

JavaScript
if (status) {
  return <div>Durum Aktif ✅</div>;
} else {
  return <div>Durum Pasif ❌</div>;
}
# 🛠️ Uygulama Örneği (Sayacı Artırma ve Renk Değiştirme)
```
JavaScript
function App() {
  const [count, setCount] = useState(0);
  const [renk, setRenk] = useState('blue');

  return (
    <div className="App">
      <h1>Sayaç: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Artır</button>

      <div style={{ color: renk }}>
        Şu anki rengim: {renk}
      </div>
      <button onClick={() => setRenk('red')}>Rengi Kırmızı Yap</button>
    </div>
  );
}
```
