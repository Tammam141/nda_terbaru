/**
 * ============================================================
 * NDA LOOKBOOK V3 — MASTER SCRIPT (Multi-Page Edition)
 * Features:
 *   - Bilingual dictionary (ID / EN) — semua halaman
 *   - Dark / Light theme + localStorage persistence
 *   - Multi-page: auto-deteksi halaman aktif untuk nav
 *   - Filterable catalog (katalog.html)
 *   - Navbar scroll behaviour + shadow
 *   - Mobile hamburger menu
 *   - Testimonial lightbox (index.html & about.html)
 *   - Scroll-reveal animations (IntersectionObserver)
 *   - Back-to-top button
 *   - Alert banner close / sessionStorage
 *   - Language dropdown close-on-outside-click
 * ============================================================
 */

'use strict';

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   BILINGUAL DICTIONARY
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const translations = {

    id: {
        /* â”€â”€ Alert Banner â”€â”€ */
        alert_text: '🌙 Promo Spesial Gajian: Diskon s.d 15% di Shopee! &nbsp;·&nbsp; <a href="https://shopee.co.id" target="_blank" rel="noopener noreferrer">Belanja Sekarang →</a>',

        /* â”€â”€ Navbar â”€â”€ */
        nav_home: 'Home',
        nav_katalog: 'Katalog',
        nav_about: 'Tentang Kami',
        nav_contact: 'Hubungi Kami',

        /* â”€â”€ Hero â”€â”€ */
        hero_badge: '✨  NDA Official Collection 2026',
        hero_title: 'Bring Beuty Feel <em>Comfort</em>',
        hero_desc: 'Koleksi hijab premium yang dirancang khusus untuk kenyamanan seharian dengan sentuhan elegan nan anggun — untuk muslimah modern yang berkarakter.',
        hero_btn_katalog: '<ph-icon name="sparkle" weight="fill"></ph-icon> Lihat Koleksi',
        hero_btn_wa: '<ph-icon name="tag" weight="fill"></ph-icon> Lihat Promo',

        /* â”€â”€ Keunggulan â”€â”€ */
        val_badge: 'Keunggulan Kami',
        val_title: 'Kenapa Memilih NDA',
        val_sub: 'Setiap detail dirancang untuk memberikan pengalaman berhijab terbaik yang tak terlupakan.',
        val_bahan_title: 'Bahan Premium',
        val_bahan_desc: 'Material terbaik kelas dunia — adem, lembut, tidak menerawang, dan awet.',
        val_desain_title: 'Desain Eksklusif',
        val_desain_desc: 'Modern, anggun, dan minimalis — cocok untuk segala aktivitas Anda.',
        val_harga_title: 'Harga Terbaik',
        val_harga_desc: 'Kualitas premium yang tetap ramah di kantong untuk semua wanita.',

        /* â”€â”€ Catalog (home teaser + katalog.html) â”€â”€ */
        detail_back: '<i class="fas fa-arrow-left me-2"></i> Kembali ke Katalog',
        detail_spec_title: '<i class="fas fa-list-ul me-2"></i> Spesifikasi Produk',
        detail_spec_material: 'Material:',
        detail_spec_size: 'Ukuran:',
        detail_spec_colors: 'Pilihan Warna:',
        detail_store_title: '<i class="fas fa-store me-2"></i> Info Toko & Catatan',
        detail_store_hours_title: 'Waktu Operasional Toko:',
        detail_store_hours_desc: 'Senin - Sabtu, 09.00 - 19.00 WIB.',
        detail_store_shipping: 'Order di bawah jam 17.00 dikirim hari yang sama.',
        detail_store_notes_title: 'Catatan Penting:',
        detail_store_notes_1: 'Warna produk tidak 100% sama dikarenakan faktor cahaya.',
        detail_store_notes_2: 'Toleransi ukuran 2-5 cm.',
        detail_store_notes_3: '<strong>Wajib video unboxing</strong> untuk klaim retur/refund.',
        prod_arabian_desc_long: "Pashmina Arabian Voile hadir untuk Anda yang mengutamakan kenyamanan, keanggunan, dan kualitas. Terbuat dari bahan premium yang lembut, ringan, adem, tidak mudah kusut, dan sangat mudah dibentuk.",
        prod_bergo_l_desc_long: "Hijab instan jersey ukuran L yang menutup dada secara sempurna dengan bahan adem dan nyaman. Cocok untuk aktivitas sehari-hari, dari olahraga hingga acara semi-formal.",
        prod_bergo_m_desc_long: "Pernah nggak sih kamu merasa ribet pakai hijab yang perlu banyak jarum? Nah, Bergo Non Pet berbahan jersey premium ini bisa jadi solusinya. Dengan bahan yang lembut, adem, dan elastis, bergo ini jatuhnya rapi tapi tetap nyaman dipakai seharian. Ukuran M pas untuk kamu yang suka tampilan sederhana dan ringkas.",
        prod_ceruty_desc_long: "Hijab Ceruty Babydoll Premium adalah pilihan tepat untuk kamu yang ingin tampil stylish dan modern. Dengan bahan yang lembut, bertekstur pasir halus, dan jatuh (flowy), hijab ini sangat mudah dibentuk menjadi berbagai gaya, baik itu tampilan casual maupun formal.",
        prod_paris_jepang_desc_long: "Tampilkan pesona anggun dengan Hijab Segiempat Paris Jepang Premium! Dibuat dari bahan Paris Jepang berkualitas tinggi, hijab ini memiliki tekstur lembut, ringan, dan nyaman dipakai sepanjang hari.",
        prod_paris_voal_desc_long: "Bosan dengan hijab yang mudah kusut? Hijab Segiempat Paris Voal kami adalah jawabannya! Bahannya yang halus dan tidak mudah kusut membuat Anda tetap tampil fresh sepanjang hari. Cocok untuk digunakan sehari-hari maupun acara formal.",
        prod_rayon2_desc_long: "Bayangkan memakai hijab yang bukan hanya indah dipandang, tetapi juga memberikan rasa nyaman setiap saat. Dibuat dari bahan cotton rayon premium yang lembut, ringan, dan adem, pashmina ini terasa begitu natural saat menyentuh kulit.",
        prod_rayon_oval_desc_long: "Desain pashmina oval di bagian belakang yang syar'i, flowy, dan penuh elegance. Pashmina ini memberikan coverage maksimal sekaligus tampilan yang anggun dan modern.",
        prod_rayon1_desc_long: "Ingin tampil kekinian dengan hijab yang nyaman? Pashmina kaos/cotton rayon kami adalah pilihan yang tepat! Bahannya yang ringan dan lembut cocok untuk aktivitas sehari-hari.",
        btn_lihat_lainnya: 'LIHAT LAINNYA',
        btn_buy_shopee: '<i class="fas fa-shopping-bag me-2"></i> Beli di Shopee',
        btn_buy_tiktok: '<i class="fab fa-tiktok me-2"></i> Beli di TikTok',
        promo_btn: 'order sekarang',
        promo_close: 'Tutup ✕',
        cat_badge: 'Koleksi Pilihan',
        cat_preview_title: 'PRODUK UNGGULAN',
        cat_preview_sub: 'Cuplikan dari koleksi terbaik kami — pesan langsung via TikTok Shop dan Shopee.',
        cat_filter_all: 'Semua',
        cat_filter_segi: 'Segi Empat',
        cat_filter_pash: 'Pashmina',
        cat_filter_bergo: 'Bergo',
        no_results: 'Tidak ada produk ditemukan dalam kategori ini.',
        home_cat_more: 'Lihat Semua Koleksi →',

        /* â”€â”€ Sub-page Headers â”€â”€ */
        page_catalog_title: 'Katalog Produk',
        page_catalog_desc: 'Temukan inspirasi gaya Anda dari koleksi hijab premium kami — pesan langsung via WhatsApp atau Shopee.',
        page_about_title: 'Tentang NDA Official',
        page_about_desc: 'Kenyamanan, kualitas, dan keanggunan dalam satu balutan — lahir dari hati untuk menemani langkah hijrah Anda.',
        page_contact_title: 'Siap Membantu Anda',
        page_contact_desc: 'Pilih salah satu saluran kontak di bawah ini untuk terhubung dengan tim admin NDA Official.',

        /* ── Product Descriptions ── */
        prod_paris_voal_desc: 'Ringan, tegak di dahi, dan sangat mudah diatur untuk gaya sehari-hari yang segar dan elegan.',
        prod_paris_jepang_desc: 'Lembut, serat rapat, dan memberikan tampilan formal yang bersih dengan kesan premium.',
        prod_ceruty_desc: 'Tekstur kulit jeruk yang anggun, flowy, mewah, dan menawan — sempurna untuk acara spesial.',
        prod_arabian_desc: 'Bahan voile arabian premium yang tidak licin, dingin menyentuh kulit, dan penuh berkelas.',
        prod_rayon1_desc: 'Bahan rayon basic berkualitas Vol.1 dengan gramasi besar dan jahit tepi rapi — pilihan seharian terbaik.',
        prod_rayon2_desc: 'Sangat adem, menyerap keringat dengan baik, jatuh sempurna, dan super nyaman untuk hari aktif Anda.',
        prod_rayon_oval_desc: "Desain pashmina oval di bagian belakang yang syar'i, flowy, dan penuh elegance.",
        prod_bergo_m_desc: 'Hijab instan jersey ukuran M yang praktis, stretch, cocok untuk olahraga dan santai harian.',
        prod_bergo_l_desc: 'Hijab instan jersey ukuran L yang menutup dada secara sempurna dengan bahan adem dan nyaman.',

        /* ── CTA Buttons ── */
        btn_wa: '<ph-icon name="whatsapp-logo" weight="fill"></ph-icon> WhatsApp',
        btn_shopee: '<ph-icon name="storefront" weight="fill"></ph-icon> Shopee',
        btn_tiktok: '<ph-icon name="tiktok-logo" weight="fill"></ph-icon> TikTok',

        /* ── Timeline ── */
        timeline_badge: 'Tentang Kami',
        timeline_title: 'Linimasa Perjalanan NDA',
        timeline_sub: 'Dari sebuah mimpi sederhana, menuju keanggunan yang menyentuh hati muslimah Indonesia.',
        home_journey_title: 'Perjalanan NDA',
        home_journey_sub: 'Dari sebuah mimpi sederhana menuju keanggunan yang menyentuh hati.',
        home_journey_more: 'Baca Selengkapnya →',
        time_year_2023: '2023',
        time_year_2024: '2024',
        time_year_2025: '2025',
        time_year_2026: '2026',
        time_2023_title: 'Awal Mula',
        time_2023_desc: 'Perancangan konsep, riset bahan, serta pematangan kualitas produk untuk menciptakan standar kenyamanan baru.',
        time_2024_title: 'Koleksi Perdana',
        time_2024_desc: 'Peluncuran resmi Pashmina Cotton Rayon dan Segiempat Paris Voal yang langsung mendapat sambutan hangat.',
        time_2025_title: 'Menjangkau Dunia',
        time_2025_desc: 'Transformasi digital melalui website resmi untuk melayani pelanggan muslimah di seluruh penjuru Indonesia dan dunia.',
        time_2026_title: 'Melanjutkan Harmoni Kenyamanan',
        time_2026_desc: 'Di tahun ini, fokus kami tetap sama: konsisten menyatukan keanggunan visual dengan kenyamanan mutlak di setiap helai hijab NDA. Kami terus berkomitmen menjaga kualitas terbaik agar setiap produk yang Anda kenakan selalu menjadi simbol rasa percaya diri yang menemani hari-hari aktif Anda.',

        /* ── About Page ── */
        about_badge: 'Cerita Kami',
        about_title: 'Cerita Di Balik Keindahan',
        about_desc1: 'NDA lahir dari keinginan sederhana: menghadirkan hijab yang nyaman dipakai seharian tanpa mengorbankan gaya modern. Kami percaya setiap wanita berhak tampil percaya diri dengan balutan busana yang menjaga nilai-nilai kesopanan.',
        about_desc2: 'Kami berkomitmen menjadi sahabat setia perjalanan hijrah Anda dengan kualitas bahan premium yang terpercaya, standar jahitan yang rapi, dan sentuhan kelembutan eksklusif di setiap produk kami.',
        about_cta: 'Lihat Koleksi Kami →',

        /* ── Testimonials ── */
        testi_badge: 'Ulasan Nyata',
        testi_title: 'Kata Mereka',
        testi_sub: 'Ulasan jujur dari pelanggan setia yang telah merasakan kenyamanan produk kami.',

        /* ── Contact ── */
        kontak_badge: 'Hubungi Kami',
        kontak_title: 'Kami Hadir Untuk Anda',
        kontak_sub: 'Hubungi tim admin kami untuk layanan konsultasi, pertanyaan produk, atau informasi lebih lanjut.',
        kontak_wa_title: 'WhatsApp',
        kontak_wa_sub: 'Chat dengan Admin',
        kontak_ig_title: 'Instagram',
        kontak_shopee_title: 'Shopee',
        kontak_shopee_sub: 'Kunjungi Toko Kami',
        kontak_tiktok_title: 'TikTok',
        contact_ig_sub: 'Lihat Koleksi & Story',
        contact_shopee_sub: 'Gratis Ongkir Tersedia',
        contact_tiktok_sub: 'TikTok Shop & Video',
        contact_email_title: 'Email',

        /* ── FAQ ── */
        faq_badge: 'FAQ',
        faq_title: 'Pertanyaan yang Sering Diajukan',
        faq_q1: 'Bagaimana cara memesan',
        faq_a1: 'Klik tombol "Shopee" atau "TikTok" di halaman produk untuk melakukan pemesanan secara langsung.',
        faq_q2: 'Berapa lama pengiriman',
        faq_a2: 'Pesanan diproses dalam 1x24 jam. Estimasi pengiriman 2–5 hari kerja tergantung lokasi Anda.',
        faq_q3: 'Apakah ada pilihan warna lain',
        faq_a3: 'Ya! Hubungi admin kami via WhatsApp untuk melihat variasi warna dan stok terbaru yang tersedia.',

        /* ── Home Contact CTA ── */
        home_cta_title: 'Ada Pertanyaan? Kami Siap Membantu!',
        home_cta_sub: 'Hubungi tim admin kami untuk konsultasi produk, pertanyaan ukuran, atau info pembelian.',
        home_cta_btn_wa: '<ph-icon name="whatsapp-logo" weight="fill"></ph-icon> Chat via WhatsApp',
        home_cta_btn_more: 'Lihat Semua Kontak',

        /* ── Footer ── */
        footer_tagline: 'Bring Beuty Feel Comfort.',
        footer_copyright: '© 2026 NDA Official. Seluruh Hak Cipta Dilindungi.',
    },

    /* ══════════════════════════════════════════════════════════════════
       ENGLISH
       ══════════════════════════════════════════════════════════════════ */
    en: {
        /* ── Alert Banner ── */
        alert_text: '🌙 Special Payday Promo: Up to 15% Off on Shopee! &nbsp;·&nbsp; <a href="https://shopee.co.id" target="_blank" rel="noopener noreferrer">Shop Now →</a>',

        /* ── Navbar ── */
        nav_home: 'Home',
        nav_katalog: 'Catalog',
        nav_about: 'About Us',
        nav_contact: 'Contact',

        /* ── Hero ── */
        hero_badge: '✨  NDA Official Collection 2026',
        hero_title: 'Bring Beuty Feel <em>Comfort</em>',
        hero_desc: 'A premium hijab collection crafted for all-day comfort with an elegant, graceful touch — for the modern, spirited muslimah.',
        hero_btn_katalog: '<ph-icon name="sparkle" weight="fill"></ph-icon> Browse Collection',
        hero_btn_wa: '<ph-icon name="tag" weight="fill"></ph-icon> View Promo',

        /* ── Keunggulan ── */
        val_badge: 'Our Advantages',
        val_title: 'Why Choose NDA',
        val_sub: "Every detail is crafted to deliver the ultimate hijab-wearing experience you won't forget.",
        val_bahan_title: 'Premium Materials',
        val_bahan_desc: "World-class fabrics — cool, soft, non-see-through, and long-lasting.",
        val_desain_title: 'Exclusive Designs',
        val_desain_desc: "Modern, graceful, and minimalist — perfect for any occasion.",
        val_harga_title: 'Best Value',
        val_harga_desc: "Premium quality that remains wallet-friendly for every woman.",

        /* ── Catalog ── */
        detail_back: '<i class="fas fa-arrow-left me-2"></i> Back to Catalog',
        detail_spec_title: '<i class="fas fa-list-ul me-2"></i> Product Specifications',
        detail_spec_material: 'Material:',
        detail_spec_size: 'Size:',
        detail_spec_colors: 'Color Options:',
        detail_store_title: '<i class="fas fa-store me-2"></i> Store Info & Notes',
        detail_store_hours_title: 'Store Hours:',
        detail_store_hours_desc: 'Monday - Saturday, 09.00 - 19.00 WIB.',
        detail_store_shipping: 'Orders placed before 17.00 are shipped the same day.',
        detail_store_notes_title: 'Important Notes:',
        detail_store_notes_1: 'Product color may slightly vary due to lighting sources.',
        detail_store_notes_2: 'Size tolerance of 2-5 cm.',
        detail_store_notes_3: '<strong>Unboxing video is required</strong> for return/refund claims.',
        prod_arabian_desc_long: "Pashmina Arabian Voile is here for those who prioritize comfort, elegance, and quality. Made from premium material that is soft, lightweight, cool, wrinkle-resistant, and very easy to style.",
        prod_bergo_l_desc_long: "L-sized instant jersey hijab that perfectly covers the chest with cool and comfortable material. Perfect for daily activities, from sports to semi-formal events.",
        prod_bergo_m_desc_long: "Ever felt it's a hassle to wear hijabs that need a lot of pins? Well, this premium jersey Non-Pet Bergo is the solution. With soft, cool, and stretchy material, this bergo drapes neatly yet remains comfortable to wear all day. Size M is perfect for those who prefer a simple and compact look.",
        prod_ceruty_desc_long: "Premium Ceruty Babydoll Hijab is the right choice for those who want to look stylish and modern. With a soft, fine sand texture, and flowy material, this hijab is very easy to style into various looks, whether casual or formal.",
        prod_paris_jepang_desc_long: "Showcase an elegant charm with the Premium Paris Japan Square Hijab! Made from high-quality Paris Japan material, this hijab has a soft, lightweight texture and is comfortable to wear all day.",
        prod_paris_voal_desc_long: "Tired of easily wrinkled hijabs? Our Paris Voal Square Hijab is the answer! The smooth and wrinkle-resistant material keeps you looking fresh all day long. Suitable for daily wear as well as formal events.",
        prod_rayon2_desc_long: "Imagine wearing a hijab that is not only beautiful to look at but also provides comfort at all times. Made from premium cotton rayon that is soft, lightweight, and cool, this pashmina feels so natural against the skin.",
        prod_rayon_oval_desc_long: "An oval pashmina design at the back that is syar'i, flowy, and full of elegance. This pashmina provides maximum coverage while offering an elegant and modern look.",
        prod_rayon1_desc_long: "Want to look trendy with a comfortable hijab? Our cotton rayon pashmina is the perfect choice! Its lightweight and soft material is perfect for everyday activities.",
        btn_lihat_lainnya: 'VIEW MORE',
        btn_buy_shopee: '<i class="fas fa-shopping-bag me-2"></i> Buy on Shopee',
        btn_buy_tiktok: '<i class="fab fa-tiktok me-2"></i> Buy on TikTok',
        promo_btn: 'order now',
        promo_close: 'Close ✕',
        cat_badge: 'Curated Collection',
        cat_preview_title: 'BEST SELLER',
        cat_preview_sub: 'A glimpse of our best collection — order directly via TikTok Shop and Shopee.',
        cat_filter_all: 'All',
        cat_filter_segi: 'Square Scarf',
        cat_filter_pash: 'Pashmina',
        cat_filter_bergo: 'Bergo',
        no_results: 'No products found in this category.',
        home_cat_more: 'View All Collection →',

        /* ── Sub-page Headers ── */
        page_catalog_title: 'Product Catalog',
        page_catalog_desc: 'Find your style inspiration from our premium hijab collection — order via WhatsApp or Shopee.',
        page_about_title: 'About NDA Official',
        page_about_desc: 'Comfort, quality, and elegance in one wrap — born from the heart to accompany your hijab journey.',
        page_contact_title: "We're Here to Help",
        page_contact_desc: 'Choose one of the contact channels below to connect with our NDA Official admin team.',

        /* ── Product Descriptions ── */
        prod_paris_voal_desc: 'Lightweight, structured — effortlessly styled for a fresh, elegant everyday look.',
        prod_paris_jepang_desc: 'Soft, densely woven — delivering a clean, formal appearance with a premium feel.',
        prod_ceruty_desc: 'Graceful orange-peel texture — flowy, luxurious, and captivating for special occasions.',
        prod_arabian_desc: 'Premium Arabian voile — non-slippery, cool to the touch, and full of refined class.',
        prod_rayon1_desc: 'Quality rayon fabric Vol.1 with excellent weight and neatly finished edges — your best everyday choice.',
        prod_rayon2_desc: 'Extremely cool, great sweat absorption, perfectly draped — supremely comfortable for your active days.',
        prod_rayon_oval_desc: 'Oval-cut pashmina at the back — modest, flowy, and full of elegance.',
        prod_bergo_m_desc: 'Instant jersey hijab size M — practical, stretchy, ideal for sports and casual activities.',
        prod_bergo_l_desc: 'Instant jersey hijab size L — full chest coverage with cool, comfortable fabric.',

        /* â”€â”€ CTA Buttons â”€â”€ */
        btn_wa: '<ph-icon name="whatsapp-logo" weight="fill"></ph-icon> WhatsApp',
        btn_shopee: '<ph-icon name="storefront" weight="fill"></ph-icon> Shopee',

        /* â”€â”€ Timeline â”€â”€ */
        timeline_badge: 'About Us',
        timeline_title: 'NDA Brand Journey',
        timeline_sub: 'From a simple dream, towards elegance that touches hearts everywhere.',
        home_journey_title: 'NDA Journey',
        home_journey_sub: 'From a simple dream towards elegance that touches hearts.',
        home_journey_more: 'Read More →',
        time_year_2023: '2023',
        time_year_2024: '2024',
        time_year_2025: '2025',
        time_year_2026: '2026',
        time_2023_title: 'The Beginning',
        time_2023_desc: 'Conceptualizing the brand, researching materials, and refining product quality to establish a new standard of comfort.',
        time_2024_title: 'First Collection',
        time_2024_desc: 'Official launch of Pashmina Cotton Rayon and Square Paris Voal — immediately received with warmth and love.',
        time_2025_title: 'Reaching the World',
        time_2025_desc: 'Digital transformation through the official website to serve Muslim women across Indonesia and the globe.',
        time_2026_title: 'Continuing the Harmony of Comfort',
        time_2026_desc: "This year, our focus remains unchanged: consistently uniting visual elegance with absolute comfort in every thread of NDA hijab. We remain committed to maintaining the highest quality, so every piece you wear becomes a symbol of confidence accompanying your most active days.",

        /* â”€â”€ About Page â”€â”€ */
        about_badge: 'Our Story',
        about_title: 'The Story Behind the Beauty',
        about_desc1: 'NDA was born from a simple desire: to bring hijabs that are comfortable to wear all day without sacrificing modern style. We believe every woman deserves to look confident while maintaining values of modesty.',
        about_desc2: "We are committed to being your loyal companion on your hijab journey — with trusted premium fabric quality, neat stitching standards, and an exclusive softness in every product we make.",
        about_cta: 'View Our Collection →',

        /* â”€â”€ Testimonials â”€â”€ */
        testi_badge: 'Real Reviews',
        testi_title: 'What They Say',
        testi_sub: 'Honest reviews from loyal customers who have felt the comfort of our products.',

        /* â”€â”€ Contact â”€â”€ */
        kontak_badge: 'Get In Touch',
        kontak_title: "We're Here For You",
        kontak_sub: 'Reach our admin team for consultations, product inquiries, or any information you need.',
        kontak_wa_title: 'WhatsApp',
        kontak_wa_sub: 'Chat with Admin',
        kontak_ig_title: 'Instagram',
        kontak_shopee_title: 'Shopee',
        kontak_shopee_sub: 'Visit Our Store',
        kontak_tiktok_title: 'TikTok',
        contact_ig_sub: 'View Collection & Stories',
        contact_shopee_sub: 'Free Shipping Available',
        contact_tiktok_sub: 'TikTok Shop & Videos',
        contact_email_title: 'Email',

        /* â”€â”€ FAQ â”€â”€ */
        faq_badge: 'FAQ',
        faq_title: 'Frequently Asked Questions',
        faq_q1: 'How do I place an order',
        faq_a1: 'Click the "Shopee" or "TikTok" button on the product page to place your order directly.',
        faq_q2: 'How long does shipping take',
        faq_a2: 'Orders are processed within 24 hours. Estimated delivery is 2â€“5 business days depending on your location.',
        faq_q3: 'Are there other color options',
        faq_a3: 'Yes! Contact our admin via WhatsApp to see the available color variations and latest stock.',

        /* â”€â”€ Home Contact CTA â”€â”€ */
        home_cta_title: 'Have Questions? We\'re Ready to Help!',
        home_cta_sub: 'Contact our admin team for product consultations, sizing questions, or purchase information.',
        home_cta_btn_wa: '<ph-icon name="whatsapp-logo" weight="fill"></ph-icon> Chat via WhatsApp',
        home_cta_btn_more: 'See All Contacts',

        /* â”€â”€ Footer â”€â”€ */
        footer_tagline: 'Bring Beuty Feel Comfort.',
        footer_copyright: '© 2026 NDA Official. All Rights Reserved.',
    }
};

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   STATE
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
let currentLang = localStorage.getItem('nda-lang') || 'id';
let currentTheme = localStorage.getItem('nda-theme') || 'light';

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   DOM REFERENCES
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const htmlEl = document.documentElement;
const alertBanner = document.getElementById('alert-banner');
const alertCloseBtn = document.getElementById('alert-close-btn');
const navbar = document.getElementById('main-navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const langBtn = document.getElementById('lang-btn');
const langMenu = document.getElementById('lang-menu');
const currentLangLabel = document.getElementById('current-lang-label');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const backToTop = document.getElementById('back-to-top');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   LANGUAGE ENGINE
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function applyTranslations(lang) {
    const dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n], [data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n') || el.getAttribute('data-i18n-html');
        if (dict[key] !== undefined) {
            el.innerHTML = dict[key];
        }
    });

    htmlEl.lang = lang;
    if (currentLangLabel) currentLangLabel.textContent = lang.toUpperCase();

    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
    });

    // Update catalog count text if present
    const catalogGrid = document.getElementById('catalog-grid');
    if (catalogGrid) updateCatalogCount(catalogGrid);
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('nda-lang', lang);
    applyTranslations(lang);
    closeLangMenu();
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   THEME ENGINE
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function applyTheme(theme) {
    htmlEl.setAttribute('data-bs-theme', theme);
    if (themeIcon) {
        themeIcon.setAttribute('name', theme === 'dark' ? 'sun' : 'moon');
    }
}

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('nda-theme', currentTheme);
    applyTheme(currentTheme);
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   ALERT BANNER
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function initAlertBanner() {
    if (sessionStorage.getItem('nda-alert-closed') === 'true') {
        alertBanner && alertBanner.classList.add('hidden');
        return;
    }
    alertCloseBtn && alertCloseBtn.addEventListener('click', () => {
        alertBanner.classList.add('hidden');
        sessionStorage.setItem('nda-alert-closed', 'true');
    });
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   NAVBAR — SCROLL SHADOW
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function initNavbar() {
    window.addEventListener('scroll', () => {
        if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 10);
        if (backToTop) backToTop.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   HAMBURGER / MOBILE MENU
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function initMobileMenu() {
    if (!hamburger || !mobileMenu) return;

    hamburger.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.toggle('open');
        hamburger.classList.toggle('open', isOpen);
        hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    mobileMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            hamburger.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });

    document.addEventListener('click', e => {
        if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.remove('open');
            hamburger.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   LANGUAGE DROPDOWN
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function closeLangMenu() {
    if (!langMenu) return;
    langMenu.classList.remove('show');
    if (langBtn) langBtn.setAttribute('aria-expanded', 'false');
}

function initLangDropdown() {
    if (!langBtn || !langMenu) return;

    langBtn.addEventListener('click', e => {
        e.stopPropagation();
        const isOpen = langMenu.classList.toggle('show');
        langBtn.setAttribute('aria-expanded', String(isOpen));
    });

    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.addEventListener('click', () => setLanguage(opt.getAttribute('data-lang')));
        opt.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setLanguage(opt.getAttribute('data-lang'));
            }
        });
    });

    document.addEventListener('click', e => {
        const dropdown = document.getElementById('lang-dropdown');
        if (dropdown && !dropdown.contains(e.target)) closeLangMenu();
    });
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   CATALOG FILTER (katalog.html only)
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function updateCatalogCount(grid) {
    const countEl = document.getElementById('catalog-count');
    if (!countEl || !grid) return;
    const total = grid.querySelectorAll('.product-card:not(.hidden)').length;
    countEl.textContent = currentLang === 'id'
        ? `Menampilkan ${total} produk`
        : `Showing ${total} products`;
}

function initCatalogFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const catalogGrid = document.getElementById('catalog-grid');
    const noResults = document.getElementById('no-results');
    if (!filterBtns.length || !catalogGrid) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');
            const cards = catalogGrid.querySelectorAll('.product-card');
            let count = 0;

            cards.forEach(card => {
                const match = filter === 'all' || card.getAttribute('data-category') === filter;
                card.classList.toggle('hidden', !match);
                if (match) count++;
            });

            if (noResults) noResults.classList.toggle('show', count === 0);
            updateCatalogCount(catalogGrid);
        });
    });

    updateCatalogCount(catalogGrid);
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   SCROLL REVEAL
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function initReveal() {
    const revealEls = document.querySelectorAll('.reveal');
    if (!revealEls.length || typeof IntersectionObserver === 'undefined') {
        revealEls.forEach(el => el.classList.add('visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealEls.forEach(el => observer.observe(el));
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   TESTIMONIAL LIGHTBOX
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function initLightbox() {
    const testiCards = document.querySelectorAll('.testi-card');
    if (!testiCards.length || !lightbox) return;

    testiCards.forEach(card => {
        const open = (e) => {
            if (e.type === 'keydown' && e.key !== 'Enter' && e.key !== ' ') return;
            e.preventDefault();
            lightboxImg.src = card.querySelector('img').src;
            lightboxImg.alt = card.querySelector('img').alt;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        };
        card.addEventListener('click', open);
        card.addEventListener('keydown', open);
    });

    const close = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        lightboxImg.src = '';
    };

    if (lightboxClose) lightboxClose.addEventListener('click', close);
    lightbox.addEventListener('click', e => { if (e.target === lightbox) close(); });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) close();
    });
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   BACK TO TOP
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function initBackToTop() {
    if (!backToTop) return;
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   SMOOTH SCROLL (anchor links within same page)
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            const targetId = link.getAttribute('href').slice(1);
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   DYNAMIC SCROLL-PADDING & VIEWPORT HEIGHT
   Compensates for variable alert banner + navbar height
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function initDynamicViewport() {
    // CSS custom property for true viewport height (fixes iOS 100vh issue)
    const setVh = () => {
        document.documentElement.style.setProperty('--real-vh', `${window.innerHeight * 0.01}px`);
    };

    // Dynamic scroll-padding-top = navbar height (for sticky nav)
    const updateScrollPadding = () => {
        if (!navbar) return;
        const navH = navbar.getBoundingClientRect().height;
        document.documentElement.style.scrollPaddingTop = `${navH + 8}px`;
    };

    setVh();
    updateScrollPadding();

    window.addEventListener('resize', () => {
        setVh();
        updateScrollPadding();
    }, { passive: true });

    // Update when alert banner is closed
    if (alertCloseBtn) {
        alertCloseBtn.addEventListener('click', () => {
            setTimeout(updateScrollPadding, 320);
        });
    }
}


/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   HERO PARALLAX (index.html only)
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function initParallax() {
    const heroBgImg = document.querySelector('.hero-bg img');
    if (!heroBgImg || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    window.addEventListener('scroll', () => {
        heroBgImg.style.transform = `translateY(${window.scrollY * 0.28}px)`;
    }, { passive: true });
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   INIT — Bootstrap everything on DOMContentLoaded
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Apply stored theme immediately (prevents flash)
    applyTheme(currentTheme);

    // 2. Apply stored language
    applyTranslations(currentLang);

    // 3. Init shared modules (work on any page)
    initAlertBanner();
    initNavbar();
    initMobileMenu();
    initLangDropdown();
    initDynamicViewport(); // dynamic scroll-padding + real viewport height
    initReveal();
    initBackToTop();
    initSmoothScroll();

    // 4. Conditional modules
    initCatalogFilter();  // safe — checks for catalog-grid
    initLightbox();       // safe — checks for testi-card
    initParallax();       // safe — checks for .hero-bg img
    initPromoModal();     // checks for promoModal

    // 5. Theme toggle
    if (themeToggle) themeToggle.addEventListener('click', toggleTheme);

    // 6. Keunggulan slider (mobile)
    initKeunggulanSlider();

    // 6.5 Products slider (desktop 2-card, mobile 1-card)
    initProductsSlider();

    // 7. Bottom nav active state
    initBottomNav();
});

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   KEUNGGULAN SLIDER (mobile only)
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function initKeunggulanSlider() {
    const wrapper = document.getElementById('keunggulan-slider');
    const track = document.getElementById('keunggulan-track');
    const dotsEl = document.getElementById('keunggulan-dots');
    if (!wrapper || !track) return;

    const slides = track.querySelectorAll('.keunggulan-card');
    if (!slides.length) return;

    let current = 0;
    let startX = 0;
    let isDragging = false;
    const total = slides.length;

    // Build dots
    if (dotsEl) {
        dotsEl.innerHTML = '';
        slides.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.className = 'keunggulan-dot' + (i === 0 ? ' active' : '');
            dot.setAttribute('aria-label', `Slide ${i + 1}`);
            dot.addEventListener('click', () => goTo(i));
            dotsEl.appendChild(dot);
        });
    }

    function goTo(idx) {
        current = (idx + total) % total;
        track.style.transform = `translateX(-${current * 100}%)`;
        if (dotsEl) {
            dotsEl.querySelectorAll('.keunggulan-dot').forEach((d, i) => {
                d.classList.toggle('active', i === current);
            });
        }
    }

    // Touch swipe
    wrapper.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
        isDragging = true;
    }, { passive: true });

    wrapper.addEventListener('touchend', e => {
        if (!isDragging) return;
        const diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) {
            goTo(diff > 0 ? current + 1 : current - 1);
        }
        isDragging = false;
    }, { passive: true });

    // Auto-advance every 4s on mobile
    if (window.matchMedia('(max-width: 639px)').matches) {
        let autoplay = setInterval(() => goTo(current + 1), 4000);
        wrapper.addEventListener('touchstart', () => {
            clearInterval(autoplay);
            autoplay = null;
        }, { passive: true });
    }
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   BOTTOM NAV ACTIVE STATE
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function initBottomNav() {
    const bottomNav = document.getElementById('bottom-nav');
    if (!bottomNav) return;

    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    bottomNav.querySelectorAll('.bottom-nav-item').forEach(item => {
        const href = item.getAttribute('href') || '';
        const page = href.split('/').pop();
        if (page === currentPath ||
            (currentPath === '' && page === 'index.html') ||
            (currentPath === 'index.html' && page === 'index.html')) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   PROMO MODAL (POP-UP IKLAN)
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function initPromoModal() {
    const promoModal = document.getElementById('promoModal');
    const promoClose = document.getElementById('promo-close');

    if (!promoModal || !promoClose) return;

    // Tampilkan modal setiap kali halaman dimuat (setelah delay singkat)
    setTimeout(() => {
        promoModal.classList.add('show');
    }, 300); // 0.3 detik delay

    promoClose.addEventListener('click', () => {
        promoModal.classList.remove('show');
    });
}

/* ────────────────────────────────────────────────────────────────
   PRODUCTS SLIDER (BEST SELLER)
   ──────────────────────────────────────────────────────────────── */
function initProductsSlider() {
    const track = document.getElementById('products-track');
    const prevBtn = document.getElementById('prod-prev-btn');
    const nextBtn = document.getElementById('prod-next-btn');
    const dotsEl = document.getElementById('products-dots');
    
    if (!track) return;
    
    const cards = track.querySelectorAll('.product-card');
    if (!cards.length) return;
    
    let current = 0;
    const total = cards.length;
    
    function getVisibleCount() {
        return window.innerWidth >= 768 ? 2 : 1;
    }
    
    function getMaxIndex() {
        return Math.max(0, total - getVisibleCount());
    }
    
    function buildDots() {
        if (!dotsEl) return;
        dotsEl.innerHTML = '';
        const maxIdx = getMaxIndex();
        
        if (maxIdx <= 0) return;
        
        for (let i = 0; i <= maxIdx; i++) {
            const dot = document.createElement('button');
            dot.className = 'products-dot' + (i === 0 ? ' active' : '');
            dot.setAttribute('aria-label', `Slide ${i + 1}`);
            dot.addEventListener('click', () => goTo(i));
            dotsEl.appendChild(dot);
        }
    }
    
    function goTo(idx) {
        const maxIdx = getMaxIndex();
        current = Math.min(Math.max(0, idx), maxIdx);
        
        const visibleCount = getVisibleCount();
        
        if (visibleCount === 2) {
            track.style.transform = `translateX(calc(-${current} * (50% + var(--space-lg) / 2)))`;
        } else {
            track.style.transform = `translateX(calc(-${current} * (100% + var(--space-lg))))`;
        }
        
        if (dotsEl) {
            dotsEl.querySelectorAll('.products-dot').forEach((d, i) => {
                d.classList.toggle('active', i === current);
            });
        }
        
        if (prevBtn) prevBtn.disabled = current === 0;
        if (nextBtn) nextBtn.disabled = current === maxIdx;
    }
    
    // Autoplay auto-sliding logic (every 3.5 seconds)
    let autoplayInterval = setInterval(() => {
        const maxIdx = getMaxIndex();
        if (current >= maxIdx) {
            goTo(0); // loop back to start
        } else {
            goTo(current + 1);
        }
    }, 3500);

    const stopAutoplay = () => {
        clearInterval(autoplayInterval);
    };

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            stopAutoplay();
            goTo(current - 1);
        });
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            stopAutoplay();
            goTo(current + 1);
        });
    }
    
    window.addEventListener('resize', () => {
        buildDots();
        goTo(current);
    }, { passive: true });
    
    let startX = 0;
    let isDragging = false;
    
    track.addEventListener('touchstart', e => {
        stopAutoplay();
        startX = e.touches[0].clientX;
        isDragging = true;
    }, { passive: true });
    
    track.addEventListener('touchend', e => {
        if (!isDragging) return;
        const diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) {
            goTo(diff > 0 ? current + 1 : current - 1);
        }
        isDragging = false;
    }, { passive: true });

    if (dotsEl) {
        dotsEl.addEventListener('click', stopAutoplay);
    }
    
    buildDots();
    goTo(0);
}

