# React Redux ile Merkezi State Yönetimi 👑

Bu çalışma, uygulamanın farklı bileşenleri arasındaki veri iletimini kolaylaştırmak ve karmaşık "Props Drilling" (veriyi en üstten en alta elle taşıma) sorununu çözmek için **Redux** mimarisinin kurulumunu ve kullanımını kapsamaktadır.

## 📦 Kurulum

Redux'ı tüm yan araçlarıyla birlikte kurmak için terminale şu komutu yazıyoruz:

```bash
npm install redux react-redux redux-thunk redux-devtools-extension
```

🏗️ Redux Mimarisi ve Klasör Yapısı
Projeyi ölçeklenebilir kılmak için src klasörü altında şu yapıyı oluşturuyoruz:

redux/

actions/ (Olayları tetikleyen fonksiyonlar)

reducers/ (State'in nasıl değişeceğine karar veren mantık)

store.js (Tüm state'in tutulduğu merkezi depo)

## 🛠️ Temel Bileşenlerin Görevleri
1. Store (Merkezi Depo)
Uygulamanın tüm "hafızası" buradadır. combineReducers kullanarak birden fazla reducer'ı tek bir merkezde toplarız.

2. Reducer
State'in o anki durumu ile gönderilen aksiyonu (action) alır ve yeni bir state döndürür.
Örn: changeReducer.js

3. Action
"Ne yapılacağını" söyleyen bir objedir. Genellikle bir type ve isteğe bağlı olarak bir payload (veri) taşır.

4. Provider (index.js)
Hazırladığımız Store'u tüm uygulamaya tanıtmak için index.js içerisinde uygulamayı <Provider store={store}> ile sarmallarız.

## 💡 Neden Redux Kullanmalıyız?
Merkezi Yönetim: Header, Body veya çok derinlerdeki bir Component, aynı veriye tek bir merkezden erişebilir.

Hata Ayıklama: redux-devtools-extension sayesinde state'deki her değişikliği anlık olarak tarayıcı üzerinden izleyebiliriz.

Sürdürülebilirlik: Uygulama büyüdükçe verilerin hangi yolla, nerede değiştiği daha kontrol edilebilir hale gelir.

## ✅ Tamamlanan Modüller
[x] Redux Bağımlılıklarının Kurulumu.

[x] Store, Reducer ve Action yapılarının oluşturulması.

[x] combineReducers ile çoklu reducer yönetimi.

[x] Provider ile App bileşeninin sarmalanması.
