/**
 * supabase-client.js
 * ──────────────────────────────────────────────────────────────────
 * Inisialisasi Supabase JS Client untuk website NDA Official.
 *
 * CARA PENGGUNAAN:
 *   1. Buka Supabase Dashboard → Settings → API
 *   2. Salin "Project URL" dan "anon public" key
 *   3. Ganti nilai SUPABASE_URL dan SUPABASE_ANON_KEY di bawah ini
 * ──────────────────────────────────────────────────────────────────
 */

(function () {
  'use strict';

  // ── KONFIGURASI ─────────────────────────────────────────────────
  // Ganti placeholder di bawah ini dengan kredensial Supabase Anda
  const SUPABASE_URL = 'https://nuglupltmxxrsjisqjwn.supabase.co';
  const SUPABASE_ANON_KEY = 'sb_publishable_M4Ho3Zd8qdnusOxLwpwN6g_H9sD1_l5';
  // ────────────────────────────────────────────────────────────────

  // Validasi: jangan inisialisasi dengan placeholder
  if (
    SUPABASE_URL.includes('YOUR_PROJECT_ID') ||
    SUPABASE_ANON_KEY.includes('YOUR_SUPABASE_ANON_KEY')
  ) {
    console.info(
      '[NDA Supabase] Kredensial belum dikonfigurasi. ' +
      'Website tetap menggunakan gambar lokal (fallback mode).'
    );
    window.supabaseClient = null;
    return;
  }

  /**
   * Coba inisialisasi client.
   * Supabase CDN mengekspos dirinya via window.supabase (versi lama)
   * atau via window.supabase.createClient / supabase.createClient.
   */
  function tryInit() {
    // Cek semua kemungkinan eksposur dari CDN
    const supabaseLib =
      (typeof window.supabase !== 'undefined' && window.supabase) ||
      (typeof supabase !== 'undefined' && supabase) || // eslint-disable-line no-undef
      null;

    if (!supabaseLib || typeof supabaseLib.createClient !== 'function') {
      console.warn(
        '[NDA Supabase] Library @supabase/supabase-js tidak ditemukan. ' +
        'Pastikan CDN script ada SEBELUM supabase-client.js. ' +
        'Menggunakan gambar lokal (fallback mode).'
      );
      window.supabaseClient = null;
      return;
    }

    try {
      window.supabaseClient = supabaseLib.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      console.info('[NDA Supabase] ✅ Client berhasil diinisialisasi.');
      console.info('[NDA Supabase] Project URL:', SUPABASE_URL);
    } catch (err) {
      console.error('[NDA Supabase] ❌ Gagal inisialisasi client:', err);
      window.supabaseClient = null;
    }
  }

  tryInit();
})();