/* ================================================================
   ================================================================
   SUPABASE INTEGRATION MODULE
   Appended — runs independently on index.html only.
   Does NOT modify any existing functions above.
   ================================================================
   ================================================================ */

/* â”€â”€ Supabase Configuration â”€â”€ */
// TODO: Replace with your actual Supabase project URL and Anon Key
const SUPABASE_URL = 'https://nuglupltmxxrsjisqjwn.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_M4Ho3Zd8qdnusOxLwpwN6g_H9sD1_l5';

/* â”€â”€ State for dynamic catalog â”€â”€ */
let sbProducts = [];         // Cache of fetched products
let sbCurrentFilter = 'all'; // Active category filter

/* â”€â”€ Initialize Supabase client (only if SDK is loaded) â”€â”€ */
let supabaseClient = null;
if (typeof supabase !== 'undefined' && supabase.createClient) {
    supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

/* â”€â”€ Translation keys specific to Supabase module â”€â”€ */
if (translations && translations.id) {
    translations.id.loading_text = 'Memuat produk...';
    translations.id.modal_gallery_loading = 'Memuat galeri...';
}
if (translations && translations.en) {
    translations.en.loading_text = 'Loading products...';
    translations.en.modal_gallery_loading = 'Loading gallery...';
}

/* ================================================================
   SUPABASE: Fetch Promotions & Modals (Dynamic)
   ================================================================ */
async function initPromotions() {
    if (!supabaseClient) {
        console.warn('[Supabase] Client not initialized.');
        return;
    }

    try {
        const { data, error } = await supabaseClient
            .from('web_settings')
            .select('*')
            .eq('id', 1)
            .single();

        if (error) throw error;
        if (!data) return;

        // 1. TOP ALERT BANNER
        const banner = document.getElementById('alert-banner');
        const promoTextEl = document.getElementById('supabase-promo-text');

        if (banner && promoTextEl) {
            if (data.is_banner_active) {
                const text = currentLang === 'id' ? data.banner_text_id : data.banner_text_en;
                const linkText = currentLang === 'id' ? 'Belanja Sekarang →' : 'Shop Now →';
                const anchorHtml = `<a href="${data.banner_link || '#'}" target="_blank" rel="noopener noreferrer">${linkText}</a>`;

                promoTextEl.innerHTML = `${text || ''} &nbsp;&middot;&nbsp; ${anchorHtml}`;
                banner.classList.remove('hidden');
            } else {
                banner.classList.add('hidden');
            }
        }

        // 2. WELCOME POP-UP MODAL
        if (data.is_popup_active) {
            const promoModal = document.getElementById('promoModal');
            if (promoModal) {
                const promoImg = promoModal.querySelector('.promo-modal-img');
                const promoLink = promoModal.querySelector('a');

                if (promoImg && data.popup_image_url) {
                    promoImg.src = data.popup_image_url;
                }
                if (promoLink && data.popup_target_link) {
                    promoLink.href = data.popup_target_link;
                }

                // Show after 1.5s
                setTimeout(() => {
                    promoModal.classList.add('show');
                    promoModal.setAttribute('aria-hidden', 'false');
                }, 1500);

                // Close logic
                const closeBtn = document.getElementById('promo-close');
                if (closeBtn) {
                    closeBtn.addEventListener('click', (e) => {
                        e.preventDefault();
                        promoModal.classList.remove('show');
                        promoModal.setAttribute('aria-hidden', 'true');
                    });
                }

                promoModal.addEventListener('click', (e) => {
                    if (e.target === promoModal) {
                        promoModal.classList.remove('show');
                        promoModal.setAttribute('aria-hidden', 'true');
                    }
                });
            }
        }
    } catch (err) {
        console.error('[Supabase] web_settings fetch failed:', err.message);
    }
}

/* ================================================================
   SUPABASE: Initialize on DOMContentLoaded
   ================================================================ */
document.addEventListener('DOMContentLoaded', () => {
    initPromotions();
});
