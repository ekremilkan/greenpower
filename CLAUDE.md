# GreenPower Jeneratör — E-ticaret ve Servis Platformu

## Proje

GreenPower Jeneratör (Bursa) için e-ticaret ve servis platformu. Firma jeneratör satıyor, kuruyor, yedek parça ve servis veriyor.

Kapsam:

- Yedek parça ve küçük jeneratör satışı (sepet, sipariş, ödeme)
- Büyük jeneratörlerde fiyat yerine "Teklif iste" formu
- Servis talebi formu
- Admin paneli: siparişler, ürün/fiyat/stok/fotoğraf yönetimi, teklif ve servis talepleri, e-posta bildirimleri
- Markanın kendi renkleri ve logosu kullanılır; mobil görünüm çok önemli

Stack: Next.js (App Router), TypeScript, PostgreSQL, Prisma, Tailwind CSS.
Tek geliştirici: Ekrem. Teslim hedefi: 4 Aralık 2026.

## Şu anki aşama

**Aşama 1 — Müşteri demosu.** Gerçek backend yok. Sahte (mock) verilerle tıklanabilir bir vitrin ve admin paneli görünümü.

- Mock veriler `src/data/mock/` altında, gerçek veri modeline uygun şekilde dursun ki sonra Prisma'ya geçiş kolay olsun.
- Ödeme, e-posta, giriş gibi şeyler bu aşamada sadece görünüm olarak var.
- Demoda olan her şey sonraki aşamada atılmayacak, üstüne inşa edilecek.

Aşama 2: veritabanı ve gerçek akışlar. Aşama 3: ödeme, bildirimler, yayına alma.

## Benimle nasıl çalışmalısın (en önemli kısım)

Bu proje benim için hem müşteri işi hem öğrenme projesi. Mülakatlarda bu kodu baştan sona anlatabilmem gerekiyor.

- **Türkçe açıkla**, kod ve commit mesajları İngilizce.
- Önemli her kararda kısaca anlat: **neden böyle**, **başka hangi yollar vardı**, **neye dikkat etmeliyim**.
- İş mantığı, veri yapısı, hata yönetimi gibi gerçek karar içeren küçük parçaları **bana bırak** (`TODO(human)`). Rutin iskelet kodu sen yaz.
- Büyük bir değişiklikten önce kısa bir plan göster, onay bekle.
- Kavram geçtiğinde (server component, hydration, ORM, migration, transaction...) bir-iki cümleyle ne olduğunu söyle.
- Hata çıktığında önce hatayı birlikte okuyalım, sonra düzelt.

## Mod ve effort rehberliği

Ben Claude Code'un modlarını henüz iyi bilmiyorum. Her yeni göreve başlamadan önce, işe girişmeden, tek satırla hangi mod ve effort'ta olmam gerektiğini söyle; şu anki ayarım uygun değilse değiştirmemi bekle. Kurallar:

- **Manuel:** kurulum, yeni paket ekleme, git/GitHub işlemleri, veritabanı migration'ları, silme içeren her şey.
- **Edit automatically:** günlük geliştirme (sayfa, bileşen, stil, küçük düzeltme).
- **Plan:** yeni ve büyük bir özelliğe başlarken (sepet, sipariş akışı, admin paneli, ödeme, giriş sistemi, veritabanı şeması). Önce planı yaz, ben onaylayınca Edit automatically'ye geçmemi söyle.
- **Auto:** önerme.
- **Effort Medium:** varsayılan. **High:** veritabanı şeması, ödeme, güvenlik/yetkilendirme, iki denemede çözülmeyen hatalar.
- Output style her zaman **Learning** olmalı; değilse hatırlat.

Örnek: "Bu iş için **Plan** modu + **High** effort öneriyorum, geçince devam edelim."

## Terminal komutları

Terminal komutlarını da öğrenmek istiyorum. Her komutu çalıştırmadan önce tek satırla açıkla: komut ne yapıyor, kullandığın bayraklar (-y, -m, --save-dev gibi) ne anlama geliyor. Bir komutu ilk kez kullandığında docs/terminal.md dosyasına ekle: komut, ne işe yaradığı, bu projeden bir örnek. Aynı komut tekrar geçtiğinde açıklamayı kısalt.

## Not dosyaları

Her oturum sonunda şunları güncelle:

- `docs/kararlar.md` — tarih, karar, neden, alternatifler (kısa madde)
- `docs/ogrendiklerim.md` — bu oturumda geçen kavramlar, 1–2 cümlelik açıklamalarla

## Kurallar

- Gizli anahtarlar sadece `.env.local` içinde; asla commit etme.
- Küçük, anlamlı commit'ler. Commit mesajı: `feat: ...`, `fix: ...`, `chore: ...`
- Bileşenler `src/components/`, sayfalar `src/app/`. Tekrarlanan UI'ı bileşene çıkar.
- Her sayfa mobilde test edilmeden "bitti" sayılmaz.
