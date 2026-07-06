/**
 * reviews.js
 * Script untuk mengambil gambar testimoni/ulasan Shopee secara dinamis dari Supabase.
 */

(async function initReviews() {
    console.log("[Reviews] Inisialisasi pengambilan data testimoni...");
    // Cari container testimoni
    const testiContainer = document.getElementById('testi-grid');
    if (!testiContainer) {
        console.log("[Reviews] Container testi-grid tidak ditemukan di halaman ini.");
        return; // Tidak ada container di halaman ini
    }

    // Pastikan Supabase client tersedia (sudah di-load sebelumnya)
    if (!window.supabaseClient) {
        console.warn("[Reviews] Supabase client tidak tersedia. Menggunakan testimoni bawaan (fallback).");
        return;
    }

    try {
        // Ambil data ulasan dari Supabase
        const { data, error } = await window.supabaseClient
            .from('shopee_reviews')
            .select('*')
            .eq('is_active', true)
            .order('position_index', { ascending: true });

        if (error) {
            throw error;
        }

        // Jika data kosong, biarkan fallback HTML bawaan tetap tampil
        if (!data || data.length === 0) {
            console.log("[Reviews] Data ulasan dari Supabase kosong. Menggunakan testimoni bawaan (fallback).");
            return;
        }

        // Data berhasil di-load dan tidak kosong. Hapus fallback HTML (kosongkan container)
        testiContainer.innerHTML = '';

        // Render elemen img ke dalam container
        data.forEach((review, index) => {
            const imageUrl = review.image_url || review.image || '';

            if (imageUrl) {
                const card = document.createElement('div');
                // Tambahkan class 'reveal' dan 'visible' agar langsung tampil tanpa menunggu scroll
                card.className = 'testi-card reveal visible'; 
                card.setAttribute('tabindex', '0');
                card.setAttribute('aria-label', `Buka ulasan ${index + 1}`);

                const img = document.createElement('img');
                img.src = imageUrl;
                img.alt = `Ulasan Pelanggan ${index + 1}`;
                img.loading = 'lazy';

                const overlay = document.createElement('div');
                overlay.className = 'testi-overlay';

                card.appendChild(img);
                card.appendChild(overlay);
                testiContainer.appendChild(card);
            }
        });
        
        console.log("[Reviews] Berhasil memuat " + data.length + " testimoni dari Supabase dan memperbarui DOM.");

        // Jika menggunakan script animasi seperti scroll reveal di script utama, 
        // kita bisa me-trigger kembali animasi (opsional) atau panggil Lightbox re-init jika diperlukan.

    } catch (error) {
        console.error("[Reviews] Terjadi error saat mengambil ulasan dari Supabase:", error);
        // Jika error, biarkan fallback HTML bawaan yang tampil.
    }
})();
