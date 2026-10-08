# Öğrendiklerim

Her oturumda geçen kavramlar, kısa açıklamalarıyla.

## 8 Ekim 2026 — Proje kurulumu

### Araçlar
- **Node.js:** JavaScript'i tarayıcı dışında çalıştıran ortam. Next.js'in geliştirme sunucusu ve derleyicisi bunun üstünde çalışır.
- **npm:** Node.js'in paket yöneticisi. `npm install` paketleri indirir, `npm run dev` gibi komutlarla `package.json`'daki script'leri çalıştırır.
- **npx:** Bir paketi kalıcı kurmadan tek seferlik çalıştırır. `create-next-app` böyle çalıştırıldı.
- **package.json:** Projenin kimliği: adı, bağımlılıkları ve komutları (`dev`, `build`, `start`, `lint`).
- **package-lock.json:** İndirilen her paketin tam sürümünü kilitler; başka bir bilgisayarda aynı sürümler kurulur. Git'e girer.
- **node_modules/:** İndirilen paketlerin durduğu klasör. Çok büyüktür, git'e girmez; `npm install` ile yeniden oluşturulur.
- **dependencies / devDependencies:** İlki sitenin çalışması için gereken paketler, ikincisi yalnızca geliştirirken gerekenler (TypeScript, ESLint).

### Next.js ve React
- **React:** Arayüzü bileşenlerden kuran kütüphane.
- **Next.js:** React'in üstüne yönlendirme, sunucuda render, görsel/font optimizasyonu ekleyen framework.
- **Bileşen (component):** Arayüzün yeniden kullanılabilir parçası; HTML'e benzeyen JSX döndüren bir fonksiyon.
- **App Router:** `src/app/` klasörüne dayalı güncel yönlendirme sistemi.
- **Dosya tabanlı yönlendirme (file-system routing):** Klasör yapısı adresleri belirler. `src/app/urunler/page.tsx` → `/urunler`.
- **page.tsx:** Bir adresin kendine özgü içeriği. Bu dosya yoksa adres dışarıya açılmaz.
- **layout.tsx:** Sayfaların paylaştığı çerçeve. Sayfa `{children}` yerine yerleşir; sayfa geçişlerinde layout yeniden çizilmez.
- **Kök layout (root layout):** `src/app/layout.tsx`. Zorunludur, `<html>` ve `<body>` etiketlerini taşır.
- **public/:** Olduğu gibi sunulan dosyalar. `public/logo.png` → `/logo.png`.
- **Geliştirme sunucusu (dev server):** `npm run dev` ile açılır, `localhost:3000`'de çalışır; dosyayı kaydedince sayfa kendiliğinden güncellenir.
- **Turbopack:** Next.js'in kodu derleyip paketleyen aracı (bundler).

### Dil ve stil
- **TypeScript:** JavaScript'e tip ekler; hataları çalıştırmadan önce gösterir. `.tsx` = içinde JSX olan TypeScript dosyası.
- **Import alias (`@/`):** `tsconfig.json`'da tanımlı kısayol; `@/components/Button` yazınca `src/components/Button` anlaşılır.
- **Tailwind CSS:** Hazır küçük sınıflarla (`flex`, `px-4`, `text-lg`) stil yazma yöntemi. Ayrı CSS dosyası açmak gerekmez.
- **ESLint:** Kodu çalıştırmadan okuyup olası hataları ve kötü alışkanlıkları işaretleyen denetleyici (linter).

### Git ve GitHub
- **git:** Dosyaların geçmişini tutan sürüm kontrol sistemi.
- **Depo (repository):** Git'in izlediği klasör ve onun geçmişi.
- **Commit:** Değişikliklerin adlandırılmış bir anlık kaydı.
- **.gitignore:** Git'in görmezden geleceği dosyaların listesi (`node_modules`, `.env*`, `.next`).
- **.gitkeep:** Git boş klasörü izlemediği için klasörü görünür tutmak amacıyla konan boş dosya. Git'in özelliği değil, bir alışkanlık.
- **Remote / origin:** Deponun GitHub'daki kopyasının adresi. `origin` bu adrese verilen varsayılan isim.
- **Push:** Yerel commit'leri GitHub'a göndermek.
- **İç içe depo:** Bir alt klasörde `git init` yapınca o klasör kendi geçmişine sahip olur; üstteki depo onun içini izlemez.

