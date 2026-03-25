- React, kullanıcı arayüzleri oluşturmak için açık, verimli ve esnek bir JavaScript kütüphanesidir. Component (bileşen) denilen küçük ve izole parçalar sayesinde karmaşık arayüz birimlerini oluşturmanıza olanak tanır.
 ## ilk olarak
 
``` 
npm install -g create-react-app
```
ile react kurulumu sağlanmalıdır. 

 ## 2 

``` 
npx create-react-app ./
 ```
ile react ayaga kaldırılır, ./ ile aynı dizinde sağlar kurulumu.

- kurulum sonrası klasör ve dosyalar inmektedir. Bizim asıl işlem yapacağımız kısım src klasörüdür.

 ## İlk olarak bu projenin tarayıcı üzerinde çalışmasını istiyorum. bunun için 

``` 
 npm start
```
yazarız. bunun çalışmasını sağlayan içerik package.json dosyası içindeki scripts: start kısmıdır. Çalışınca 3000 portunda projeimin ayağa kalktığını görmüş olurum. 

- App.js kısmı ekranda gördüklerimi tarayıcıda bastırdığım kısım
- index.js ise bunu render ettiğim kısım.

  ## src içerisindeki index.js
  Sen bir tane App.js oluşturmussun, ben bu app.js'i indirilmiş olan React ve ReactDOM üzerinden render edicem yani tarayıcı üzerinde gösterilmesini sağlayacam.

  ## src içerisindeki App.js
  Benim tarayıcı üzerinden çalışmasını istediğim şeyleri buraya yazdığım yapılar.
  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  ### JSX nedir?
- ben App.js dosyamda return üzerinde herhangi bir değişken tanımlayabilirim aşağıdaki gibi. Normalde js de const ile tanımladığım ifadeyi <div> içerisinde yazamam ancak burada div içerisine gelerek tanımladığımız şeyi yazarsak hala altı çizgili gelir ama ben yukarıda tanımladığım fonksiyonu kullanmak istiyorum div içerisinde  {} süslü parantez içerisinde yazarsam rengi bile değişir hata vermeden çalışır.  Web sayfamıza bakarsak geldiğini de görmüş oluruz.
- Hem js içerisinde const üzerinden bir değişken tanımlıyorum, hem de tanımladığım bu değişkeni aynı sayfa üzerinden classname'i div olan bir app içerisinde ekrana bastırırım. Bu benim için JSX yapısı ve React'ın en büyük özelliği.
- React'ı bu şekilde kullanarak sürekli farklı sayfalarda işlemler yapmamızı gerektiren durumları ortadan kaldırırız.

```
function App() {
  const deneme =  "Ahmettt"
  return (
    <div className="App">
      {deneme}
    </div>
  );
}

export default App;
```   
 
  






