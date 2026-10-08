# Kararlar

Her karar: tarih, ne seçildi, neden, alternatifler, dikkat edilecekler.

## 8 Ekim 2026 — Proje kurulumu

### Framework: Next.js (16.4)
- **Neden:** Vitrin, admin paneli ve ileride sunucu tarafı (veritabanı, form işleme) tek projede durur. Sayfalar sunucuda hazırlanıp HTML olarak gönderildiği için arama motorları ürün sayfalarını rahat okur; e-ticarette bu önemli. React tabanlı olduğu için iş ilanlarında da karşılığı var.
- **Alternatifler:**
  - Vite + React (SPA): kurulumu basit, ama sayfa tarayıcıda oluşur (SEO zayıf) ve ayrı bir backend projesi gerekir.
  - Astro: içerik ağırlıklı sitelerde çok hızlı; sepet ve admin gibi yoğun etkileşimli ekranlarda daha fazla elle iş çıkarır.
  - WooCommerce / Shopify: en hızlı yol, ama "teklif iste" ve servis talebi gibi özel akışlarda eklentiye bağımlı kalınır; kodu baştan sona anlatabilme hedefime uymaz.
- **Dikkat:** Next.js hızlı değişiyor. İnternetteki eski örnekler bu sürümde çalışmayabilir; kaynak olarak `node_modules/next/dist/docs/` içindeki sürüme özgü dokümanlar esas alınır.

### Yönlendirme: App Router
- **Neden:** Next.js'in güncel ve önerilen yapısı. İç içe layout'lar vitrin ile admin panelini ayrı çerçevelere koymayı kolaylaştırır. Bileşenler varsayılan olarak sunucuda çalışır (server component), tarayıcıya daha az JavaScript gider.
- **Alternatifler:** Pages Router: daha eski, zihinsel modeli daha basit ve kaynak çok; ama yeni özellikler oraya gelmiyor.
- **Dikkat:** Server component ile client component ayrımını iyi öğrenmek gerekiyor; tıklama ve state içeren parçalar `"use client"` ister.

### Stil: Tailwind CSS (v4)
- **Neden:** Stil doğrudan bileşenin içinde yazılır, dosyalar arasında gidip gelmek gerekmez. `sm:` / `md:` önekleriyle mobil öncelikli tasarım kolay; mobil görünüm bu projede kritik. Marka renkleri tek yerde (`globals.css` içindeki `@theme`) tanımlanır.
- **Alternatifler:**
  - CSS Modules: düz CSS bilgisiyle yazılır, ama her bileşen için ayrı dosya ve isim bulma yükü var.
  - Hazır bileşen kütüphaneleri (MUI, Chakra): hızlı başlar, ama markanın kendi görünümüne uydurmak zorlaşır.
  - CSS-in-JS (styled-components): server component'lerle uyumu zayıf.
- **Dikkat:** Sınıf listeleri uzayabilir. Aynı sınıf grubu ikinci kez yazılıyorsa bileşene çıkar.

### Dil: TypeScript
- **Neden:** Ürün, sipariş, teklif gibi veri yapılarını tip olarak tanımlayınca hatalar çalıştırmadan önce yakalanır. Mock verilerin tipleri ileride Prisma modelleriyle eşleşecek.
- **Alternatifler:** Düz JavaScript: başlaması kolay, ama veri yapısı büyüdükçe hataları ancak tarayıcıda görürsün.

### Klasör düzeni: `src/` klasörü
- **Neden:** Uygulama kodu (`src/`) ile ayar dosyaları (kök klasör) ayrılır. Sayfalar `src/app/`, bileşenler `src/components/`, sahte veriler `src/data/mock/`.
- **Alternatifler:** `app/` klasörünü doğrudan kökte tutmak: bir klasör daha az, ama kök kalabalıklaşır.

### Paket yöneticisi: npm
- **Neden:** Node.js ile birlikte geliyor, ek kurulum gerektirmiyor.
- **Alternatifler:** pnpm (daha hızlı, daha az disk), yarn, bun. Tek kişilik projede fark küçük.

### Kurulum varsayılanları olduğu gibi bırakıldı
- `next.config.ts` içinde `cacheComponents` ve `partialPrefetching` açık geldi. Mock veri aşamasında etkisi yok; Aşama 2'de veri çekmeye başlarken yeniden değerlendirilecek.
- `npm audit` 5 "high" uyarı veriyor; hepsi ESLint'in geliştirme bağımlılığı zincirinde (`braces`), yayına giden kodda değil. `npm audit fix --force` ESLint ayarını sürüm 14'e düşürdüğü için **uygulanmadı**. Paket güncellemesi geldikçe tekrar bakılacak.

### Git: proje kendi deposunda
- **Neden:** Ev klasörü (`/Users/ekremilkan`) yanlışlıkla bir git deposu olmuş; proje ona karışmasın diye bu klasörde ayrı depo açıldı.
- **Dikkat:** `.env*` dosyaları ve `.claude/settings.local.json` `.gitignore` içinde; gizli anahtarlar yalnızca `.env.local` dosyasında durur.

## 8 Ekim 2026 — Şablon temizliği ve eski site incelemesi

### Koyu tema kaldırıldı
- **Neden:** Şablon, işletim sistemi koyu moddaysa zemini otomatik siyaha çeviriyordu. Marka renkleri tek temada tutarlı dursun; siyah logo koyu zeminde kaybolmasın.
- **Alternatifler:** İki temayı da desteklemek: her renk ve görsel için iki sürüm gerekir, demo aşamasında karşılığı yok.

### Logolar eski siteden alındı
- `public/logo-dark.png` (açık zemin için siyah) ve `public/logo-light.png` (koyu zemin için beyaz), 900×207 PNG.
- **Dikkat:** Müşteriden vektör (SVG) sürümü istenecek.

### Açık kararlar (henüz verilmedi)
- **Yeşilin tonu:** Eski sitenin stil dosyasında belirgin bir marka yeşili yok; ton seçilecek.
- **Kapsam:** Eski sitede olup CLAUDE.md'de olmayanlar: Enerji Hesaplama aracı, Galeri, Işık Kulesi kategorisi, rakamlar (20+ yıl, 750+ proje, 1800+ müşteri), bülten aboneliği.
- **Müşteri yorumları:** Eski sitedekiler şablon örneği gibi duruyor; müşteri doğrulamadan taşınmayacak.
- **Tasarım yönü:** Kod yazmadan önce seçilecek ve `docs/tasarim.md`'ye yazılacak.
