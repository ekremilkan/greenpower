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
- **Müşteri yorumları:** Eski sitedekiler şablon örneği gibi duruyor; müşteri doğrulamadan taşınmayacak.
- **Tasarım yönü:** Kod yazmadan önce seçilecek ve `docs/tasarim.md`'ye yazılacak.

## 8 Ekim 2026 — Site yapısı ve kapsam

### Tek proje, iki bölüm: kurumsal site + mağaza
- **Karar:** Kurumsal site ana alan adında, mağaza canlıda alt alan adında (ör. `magaza.alanadi.com`). İkisi tek Next.js projesinde. Yapı olarak aksa.com.tr / shop.aksa.com.tr örnek alındı.
- **Neden:** Kurumsal ziyaretçi (firma tanıtımı, hizmet, teklif) ile alışveriş yapan ziyaretçinin ihtiyacı farklı; ayrı menü ve ayrı çerçeve ikisini de sadeleştirir. Tek proje olunca bileşenler, tema ve veri tipleri paylaşılır, tek deploy yeter.
- **Alternatifler:**
  - İki ayrı proje: tam bağımsızlık, ama ortak kod kopyalanır ve tek geliştirici için iki deploy, iki bakım demek.
  - Mağazayı kalıcı olarak `/magaza` yolunda tutmak: en basiti, çerez ve SEO sorunu çıkarmaz; ama alt alan adı kesin karar.
- **Dikkat:** Alt alan adları tarayıcı için ayrı sitedir. Sepet ve oturum çerezlerinin iki adres arasında paylaşılması Aşama 3'te ayrıca ayarlanmalı.

### Geliştirmede `/magaza`, alt alan adı sonra
- **Karar:** Demo boyunca mağaza `/magaza` yolunda çalışır. Alt alan adı yönlendirmesi Aşama 3'te `src/proxy.ts` ile yapılır.
- **Neden:** Yerelde ve demo adresinde alt alan adı kurmak uğraştırır, demoya katkısı yok.
- **Şimdiden alınan önlem:** Kurumsal ve mağaza ayrı layout'larda (`src/app/(kurumsal)/`, `src/app/magaza/`); mağaza adresleri elle yazılmaz, tek yardımcı fonksiyondan üretilir.
- **Dikkat:** Next.js 16'da Middleware'in adı Proxy oldu; dosya `middleware.ts` değil `proxy.ts`. Eski örnekler bu yüzden çalışmaz.

### Yedek parça organizasyonu
- **Karar:** Parça tipine göre kategori (AVR, kontrol modülü, aktüatör, sensör, ATS, akü şarj cihazı...), marka filtresi, parça koduyla arama. Organizasyon olarak yesiljenerator.com.tr örnek alındı.
- **Neden:** Yedek parça arayan kişi ya parçanın tipini ya da kodunu bilir; ikisine de doğrudan yol açılır.
- **Alternatifler:** Jeneratör modeline göre gezinme ("şu jeneratörün parçaları"): kullanışlı ama her parça için uyumluluk verisi ister; müşteride bu veri hazır değil.

### Üç fiyat modu
- **Karar:** Her üründe açık bir fiyat modu: fiyatlı (sepete ekle), stok sorunuz (WhatsApp/iletişim), teklif iste (büyük jeneratörler).
- **Neden:** Ürünün ekranda nasıl davranacağı tek alandan okunur; kart, detay sayfası ve admin paneli aynı alana bakar.
- **Alternatifler:** Fiyatı boş bırakıp anlamı oradan çıkarmak: boş fiyat "stok sor" mu "teklif iste" mi belli olmaz, her yerde tahmin kodu yazılır.
- **Dikkat:** Tipin tam şekli mock veri oturumunda yazılacak (Ekrem, `TODO(human)`).

### Kapsam
- **Alındı:** Işık Kulesi ürün grubu, rakamlar (müşteriyle doğrulanacak), bülten alanı (görünüm).
- **Alınmadı:** Galeri.
- **Sonraki aşamaya bırakıldı:** kVA güç hesaplayıcı (cihaz seç → gereken güç → uygun jeneratörler + teklif iste).

### Tasarım yaklaşımı
- **Karar:** Örnek siteler yalnızca yapı için referans; görsel dil markanın yeşil, beyaz, siyahı ve logosuyla özgün olacak. Mobil öncelikli. Görseller yer tutucu. Tasarım işlerinde frontend-design skill'i kullanılacak.
- **Neden:** Proje aynı zamanda portfolyo vitrini; hazır şablon görünümünden uzak durmalı.
- **Dikkat:** Skill yön verir, yerine karar vermez. Asıl kararlar `docs/tasarim.md`'de yazılı duracak.

### frontend-design skill'i proje klasörüne kopyalandı
- **Karar:** Skill, Anthropic'in resmî deposundan (`anthropics/skills`) indirilip `.claude/skills/frontend-design/` altına konuldu; Apache 2.0 lisans dosyası yanında.
- **Neden:** VS Code eklentisinin sohbet kutusu `/plugin` komutunu desteklemiyor ve `claude` terminal aracı kurulu değil. Skill yalnızca bir `SKILL.md` dosyası olduğu için doğrudan kopyalamak aynı işi görüyor; ayrıca git'e girip projeyle taşınıyor.
- **Alternatifler:** Terminal aracını kurup `/plugin install` ile eklemek: güncellemeler kendiliğinden gelir, ama skill bilgisayara kurulur, projeyle taşınmaz.
- **Dikkat:** Bu kopya kendiliğinden güncellenmez. Dosya projeye girmeden önce okundu: yalnızca tasarım yönergeleri içeriyor, betik yok.
