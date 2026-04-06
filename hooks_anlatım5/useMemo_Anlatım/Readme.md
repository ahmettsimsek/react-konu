

## 🧠 useMemo Hook Kullanımı

`useMemo`, React'te **performans optimizasyonu** sağlamak için kullanılan bir hook'dur. Temel amacı, karmaşık bir hesaplamanın sonucunu hafızaya alarak (memoization), bağımlılıkları değişmediği sürece aynı sonucu tekrar tekrar hesaplamadan döndürmektir.

### ❓ Neden useMemo Kullanmalıyız?

React bileşenleri, herhangi bir state değişikliğinde fonksiyonun tamamını baştan aşağı tekrar çalıştırır (re-render). Eğer fonksiyonun içinde çok büyük bir döngü veya ağır bir matematiksel işlem varsa, bu her render'da uygulamanın donmasına veya yavaşlamasına neden olur. 

`useMemo` bu ağır işlemi bir kez yapar, sonucu hafızaya kaydeder ve sadece belirttiğiniz değerler (bağımlılıklar) değiştiğinde işlemi tekrar gerçekleştirir.

---

### 🛠️ Pratik Uygulama Örneği

Aşağıdaki kodda, 10 milyar adımlık bir döngünün sadece `count` değeri değiştiğinde çalışmasını sağlıyoruz:

```javascript
import { useState, useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);

  // 1. Ağır hesaplama fonksiyonu
  const heavyCalculation = (num) => {
    console.log("Hesaplanıyor...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };

  // 2. useMemo ile sonucu hafızaya alma
  // Sadece 'count' değiştiğinde bu fonksiyon tekrar çalışır.
  const memoizedValue = useMemo(() => heavyCalculation(count), [count]);

  return (
    <>
      <div>Sonuç: {memoizedValue}</div>
      <button onClick={() => setCount(count + 1)}>Arttır</button>
    </>
  );
}
