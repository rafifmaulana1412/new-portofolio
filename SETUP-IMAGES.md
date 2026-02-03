# Setup Project Images

Untuk menampilkan foto-foto project yang sebenarnya, ikuti langkah-langkah berikut:

## 📸 Langkah 1: Ambil Screenshot

Ambil screenshot dari website-website berikut:

### 1. Restoran Montevia

- **URL**: https://final-project-frontend-tau-seven.vercel.app/
- **Simpan sebagai**: `public/images/restoran-montevia.png`
- **Tips**: Ambil screenshot halaman utama yang menampilkan UI login yang elegant

### 2. Wedding Invitation - Rizky & Rizka

- **URL**: https://wedding-invitation-psi-lac.vercel.app/
- **Simpan sebagai**: `public/images/wedding-invitation.png`
- **Tips**: Ambil screenshot halaman utama dengan background hitam dan efek partikel emas

### 3. Yayasan Hidayatullah Gorontalo

- **Dari foto yang diberikan**: Website dengan header hijau dan konten tentang yayasan
- **Simpan sebagai**: `public/images/yayasan-hidayatullah.png`
- **Tips**: Crop dan resize foto yang sudah ada

### 4. Portal Iuran Internal Pendidikan Qur'ani

- **Dari foto yang diberikan**: Website dengan header hijau dan konten portal internal
- **Simpan sebagai**: `public/images/portal-quran.png`
- **Tips**: Crop dan resize foto yang sudah ada

## 🛠️ Langkah 2: Optimasi Gambar

1. **Resize gambar** ke ukuran 600x400px (aspect ratio 3:2)
2. **Compress gambar** menggunakan:
   - TinyPNG (https://tinypng.com/)
   - ImageOptim (untuk Mac)
   - GIMP atau Photoshop
3. **Target file size**: < 200KB per gambar

## 📁 Langkah 3: Replace Files

1. Buka folder `public/images/`
2. Replace file-file placeholder dengan screenshot asli:
   - `restoran-montevia.png`
   - `wedding-invitation.png`
   - `yayasan-hidayatullah.png`
   - `portal-quran.png`

## 🔄 Langkah 4: Refresh Website

Setelah mengganti gambar:

1. Refresh browser (Ctrl+F5 atau Cmd+Shift+R)
2. Gambar baru akan otomatis muncul di portfolio

## ✅ Hasil Akhir

Setelah setup selesai, project section akan menampilkan:

- ✅ Screenshot asli dari setiap project
- ✅ Informasi project yang akurat
- ✅ Link ke live demo dan GitHub
- ✅ Teknologi yang digunakan
- ✅ Status dan tingkat kesulitan

## 🎯 Tips Screenshot

### Untuk Website Live:

1. Buka website di browser
2. Set zoom ke 100%
3. Gunakan full screen mode
4. Screenshot area utama (header + content)
5. Crop jika perlu

### Untuk Foto Existing:

1. Crop bagian website saja
2. Remove background jika perlu
3. Enhance contrast dan brightness
4. Resize ke 600x400px

## 🚨 Troubleshooting

**Gambar tidak muncul?**

- Pastikan nama file exact sama
- Check file format (PNG/JPG)
- Clear browser cache
- Restart development server

**Gambar terlalu besar?**

- Compress dengan TinyPNG
- Resize ke 600x400px max
- Convert ke WebP jika perlu

**Kualitas gambar buruk?**

- Gunakan screenshot resolusi tinggi
- Avoid over-compression
- Maintain aspect ratio
