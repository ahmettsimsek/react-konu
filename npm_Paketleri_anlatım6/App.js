import { CiSearch } from "react-icons/ci";

function App() {

  return (
    <>
    <CiSearch /> {/*arama ikonumuz */}
    </>
  );

}

export default App;

// React ile ilgili binlerce slider pakatleri binlerce npm paketleri bulunur. Ben 1 tane slider istiyorum. Biz react'ı kurarken veya node.js projesi kurarken bir package.json kurmamızın amacı dışarıdan bir bağımlılık kurmak istersem bunu .json içerisinde tutarım. 

// Örneğin ikon paketini npm yaparsam, google da react-icons yazarak web siteye gidiyoruz. (npm install react-icons --save) ile paketleri indiriyoruz. ardından ısttediğimiz olan ikonu sayfamızda çagırarak yazıyoruz. 

// Örneğin, goggle giderek react-slick npm edersek (npm install react-slick --save), package.json içerisindeki dependencies kısmı altına react-slick gelmiş olacaktır. Yani bir npm paketini kurmak istediğimizde bu paketi npm install ile kurmak istediğimizde onu  otomatik buraya ekler.

// npm ettikten sonra sayfa bize diyor ki bunun bir de CSS için de bunu kurmalısın diyor. (npm install slick-carousel --save)

// yani kullanmak istediğimiz kütüphaneleri bu şekilde kullanıyoruz. 
