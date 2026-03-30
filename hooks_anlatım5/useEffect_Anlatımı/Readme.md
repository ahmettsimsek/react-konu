# 🌀 React Hooks: useEffect Kullanımı
useEffect, bileşenin yaşam döngüsü boyunca (ekrana gelme, güncellenme veya ekrandan ayrılma) belirli işlemleri (yan etkileri/side effects) yönetmemizi sağlar. API'den veri çekme, abonelik oluşturma veya manuel DOM güncellemeleri gibi işlemler burada yapılır.

🛠️ Temel Yazım Kuralı (Syntax)
```
JavaScript
useEffect(() => {
  // Çalıştırılacak kodlar buraya yazılır
}, [bağımlılıklar]);
```
# 📥 Bağımlılık Dizisi ([]) Mantığı
useEffect'in ikinci parametresi olan dizi, bu fonksiyonun ne zaman çalışacağını belirler:

Boş Dizi [] : Fonksiyon sadece sayfa ilk yüklendiğinde (mount) bir kez çalışır. API'den veri çekmek için en ideal yöntem budur.

Değişkenli Dizi [status] : Fonksiyon, dizi içine yazdığın status değişkeni her değiştiğinde tekrar tetiklenir.

Dizi Olmaması : Eğer ikinci parametreyi hiç yazmazsanız, bileşendeki herhangi bir state güncellendiğinde useEffect sürekli çalışır (dikkatli kullanılmalıdır, sonsuz döngüye sebep olabilir).

# 💡 Önemli Kullanım Alanları
1. API'den Veri Çekme (Fetch)
Sayfa açılır açılmaz bir veritabanından veri çekmek istiyorsak boş dizi ile kullanırız:
```
JavaScript
useEffect(() => {
  fetch('https://api.example.com/data')
    .then(res => res.json())
    .then(data => console.log(data));
}, []); // Sadece ilk yüklemede çalışır
```
2. Değişken Takibi (Tetiklenme)
Bir state değişimine bağlı olarak başka bir işlem yapmak istiyorsak (örneğin status "deneme" olduğunda bir uyarı vermek):
```
JavaScript
useEffect(() => {
  console.log("Status değeri güncellendi: ", status);
}, [status]); // Status her değiştiğinde bu blok çalışır
```
# ⚠️ Dikkat Edilmesi Gerekenler
useEffect içinde bir state'i güncellerken (setStatus gibi), o state'i bağımlılık dizisine eklerseniz sonsuz döngüye girebilirsiniz.

Temizlik (Cleanup): Eğer bir zamanlayıcı (setTimeout) veya abonelik başlattıysanız, return () => { ... } yapısıyla bunu temizlemelisiniz.
