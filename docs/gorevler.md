# Görevler

Aşama 1 — Müşteri demosu. Gerçek backend yok; her şey mock veriyle ve görünüm olarak.
Teslim hedefi: 4 Aralık 2026.

## 0. Hazırlık

- [x] Next.js projesini kur, GitHub'a yükle
- [x] Şablon kalıntılarını temizle, logoları ekle
- [x] Site yapısı ve kapsam kararlarını yaz (CLAUDE.md, kararlar.md)
- [x] frontend-design skill'ini kur (`.claude/skills/frontend-design/`)
- [ ] Tasarım yönünü seç, `docs/tasarim.md`'ye yaz (yeşilin tonu, yazı tipleri, boşluk, şekil dili)

## 1. Temel

- [ ] Marka renklerini ve yazı tiplerini `globals.css` içindeki `@theme`'e ekle
- [ ] Klasör yapısı: `src/app/(kurumsal)/`, `src/app/magaza/`, `src/app/admin/`, her birinin kendi layout'u
- [ ] Mağaza adresi üreten yardımcı fonksiyon (alt alan adına geçiş tek yerden yapılsın)
- [ ] Kurumsal header: logo, menü, "Online Mağaza" butonu, mobil menü
- [ ] Mağaza header: logo, arama, sepet, kurumsal siteye dönüş
- [ ] Footer: iletişim, bağlantılar, sosyal medya, bülten alanı (görünüm)
- [ ] Yer tutucu görsel bileşeni (gerçek fotoğrafla tek yerden değişsin)

## 2. Kurumsal site

- [ ] Ana sayfa: hero
- [ ] Ana sayfa: ürün grupları (Dizel Jeneratörler, Mobil Jeneratörler, Işık Kulesi)
- [ ] Ana sayfa: hizmetler (satış, kurulum, servis, yedek parça)
- [ ] Ana sayfa: rakamlar (20+ yıl, 750+ proje, 1800+ müşteri; müşteriyle doğrulanacak)
- [ ] Ana sayfa: iletişim çağrısı
- [ ] Hakkımızda
- [ ] İletişim (adres, telefon, harita, form görünümü)
- [ ] Servis talebi formu (görünüm)
- [ ] Teklif iste formu (görünüm)

## 3. Mock veri

- [ ] Tipler: ürün, kategori, marka, kullanım amacı — **fiyat modu tipini Ekrem yazacak (`TODO(human)`)**
- [ ] Yedek parça kategorileri: AVR, kontrol modülü, aktüatör, sensör, ATS, akü şarj cihazı vb.
- [ ] Markalar
- [ ] Örnek ürünler: üç fiyat modunun her birinden yeterince (fiyatlı, stok sorunuz, teklif iste)
- [ ] Örnek siparişler, teklif talepleri, servis talepleri (admin paneli için)

## 4. Mağaza

- [ ] Mağaza ana sayfası: kategoriler + kullanım amacı kısayolları (Ev, İş yeri, Şantiye, Endüstriyel)
- [ ] Kategori sayfası: ürün listesi, marka filtresi
- [ ] Parça koduyla arama
- [ ] Ürün kartı: fiyat moduna göre üç farklı görünüm
- [ ] Ürün detay: fiyatlı → sepete ekle; stok sorunuz → WhatsApp/iletişim; teklif iste → teklif formu
- [ ] Sepet (görünüm, tarayıcıda tutulur)
- [ ] Sipariş adımları: adres, ödeme (görünüm), onay
- [ ] Boş durumlar: boş sepet, sonuç bulunamadı, sayfa bulunamadı

## 5. Admin paneli (görünüm)

- [ ] Giriş ekranı (görünüm)
- [ ] Admin layout: yan menü, mobil uyum
- [ ] Siparişler listesi ve detay
- [ ] Ürünler: liste, fiyat/stok/fotoğraf düzenleme formu
- [ ] Teklif talepleri
- [ ] Servis talepleri

## 6. Demo öncesi

- [ ] Tüm sayfaları mobilde test et
- [ ] Her sayfanın başlık ve açıklaması (metadata)
- [ ] Demoyu müşterinin açabileceği bir adrese yükle

## Müşteriden istenecekler

- [ ] Logonun vektör (SVG) sürümü
- [ ] Gerçek kurulum ve ürün fotoğrafları
- [ ] Ürün listesi: parça kodları, markalar, fiyatlar
- [ ] İletişim bilgileri, WhatsApp numarası
- [ ] Rakamların ve müşteri yorumlarının doğrulanması
- [ ] Alan adı ve mağaza alt alan adı kararı

## Sonraki aşamalar için notlar

- **kVA güç hesaplayıcı:** cihaz seç → gereken güç → uygun jeneratörler + teklif iste.
- **Alt alan adı:** mağazayı `src/proxy.ts` ile alt alan adına bağla (Aşama 3). Sepet ve oturum çerezlerinin iki alan adı arasında paylaşımı o zaman çözülecek.
- **Aşama 2:** PostgreSQL + Prisma, gerçek sipariş/teklif/servis akışları.
- **Aşama 3:** ödeme, e-posta bildirimleri, yayına alma.
