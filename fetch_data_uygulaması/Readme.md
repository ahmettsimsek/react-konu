# React ile API Veri Çekme (Axios & Fetch) 🌍

Bu çalışma, harici bir API (Rest Countries) üzerinden veri çekme, asenkron işlemleri yönetme ve gelen veriyi React state'i kullanarak ekrana basma süreçlerini kapsamaktadır.

## 📦 Axios Kurulumu

Fetch API yerine daha gelişmiş özellikler sunan ve yaygın olarak kullanılan **Axios** kütüphanesini tercih ediyoruz:

```bash
npm install axios
```

## 🏗️ Asenkron Veri Çekme Mantığı (Async/Await)
JavaScript doğası gereği asenkron çalışır. Bir API isteğinde bulunduğumuzda verinin gelmesi zaman alabilir (internet hızı, sunucu yanıtı vb.). Eğer veriyi beklemeden kodun devam etmesine izin verirsek, veri henüz gelmediği için undefined hatası alırız.

Bunu engellemek için:
```
async: Fonksiyonun asenkron olduğunu belirtir.
```
```
await: API'den yanıt gelene kadar kodun o satırda beklemesini sağlar.
```

## 🛠️ Uygulama Örneği (useEffect & Axios)
Sayfa yüklendiği anda verilerin otomatik olarak çekilmesi için useEffect hook'u kullanılır.

```JavaScript
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    // 1. Asenkron veri çekme fonksiyonu tanımlanır
    const getCountry = async () => {
      try {
        // 2. Veri gelene kadar burada beklenir
        const response = await axios.get('[https://restcountries.com/v3.1/all](https://restcountries.com/v3.1/all)');
        
        // 3. Gelen veri state'e aktarılır
        setCountry(response);
      } catch (error) {
        console.error("Veri çekilirken hata oluştu:", error);
      }
    };

    // 4. Fonksiyon çağrılır
    getCountry();
  }, []); // Boş dizi: Sadece sayfa ilk yüklendiğinde çalışır

  return (
    <>
      {/* Optional Chaining (?.) ile verinin varlığı kontrol edilir */}
      {country?.data?.map((dt, i) => (
        <div key={i}>{dt.name.common}</div>
      ))}
    </>
  );
}
```
## 💡 Öğrenilen Teknik Kavramlar
API (Application Programming Interface): Dış kaynaklardan (Rest Countries gibi) veri alışverişi yapma.

Asenkron Programlama: Uzun süren işlemlerin (network istekleri) uygulamanın geri kalanını dondurmadan arka planda yönetilmesi.

Axios: HTTP isteklerini yönetmek için kullanılan popüler bir kütüphane.

useEffect Dependency Array: [] kullanarak sonsuz döngüyü engelleme ve verinin sadece bir kez çekilmesini sağlama.

Optional Chaining (?.): Veri henüz yüklenmemişken veya null iken uygulamanın çökmesini engelleyen güvenlik kontrolü.
