# Terminal komutları

İlk kez kullanılan her komut: ne işe yarar, bayrakları ne demek, bu projeden bir örnek.

## 8 Ekim 2026 — Proje kurulumu

### Sürüm ve konum kontrolü
- **`node -v`**, **`npm -v`**, **`git --version`**: Kurulu sürümü yazdırır. `-v` / `--version` = "version".
  - Örnek: `node -v` → `v24.2.0`
- **`which <komut>`**: Bir komutun bilgisayarda hangi dosyadan çalıştığını gösterir.
  - Örnek: `which node` → `/opt/homebrew/bin/node` (Node'un Homebrew ile kurulduğunu buradan anladık)

### Dosya ve klasör
- **`ls -la`**: Klasörün içeriğini listeler. `-l` = ayrıntılı liste (boyut, tarih), `-a` = gizli dosyalar (adı `.` ile başlayanlar) dahil.
  - Örnek: `ls -la` ile klasörde `CLAUDE.md` dışında `.claude/` olduğunu gördük.
- **`cd <klasör>`**: O klasöre geçer ("change directory").
- **`mkdir -p <klasör>`**: Klasör oluşturur. `-p` = aradaki eksik klasörleri de oluştur, klasör zaten varsa hata verme.
  - Örnek: `mkdir -p src/components src/data/mock docs` (`data` klasörü yoktu, `-p` onu da açtı)
- **`touch <dosya>`**: Boş dosya oluşturur (dosya varsa yalnızca tarihini günceller).
  - Örnek: `touch src/components/.gitkeep`
- **`mv -n <kaynak> <hedef>`**: Taşır veya yeniden adlandırır. `-n` = hedefte aynı adlı dosya varsa üzerine yazma.
  - Örnek: geçici klasörde oluşan proje dosyalarını GreenPower klasörüne taşıdık; `-n` sayesinde `CLAUDE.md` güvendeydi.
- **`rmdir <klasör>`**: Yalnızca **boş** klasörü siler; içi doluysa reddeder (bu yüzden `rm -r`'den güvenlidir).
- **`cat <dosya>`**: Dosyanın içeriğini yazdırır.
- **`wc -l <dosya>`**: Satır sayısını verir. `-l` = "lines".
  - Örnek: `wc -l CLAUDE.md` → 68 (dosyanın değiştiğini böyle fark ettik)

- **`cp <kaynak> <hedef>`**: Dosyayı kopyalar; kaynak yerinde kalır.
  - Örnek: `cp gp-dark.png public/logo-dark.png` (logoyu kopyalarken adını da değiştirdik)
- **`rm <dosya>`**: Dosyayı siler. Geri dönüşüm kutusuna gitmez, geri alınamaz; bu yüzden dosya adlarını tek tek yazmak `rm *`'dan güvenlidir.
  - Örnek: `rm public/next.svg public/vercel.svg` (şablonun örnek görselleri)
- **`tail -n 15 <dosya>`**: Dosyanın son 15 satırını gösterir. `-n` = satır sayısı. Uzun günlüklerde son olanları görmek için.
- **`grep -o '<kalıp>' <dosya>`**: Dosyada kalıba uyan yerleri bulur. `-o` = tüm satırı değil yalnızca eşleşen parçayı yaz, `-i` = büyük/küçük harf ayırma.
  - Örnek: eski sitenin HTML'inden renk kodlarını ve görsel adreslerini ayıkladık.

### npm
- **`npm run lint`**: ESLint'i çalıştırır; sorun yoksa hiçbir şey yazdırmaz.
- **`npx <paket>`**: Bir paketi kalıcı kurmadan tek seferlik çalıştırır.
  - Örnek: `npx create-next-app@latest greenpower --ts --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm --skip-install --disable-git --yes`
  - `@latest` = en güncel sürüm · `--ts` = TypeScript · `--tailwind` = Tailwind CSS · `--eslint` = ESLint · `--app` = App Router · `--src-dir` = kod `src/` altında · `--import-alias "@/*"` = `@/` kısayolu · `--use-npm` = paket yöneticisi npm · `--skip-install` = paketleri şimdi indirme · `--disable-git` = git deposu açma · `--yes` = kalan sorulara varsayılan cevabı ver
- **`npm install`**: `package.json`'da yazan paketleri `node_modules/` içine indirir ve `package-lock.json`'ı yazar.
- **`npm audit`**: Kurulu paketlerdeki bilinen güvenlik açıklarını listeler. (`npm audit fix --force` kırıcı sürüm değişikliği yapabilir; bu projede çalıştırılmadı.)
- **`npm run <script>`**: `package.json`'daki `scripts` bölümünden bir komutu çalıştırır.
  - Örnek: `npm run dev` → `next dev` çalışır, site `http://localhost:3000`'de açılır. Durdurmak için `Ctrl + C`.

### Ağ
- **`curl <adres>`**: Tarayıcı açmadan bir adrese istek atar.
  - Örnek: `curl -s -o /dev/null -w "HTTP %{http_code}\n" http://localhost:3000` → `HTTP 200`
  - `-s` = sessiz (ilerleme çubuğu yok) · `-o /dev/null` = gelen sayfayı ekrana basma, at · `-w` = sonunda şu bilgiyi yaz (burada durum kodu)

### git
- **`git init -b main`**: Bulunduğun klasörde yeni depo açar. `-b main` = ilk dalın adı `main` olsun.
- **`git status --short`**: Değişen dosyaları kısa biçimde listeler. `A` = eklendi, `M` = değişti, `??` = izlenmiyor.
- **`git add -A`**: Tüm değişiklikleri (yeni, değişen, silinen) bir sonraki commit için hazırlar. `-A` = "all". `.gitignore`'daki dosyalar dahil edilmez.
- **`git check-ignore -v <dosya>`**: Bir dosyanın yok sayılıp sayılmadığını, sayılıyorsa hangi kural yüzünden olduğunu gösterir. `-v` = kuralı ve satır numarasını da yaz.
  - Örnek: `git check-ignore -v .env.local` → `.gitignore:34:.env*`
- **`git commit -m "mesaj"`**: Hazırlanan değişiklikleri kaydeder. `-m` = mesajı satır içinde ver (editör açma). `-q` = özet çıktıyı bastır.
- **`git log --stat`**: Commit geçmişini gösterir. `--stat` = her commit'te hangi dosyada kaç satır değişti.
- **`git rev-parse --show-toplevel`**: İçinde bulunduğun deponun kök klasörünü yazdırır.
  - Örnek: bununla klasörün önce ev klasörü deposuna ait olduğunu, `git init` sonrası kendi deposuna geçtiğini doğruladık.
- **`git ls-remote <adres>`**: Uzak depodaki dalları listeler; hiçbir şey indirmez. Çıktı boşsa depo boştur.
- **`git remote add origin <adres>`**: Uzak deponun adresini `origin` adıyla kaydeder.
- **`git remote -v`**: Kayıtlı uzak adresleri listeler. `-v` = adresleri de göster.
- **`git push -u origin main`**: `main` dalındaki commit'leri `origin`'e gönderir. `-u` = bu dalı uzak dalla eşleştir; sonraki seferlerde yalnızca `git push` yeterli.
