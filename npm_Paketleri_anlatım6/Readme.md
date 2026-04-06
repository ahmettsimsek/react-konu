## 📦 React Paket Yönetimi ve Dış Bağımlılıklar (npm)

React projelerinde tekerleği her seferinde yeniden icat etmek yerine, topluluk tarafından geliştirilen ve **npm (Node Package Manager)** üzerinden sunulan binlerce hazır kütüphaneyi (sliderlar, ikonlar, form bileşenleri vb.) kullanabiliriz.

### 📄 package.json Nedir?
Bir React veya Node.js projesi başlattığımızda otomatik olarak oluşan `package.json` dosyası, projemizin **kimlik kartıdır.** - Projenin adını ve versiyonunu tutar.
- **Dependencies (Bağımlılıklar):** Projenin çalışması için dışarıdan yüklediğimiz tüm paketlerin listesini ve versiyon numaralarını burada saklar. 
- Bu sayede projenizi başka bir geliştiriciye gönderdiğinizde, o kişi sadece `npm install` diyerek tüm gerekli kütüphaneleri otomatik olarak indirebilir.

---

### 🎨 Örnek: react-icons Kullanımı

Projelerimize hızlıca profesyonel ikonlar eklemek için en popüler kütüphanelerden biri `react-icons`'dır.

#### 1. Kurulum (Installation)
Terminal üzerinden paketi projemize dahil ediyoruz:
```bash
npm install react-icons --save
