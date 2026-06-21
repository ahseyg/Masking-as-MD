<p align="center">
  <a href="https://community.obsidian.md/plugins/masking-as-md"><img src="https://img.shields.io/badge/Obsidian-Y%C3%BCkle-7c3aed?logo=obsidian&logoColor=white" alt="Install from Obsidian"/></a>
  <img src="https://img.shields.io/github/stars/ahseyg/Masking-as-MD?style=flat&color=3498db" alt="Stars"/>
  <img src="https://img.shields.io/github/issues/ahseyg/Masking-as-MD?style=flat&color=e74c3c" alt="Issues"/>
  <img src="https://img.shields.io/github/license/ahseyg/Masking-as-MD?style=flat&color=2ecc71" alt="License"/>
  <img src="https://img.shields.io/github/v/release/ahseyg/Masking-as-MD?style=flat&color=f39c12" alt="Version"/>
</p>

<p align="center">
  <a href="README.md">English</a> · <a href="https://github.com/ahseyg/Masking-as-MD/issues">Hata Bildir</a>
</p>

# Obsidian için Masking as MD

Obsidian'ı markdown olmayan dosyalarınız için güçlü bir kod editörüne dönüştürün. Bu eklenti `.py`, `.js`, `.html`, `.css` ve `.json` gibi dosyaları sözdizimi vurgulama (syntax highlighting) ve satır numaraları ile doğrudan kasanızın içinde açmanıza, görüntülemenize ve düzenlemenize olanak tanır.

**Açık kaynak** · MIT Lisansı · Katkılara açık

---

## Özellikler

- **Yerel Kod Editörü Deneyimi** — Obsidian'ı betik (script) ve yapılandırma dosyalarınız için hafif bir IDE'ye dönüştürün
- **Sözdizimi Vurgulama (Syntax Highlighting)** — Popüler programlama ve biçimlendirme dilleri için yerleşik CodeMirror desteği
- **Özelleştirilebilir Arayüz** — Sözdizimi vurgulamayı, satır numaralarını ve kelime kaydırmayı açıp kapatın
- **Tipografi Kontrolü** — Editör yazı tipi boyutunu dilediğiniz gibi ayarlayın
- **Sorunsuz Entegrasyon** — Desteklenen dosyalar standart Markdown dosyaları gibi açılır veya herhangi bir dosyaya sağ tıklayıp "Metin Olarak Aç"ı seçebilirsiniz

---

## Neden Masking as MD?

Obsidian Markdown için mükemmeldir, ancak zaman zaman kasanızdan ayrılmadan betikleri, yapılandırma dosyalarını veya web belgelerini düzenlemeniz gerekebilir. Harici editörlere güvenmek yerine, Masking as MD doğrudan Obsidian'a entegre edilmiş tam teşekküllü bir CodeMirror 6 editörü sunar.

Dosyalar güvenli bir şekilde düz metin olarak açılır. Herhangi bir Markdown dönüştürmesi yapılmaz ve siz manuel olarak düzenleyip kaydetmediğiniz sürece dosyalarınız asla değiştirilmez.

---

## Desteklenen Diller

Eklenti aşağıdaki diller için yerleşik sözdizimi vurgulama desteği sunar:
- **JavaScript / TypeScript** (`.js`, `.jsx`, `.ts`, `.tsx`)
- **Python** (`.py`)
- **HTML** (`.html`, `.htm`)
- **CSS / SCSS / LESS** (`.css`, `.scss`, `.less`)
- **JSON** (`.json`)
- **Markdown** (`.md`, `.markdown` - bu eklenti ile açılmaya zorlanırsa)

---

## Yapılandırma Referansı

Eklentiyi yapılandırmak için **Ayarlar → Masking as MD** bölümüne gidin:

| Ayar | Açıklama |
| :--- | :--- |
| **File Extensions (Dosya Uzantıları)** | İşlenecek uzantıların virgülle ayrılmış listesi (örn. `py, js, html, css, txt`). *Yeniden başlatma gerektirir.* |
| **Syntax Highlighting (Sözdizimi Vurgulama)** | CodeMirror sözdizimi vurgulamasını açın veya kapatın. |
| **Line Numbers (Satır Numaraları)** | Editörün sol tarafında satır numaralarını gösterin. |
| **Word Wrap (Kelime Kaydırma)** | Yatay kaydırmayı önlemek için uzun kod satırlarını kaydırın. |
| **Font Size (Yazı Tipi Boyutu)** | Kaydırıcıyı kullanarak tercih ettiğiniz editör yazı tipi boyutunu ayarlayın. |

---

## Kurulum

### Topluluk Eklentileri (Önerilen)

1. **Ayarlar → Topluluk Eklentileri (Community Plugins)**
2. Güvenli Modu (Restricted Mode) kapatın
3. Gözat (Browse) → **Masking as MD** aratın
4. Yükle (Install) → Etkinleştir (Enable)

Veya doğrudan açın: [community.obsidian.md/plugins/masking-as-md](https://community.obsidian.md/plugins/masking-as-md)

### Manuel Kurulum

1. [En son sürümden](https://github.com/ahseyg/Masking-as-MD/releases) `main.js`, `manifest.json`, `styles.css` dosyalarını indirin
2. Kasanızda (Vault) `VaultKlasoru/.obsidian/plugins/masking-as-md/` dizinini oluşturun
3. İndirdiğiniz dosyaları bu klasöre kopyalayın
4. Ayarlar → Topluluk Eklentileri sekmesinden eklentiyi etkinleştirin

---

## Katkıda Bulunma

- **Hata bildirimleri:** [Bir issue açın](https://github.com/ahseyg/Masking-as-MD/issues)
- **Özellik talepleri:** [Bir issue açın](https://github.com/ahseyg/Masking-as-MD/issues)
- **Pull request'ler:** Fork → Branch → Code → PR

Bu eklentiyi faydalı bulursanız, [yıldız vermeyi](https://github.com/ahseyg/Masking-as-MD) düşünebilirsiniz.

---

## Geliştirme

Eklentiyi kaynak kodundan derlemek isterseniz:

1. Bu depoyu (repository) klonlayın.
2. Bağımlılıkları yüklemek için `npm install` komutunu çalıştırın.
3. Eklentiyi derlemek için `npm run build` komutunu çalıştırın.
4. Çıktı dosyalarını Obsidian kasanızın eklenti klasörüne kopyalayın.

---

## Lisans

MIT — Ayrıntılar için [LICENSE](LICENSE) dosyasına bakın.

---
<p align="center">
  <a href="https://github.com/ahseyg">ahseyg</a> tarafından geliştirilmiştir
</p>
