# 🚀 React'ta Map Kavramı ve Kullanımı
React'ta verileri (array/dizi) ekrana dinamik bir şekilde basmak için JavaScript'in .map() fonksiyonunu kullanırız. Konsolda gördüğümüz verileri kullanıcıya göstermenin en etkili yolu budur.

# 💡 Temel Mantık
Bir dizi içerisindeki her bir elemanı tek tek gezer (iterate eder), bu elemanları belirlediğimiz bir yapıya (JSX) sokar ve yeni bir dizi olarak ekrana döndürür.

# 🛠️ Yazım Kuralı (Syntax)
React içerisinde JavaScript kodu yazmak için süslü parantez { } kullanmamız gerekir. Bu parantezler sayesinde HTML (JSX) içerisinde mantıksal işlemler yapabiliriz.

JavaScript
{degiskenIsmi.map((eleman, index) => (
  <div key={index}>
    {eleman}
  </div>
))}

# 📝 Adım Adım Açıklama
Diziyi Çağırmak: Oluşturduğumuz dizi bir değişken olduğu için onu doğrudan süslü parantez { } içinde çağırırız.

Parametreler:

eleman (atamaisim): O anda üzerinden geçilen dizi elemanını temsil eder. Her döngüde bir sonraki elemana geçer.

index: Elemanın dizideki sırasını (0, 1, 2...) belirtir.

Dönüş Değeri (Return): Ok işaretinden => sonra gelen parantezler içerisine yazdığımız her şey (<div>, <span> vb.) ekrana basılacak olan HTML yapısıdır.

Key Kullanımı: React'ın hangi elemanın değiştiğini anlaması için her bir en dış kapsayıcıya (örneğin div) benzersiz bir key değeri (genellikle index veya id) verilmesi şarttır.

# ✨ Örnek Kullanım
JavaScript
const meyveler = ["Elma", "Armut", "Muz"];

return (
  <div>
    <h2>Meyve Listesi</h2>
    {meyveler.map((meyve, i) => (
      <p key={i}>Meyve adı: {meyve}</p>
    ))}
  </div>
);
Bu düzenleme, hem senin notlarını koruyor hem de bir başkasının (veya ileride senin) okuduğunda konuyu hızla kavramasını sağlıyor.
