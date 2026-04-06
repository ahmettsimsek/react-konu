# React Router DOM ile Sayfa Yönetimi 🛣️

Bu çalışma, React uygulamalarında sayfalar arası geçiş (routing) mantığını kavramak ve Single Page Application (SPA) yapısını kurmak amacıyla oluşturulmuştur.

## 📦 Kurulum

React projesinde yönlendirme özelliklerini kullanabilmek için öncelikle gerekli paketi terminal üzerinden yüklüyoruz:

```bash
npm install react-router-dom
```

# 🏗️ Temel Yapı ve Bileşenler
React Router v6 kullanarak sayfa yapısını kurarken şu temel bileşenlerden faydalanıyoruz:

BrowserRouter: Uygulamanın tarayıcıdaki URL geçmişiyle (history) iletişim kurmasını sağlayan ana sarmalayıcıdır.

Routes: Uygulama içindeki tüm Route tanımlamalarını kapsayan yapıdır.

Route: Belirli bir URL yolu (path) ile o yolda hangi bileşenin (element) ekranda gösterileceğini eşleştirir.

💻 Uygulama Örneği
Proje yapısında sayfaları düzenli tutmak için src/pages klasörü oluşturulmuş ve yönlendirme ayarları App.js içinde şu şekilde yapılandırılmıştır:

```JavaScript
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* '/' ana dizini temsil eder ve Home sayfasını render eder */}
        <Route path="/" element={<Home />} /> 
        
        {/* '/detail' yolu Detail sayfasını render eder */}
        <Route path="/detail" element={<Detail />} />
        
        {/* Not: 'detail/*' kullanımı, detay sayfasının altında alt rotalar tanımlamaya izin verir */}
      </Routes>
    </BrowserRouter>
  );
}
```

export default App;
## 💡 Önemli Bilgiler
Dizin Yapısı: Sayfalarımızı temsil eden bileşenleri src klasörü altında pages adlı ayrı bir klasörde toplamak, projenin okunabilirliğini ve yönetilebilirliğini artırır.

Varsayılan Rota: path="/" kuralı, uygulama ilk açıldığında (localhost:3000) kullanıcının karşısına çıkacak olan "Home" sayfasını belirler.

Hatalı URL Yönetimi: Eğer kullanıcı tanımlanmamış bir URL'ye (örneğin /bilinmeyen-sayfa) gitmeye çalışırsa, herhangi bir eşleşme olmadığı için sayfa render edilmez. Bu gibi durumlar için genellikle en sona bir * (wildcard) rotası eklenerek "404 Not Found" sayfası gösterilir.
