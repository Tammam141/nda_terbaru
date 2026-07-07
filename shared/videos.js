(async function loadSupabaseVideos() {
    // Pastikan supabaseClient sudah tersedia
    if (!window.supabaseClient) {
        console.warn('[NDA Supabase] supabaseClient belum siap. Video fallback lokal akan digunakan.');
        return;
    }

    try {
        // Fetch data dari tabel website_videos yang is_active = true
        // Urutkan dari yang terbaru agar otomatis mengambil video yang baru diupload
        const { data: videos, error } = await window.supabaseClient
            .from('website_videos')
            .select('*')
            .eq('is_active', true)
            .order('created_at', { ascending: false });

        if (error) {
            console.error('[NDA Supabase] Error mengambil data video:', error);
            return;
        }

        if (!videos || videos.length === 0) {
            console.info('[NDA Supabase] Tidak ada video aktif di database. Menggunakan fallback lokal.');
            return;
        }

        // Cari semua elemen <video> yang memiliki atribut data-supabase-video
        const videoElements = document.querySelectorAll('video[data-supabase-video]');

        videoElements.forEach(videoEl => {
            const sectionName = videoEl.getAttribute('data-supabase-video');
            
            // Ambil video terbaru (index 0) secara otomatis tanpa mempedulikan kecocokan section_name
            const videoData = videos[0];
            
            if (videoData && videoData.video_url) {
                // Cek apakah ada tag <source> di dalam video
                const sourceEl = videoEl.querySelector('source');
                
                if (sourceEl) {
                    sourceEl.src = videoData.video_url;
                } else {
                    videoEl.src = videoData.video_url;
                }
                
                // Muat ulang video agar perubahan src diterapkan
                videoEl.load();
                
                // Coba untuk autoplay jika diperlukan (opsional, karena atribut autoplay biasanya sudah ada di tag HTML)
                const playPromise = videoEl.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.warn('[NDA Supabase] Auto-play dicegah oleh browser:', error);
                    });
                }
                
                console.info(`[NDA Supabase] Video untuk section '${sectionName}' berhasil diperbarui dari Supabase.`);
            }
        });

    } catch (err) {
        console.error('[NDA Supabase] Terjadi kesalahan saat memproses video dinamis:', err);
    }
})();
