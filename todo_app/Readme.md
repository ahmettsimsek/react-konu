# React ile Todo List / Mesaj Ekleme Mantığı 📝

Bu çalışma, React'te form yönetimi, input verisi takibi ve dinamik bir diziyi (array) ekranda listeleme mantığını kavramak amacıyla hazırlanmıştır.

## 🚀 Temel Mantık

Proje iki ana durum (state) üzerine kuruludur:
1.  **text:** Kullanıcının input alanına yazdığı anlık veriyi tutar.
2.  **message:** "Ekle" butonuna basıldığında, o anki `text` değerini kalıcı olarak saklayan dizidir.

---

## 🛠️ Kod Yapısı ve Fonksiyonlar

### 1. onChange İzleme (Input Takibi)
Kullanıcı klavyeden bir tuşa bastığında `onChange` tetiklenir ve `e.target.value` üzerinden gelen veri anlık olarak `text` state'ine yazılır.

```javascript
const onChangeFunc = (e) => {
    setText(e.target.value)
}
```

### 2. Spread Operator (...) ile Veri Ekleme
Diziye yeni bir eleman eklerken önceki verileri kaybetmemek için spread operator kullanılır. prev (previous state), dizinin o anki güncel halini temsil eder.

```JavaScript
const messageFunc = () => {
   setMessage(prev => [...prev, text]) // Mevcut listeyi al ve sonuna yeni metni ekle
   setText('') // Ekleme işleminden sonra input alanını temizle
}
```

## 🖼️ Arayüz ve Listeleme (Map Metodu)
React'te bir diziyi ekrana basmak için en yaygın yöntem JavaScript map metodudur. Burada her bir mesaj için yeni bir div oluşturulur.

```JavaScript
{
  message?.map((msg, i) => (
    <div key={i}>{msg}</div>
  )) 
}
```

Not: message?. kullanımı (Optional Chaining), dizi henüz oluşmamışsa veya boşsa uygulamanın hata vermesini engeller.

## 💡 Öğrenilen Teknik Kavramlar
Controlled Components: Form elemanlarının (input) değerinin tamamen React state'i tarafından kontrol edilmesi.

Functional Updates: prev => [...prev] yapısı ile önceki state değerine güvenli bir şekilde erişip güncelleme yapma.

List Rendering: map() metodu ile dinamik içerik oluşturma.

State Resetting: İşlem bittikten sonra input alanını temizleyerek kullanıcı deneyimini (UX) iyileştirme.
