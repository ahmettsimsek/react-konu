🏗️ Component Yapısı ve Mantığı
Proje geliştirilirken kodun okunabilirliğini artırmak ve tekrarı önlemek adına Component (Bileşen) yapısı kullanılmıştır.

🧩 Component Nedir?
Componentlar, sayfada kullandığımız yapıları küçük parçalara bölerek klasörler içerisinde organize etmemizi ve ihtiyaç duyduğumuzda bu parçaları çağırmamızı sağlar.

Neden Kullanıyoruz? Örneğin, bir sayfada birbirinin aynısı veya benzeri 3 farklı div yapısı olduğunu düşünelim. Bunların hepsini tek bir App.js dosyasına yazmak, dosyanın karmaşıklaşmasına ve yönetilemez hale gelmesine neden olur.

Çözüm: src dizini altında oluşturduğumuz bileşen klasörleri ile her bir yapıyı kendi içinde kapsülleriz (encapsulation).

📂 Dosya Düzeni ve Render İşlemi
Temiz App.js: Component içerisinde onlarca satır kod ve mantıksal işlem olsa bile, biz bu bileşeni App.js içerisinde sadece tek bir satır (örneğin: <Header />) olarak çağırırız. Bu sayede ana dosyamız her zaman düzenli kalır.

index.js Rolü: Projenin giriş noktası olan index.js, varsayılan olarak sadece App.js bileşenini render eder. Dolayısıyla oluşturduğumuz diğer tüm alt bileşenlerin ekranda görünebilmesi için mutlaka App.js (veya render edilen başka bir üst bileşen) içerisine dahil edilmesi gerekir.

💡 Özetle:
Bu mimari sayesinde kodun bakımı kolaylaşır, tekrar kullanılabilir (reusable) yapılar oluşturulur ve projede hata ayıklamak çok daha hızlı hale gelir.

 - componentleri fonksiyon gibi tanımladık ve return ettirdik ek olarak export ile dışarı tanımlamayı unutmamak gerekmektedir. 