### Proje kavramları
- **Ortam değişkeni (.env.local):** Şifre ve API anahtarı gibi gizli değerlerin durduğu dosya. Asla commit edilmez.
- **Mock veri:** Gerçek veritabanı yokken arayüzü göstermek için elle yazılmış sahte veri. Gerçek veri modeline uygun tutulursa sonra Prisma'ya geçiş kolay olur.
- **npm audit:** Kurulu paketlerdeki bilinen güvenlik açıklarını listeler. Uyarının yayına giden kodda mı yoksa yalnızca geliştirme aracında mı olduğuna bakmak gerekir.

## 8 Ekim 2026 — Şablon temizliği ve tasarım hazırlığı

- **Metadata:** `layout.tsx` ya da `page.tsx` içinden dışa aktarılan `metadata` nesnesi; Next.js bunu sayfanın `<title>` ve açıklama etiketlerine çevirir. Arama sonuçlarında görünen başlık buradan gelir.
- **`lang` özelliği:** `<html lang="tr">` tarayıcıya ve ekran okuyuculara sayfanın dilini söyler; doğru telaffuz, çeviri önerisi ve SEO için gerekir.
- **Font subset:** Bir yazı tipinin yalnızca gereken karakter grubunu indirmek. Türkçe'deki ğ, ş, ı, İ `latin` grubunda değil `latin-ext` grubundadır.
- **`next/image`:** Görseli otomatik boyutlandırıp modern biçimde sunan bileşen. `width`/`height` verilince sayfa yüklenirken yer ayrılır, içerik zıplamaz.
- **Skill (Claude Code):** İçinde `SKILL.md` talimat dosyası olan klasör; belirli bir iş türü için yazılmış el kitabı. İlgili iş gelince yüklenir. Kişisel olanlar `~/.claude/skills/`, projeye özel olanlar `.claude/skills/` altında durur.
- **Yazı logosu (wordmark):** Simge yerine yalnızca marka adının özel harflerle yazıldığı logo. GreenPower logosunda E harfi üç eğik çubukla çizilmiş.

## 8 Ekim 2026 — Site yapısı

- **Alt alan adı (subdomain):** Ana alan adının önüne eklenen bölüm: `magaza.alanadi.com`. Tarayıcı bunu ayrı bir site sayar; çerezler kendiliğinden paylaşılmaz.
- **Proxy (eski adıyla Middleware):** İstek sayfaya ulaşmadan önce çalışan kod; adresi yeniden yazabilir, yönlendirebilir, başlık ekleyebilir. Next.js 16'da dosyası `src/proxy.ts`. Projede tek bir tane olur.
- **Rewrite ile redirect farkı:** Redirect kullanıcıyı başka adrese gönderir, adres çubuğu değişir. Rewrite adres çubuğunu değiştirmeden arkada başka bir sayfayı gösterir; `magaza.alanadi.com/urun` → `/magaza/urun` böyle çalışacak.
- **Route group:** `src/app/(kurumsal)/` gibi parantezli klasör. Adrese yansımaz, yalnızca sayfaları gruplayıp ortak bir layout vermeye yarar.
- **Mobil öncelikli (mobile-first):** Önce dar ekran için tasarlayıp geniş ekranı üstüne eklemek. Tailwind'de öneksiz sınıf mobil içindir, `md:` ve `lg:` daha geniş ekranlarda devreye girer.
- **Plugin ve marketplace (Claude Code):** Plugin, skill ve komutları paket hâlinde kurmanın yolu; marketplace bu paketlerin listelendiği depo. `/plugin marketplace add` depoyu tanıtır, `/plugin install` paketi kurar.
