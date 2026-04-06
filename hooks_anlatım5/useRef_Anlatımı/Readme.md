# React Hooks Öğrenme Serisi: useRef 🚀

Bu proje, React'in temel hook yapılarından biri olan **useRef** hook'unu anlamak ve pratik örneklerle uygulamak amacıyla oluşturulmuştur.

## 📌 useRef Nedir?

`useRef`, React'te render döngüsünü tetiklemeden bir değeri referans olarak saklamanızı sağlayan bir hook'dur. `useState` ile benzer bir mantıkta çalışsa da, aralarında kritik bir fark vardır: `useRef` ile bir değeri değiştirdiğinizde bileşen (component) **tekrar render edilmez.**

### 🔍 Neden useRef Kullanmalıyız?

1.  **DOM Erişimi:** React içinde klasik JavaScript'teki `document.getElementById` veya `querySelector` yöntemleri yerine, bir elemente doğrudan müdahale etmek için kullanılır. (Örn: Bir inputa focus olmak).
2.  **Performans:** Sık değişen ancak arayüzde (UI) anlık olarak gösterilmesi gerekmeyen verileri saklamak için idealdir. Sayfanın gereksiz yere sürekli yenilenmesini (re-render) engeller.
3.  **Değer Saklama:** Renderlar arasında kaybolmayan ancak renderı tetiklemeyen değişkenler oluşturur.

---

## 🛠️ Temel Kullanım Örneği

Aşağıdaki örnekte bir input alanına `useRef` ile nasıl referans atandığı gösterilmektedir:

```javascript
import { useEffect, useRef } from "react";

function App() {
  // 1. Referans oluşturulur
  const firstRef = useRef();

  return (
    <>
      {/* 2. ref attribute'u ile elemente bağlanır */}
      <input ref={firstRef} placeholder="Arama yapın..." />
      
      {/* 3. Butona tıklandığında inputa odaklanma örneği */}
      <button onClick={() => firstRef.current.focus()}>
        Input'a Odaklan
      </button>
    </>
  );
}

export default App;
