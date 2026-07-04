/**
 * catalog-images.js
 * ──────────────────────────────────────────────────────────────────
 * Mengambil gambar katalog dari tabel `catalog_images` di Supabase
 * lalu mengganti src elemen <img> yang memiliki data-attributes:
 *   data-supabase-category  → nama kategori produk (nilai di HTML)
 *   data-supabase-index     → urutan gambar (1 = cover, 2,3,4 = galeri)
 *
 * FALLBACK: Jika Supabase tidak dikonfigurasi, gagal koneksi, atau
 * data tidak ditemukan, gambar lokal (src asli) tetap digunakan.
 *
 * STRUKTUR TABEL `catalog_images`:
 *   id             UUID / BIGINT  PRIMARY KEY
 *   category       TEXT           -- nama produk (sesuai nilai di CATEGORY_MAP bawah)
 *   position_index INT            -- 1 = cover katalog, 2..n = galeri detail
 *   image_url      TEXT           -- URL publik gambar
 *   alt_text       TEXT           -- (opsional) teks alt untuk aksesibilitas
 * ──────────────────────────────────────────────────────────────────
 */

(function () {
  'use strict';

  /**
   * CATEGORY_MAP
   * ─────────────────────────────────────────────────────────────────
   * Key   = nilai data-supabase-category yang ada di HTML
   * Value = nilai kolom `category` yang TERSIMPAN DI DATABASE Supabase
   *
   * Jika nama di database berbeda (mis: "Bergo Jersey L" bukan "bergo-l"),
   * sesuaikan value-nya di sini.
   * ─────────────────────────────────────────────────────────────────
   */
  const CATEGORY_MAP = {
    'paris-voal':       'Paris Voal',
    'paris-jepang':     'Paris Jepang',
    'ceruti':           'Pashmina Ceruty',
    'arabian-voil':     'Pashmina Arabian Voile',
    'rayon-basic-vol1': 'Pashmina Cotton Rayon',
    'rayon-basic-vol2': 'Pashmina Rayon V2',
    'pashmina-oval':    'Pashmina Rayon Oval',
    'bergo-m':          'Bergo Jersey M',
    'bergo-l':          'Bergo Jersey L',
  };

  // ── MAIN ──────────────────────────────────────────────────────────
  async function initCatalogImages() {
    // Supabase client belum tersedia → fallback mode
    if (!window.supabaseClient) {
      console.info('[NDA Supabase] supabaseClient belum siap. Gambar lokal digunakan.');
      return;
    }

    // Kumpulkan semua elemen <img> bertarget Supabase di halaman ini
    const targetImages = document.querySelectorAll('img[data-supabase-category]');
    if (targetImages.length === 0) return;

    // Tentukan nilai category DB yang diperlukan halaman ini (via CATEGORY_MAP)
    const neededDbCategories = new Set();
    // Peta balik: dbCategory → htmlCategory (untuk lookup nanti)
    const dbToHtmlCategory = {};

    targetImages.forEach(img => {
      const htmlCat = img.dataset.supabaseCategory;
      if (!htmlCat) return;
      const dbCat = CATEGORY_MAP[htmlCat] || htmlCat; // fallback ke nama yang sama
      neededDbCategories.add(dbCat);
      dbToHtmlCategory[dbCat] = htmlCat;
    });

    console.log('[NDA Supabase] Query category:', [...neededDbCategories]);

    // Fetch dari Supabase
    let data, error;
    try {
      const result = await window.supabaseClient
        .from('catalog_images')
        .select('category, position_index, image_url, alt_text')
        .in('category', [...neededDbCategories])
        .order('position_index', { ascending: true });

      data = result.data;
      error = result.error;
    } catch (fetchErr) {
      console.warn('[NDA Supabase] Exception saat fetch:', fetchErr);
      return;
    }

    if (error) {
      console.warn('[NDA Supabase] Error query:', error.message || error);
      return;
    }

    if (!data || data.length === 0) {
      console.warn(
        '[NDA Supabase] Data kosong. Pastikan:\n' +
        '  1. Nama tabel persis: catalog_images\n' +
        '  2. Nilai category di DB sesuai CATEGORY_MAP di catalog-images.js\n' +
        '  3. RLS policy mengizinkan SELECT untuk role anon\n' +
        '  Data yang dicari:', [...neededDbCategories]
      );
      return;
    }

    console.log(`[NDA Supabase] ✅ ${data.length} baris diterima:`, data);

    // Bangun lookup Map: "htmlCategory:position_index" → { image_url, alt_text }
    // Key menggunakan HTML category agar mudah dicocokkan dengan data-attributes
    const lookup = new Map();
    data.forEach(row => {
      const htmlCat = dbToHtmlCategory[row.category] || row.category;
      const key = `${htmlCat}:${row.position_index}`;
      lookup.set(key, {
        url: row.image_url,
        altText: row.alt_text || null,
      });
    });

    // Update setiap elemen <img>
    let updatedCount = 0;
    targetImages.forEach(img => {
      const htmlCat = img.dataset.supabaseCategory;
      const index = parseInt(img.dataset.supabaseIndex, 10) || 1;
      const key = `${htmlCat}:${index}`;
      const entry = lookup.get(key);

      if (!entry || !entry.url) return; // tidak ada data → biarkan gambar lokal

      // Simpan src lokal sebagai fallback
      img.dataset.fallbackSrc = img.src;

      // Terapkan URL dari Supabase
      img.src = entry.url;
      updatedCount++;

      if (entry.altText) {
        img.alt = entry.altText;
      }

      // Fallback jika URL Supabase gagal dimuat
      img.onerror = function () {
        console.warn(`[NDA Supabase] Gagal load gambar untuk key "${key}". Kembali ke gambar lokal.`);
        this.onerror = null;
        this.src = this.dataset.fallbackSrc;
      };
    });

    console.info(`[NDA Supabase] 🎉 ${updatedCount}/${targetImages.length} gambar diperbarui dari Supabase.`);
  }

  // Jalankan setelah DOM siap
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCatalogImages);
  } else {
    initCatalogImages();
  }
})();
