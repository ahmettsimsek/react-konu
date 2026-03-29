# ⚡  onClick Kullanımı ve JSX Mantığı
React'te kullanıcı etkileşimlerini yönetmek ve dinamik içerik oluşturmak için JavaScript ve HTML'in birleşimi olan JSX yapısını kullanırız.

# 🖱️ onClick Kullanımı
Bir elemana (buton, div vb.) tıklanma özelliği kazandırmak için onClick={x} yapısı kullanılır. Burada x, tıklandığında çalışmasını istediğimiz fonksiyonun adıdır.

Önemli: Fonksiyonu yazarken parantez kullanmayız (örn: onClick={selamla}). Eğer parantez eklersek (selamla()), fonksiyon tıklandığında değil, sayfa yüklendiği an otomatik olarak çalışır.

JavaScript
function App() {
  // Fonksiyonu return öncesinde tanımlıyoruz
  const handleClick = () => {
    console.log("Butona tıklandı!");
  };

  return (
    <div>
      {/* Tıklanınca handleClick fonksiyonunu tetikle diyoruz */}
      <button onClick={handleClick}>Tıkla Beni</button>
    </div>
  );
}
# 🏗️ 2. JSX İçerisinde JavaScript Kullanımı
React fonksiyonel bileşenlerinde iki ana bölge vardır:

Return Öncesi (Mantık Katmanı): JavaScript kodlarımızı, değişkenlerimizi ve fonksiyonlarımızı tanımladığımız yerdir.

Return İçerisi (Görünüm Katmanı): JSX kullanarak ekranın nasıl görüneceğini belirlediğimiz yerdir.

JSX içerisinde bir JavaScript kodu veya değişkeni kullanmak istediğimizde bunu süslü parantez { } içerisine yazarız. Bu sayede React, bu parantezlerin içindeki ifadenin düz metin değil, bir JavaScript kodu olduğunu anlar.
