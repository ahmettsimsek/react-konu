




🧬 Bileşenler Arası Veri Aktarımı: Props
React'te veriler her zaman yukarıdan aşağıya (Parent'tan Child'a) doğru akar. Bir ana bileşenden (örneğin App.js), oluşturduğumuz alt bileşenlere bilgi göndermek istediğimizde Props kavramını kullanırız.

📤 Veriyi Gönderme (Parent Side)
App.js içerisinden bir componente veri göndermek için, tıpkı bir HTML attribute'u tanımlar gibi bir isim belirleriz. Değişkenleri veya dinamik içerikleri süslü parantez { } içinde geçeriz:

JavaScript
// App.js
<MyComponent title="Hoş Geldiniz" count={5} />
📥 Veriyi Karşılama (Child Side)
Gönderdiğimiz bu title veya count bilgileri, hedef componentin fonksiyonuna birer "parametre" olarak gelir. Modern React kullanımında en pratik yöntem Destructuring (Yapsal Ayrıştırma) yöntemidir:

Destructuring Yöntemi: Fonksiyonun parantezleri içinde { title } yazarak, gelen paket içerisinden sadece ihtiyacımız olanı doğrudan çekip alabiliriz.

Kullanım: Artık bu ismi component içinde istediğimiz yerde kullanabiliriz.

JavaScript
// MyComponent.js
function MyComponent({ title, count }) {
  return (
    <div>
      <h1>{title}</h1> 
      <p>Gelen Sayı: {count}</p>
    </div>
  );
}
📌 Neden Props Kullanırız?
Dinamik İçerik: Aynı componenti (örneğin bir kullanıcı kartı) farklı verilerle defalarca kullanabilmemizi sağlar.

Tek Yönlü Veri Akışı: Verinin nereden geldiği belli olduğu için hata ayıklamayı (debugging) kolaylaştırır.
