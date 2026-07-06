const fs = require('fs');
const file = 'script.js';
const lines = fs.readFileSync(file, 'utf8').split('\n');
const newLines = lines.slice(0, 790);
const newContent = `/* ================================================================
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
                const linkText = currentLang === 'id' ? 'Belanja Sekarang \u2192' : 'Shop Now \u2192';
                const anchorHtml = \`<a href="\${data.banner_link || '#'}" target="_blank" rel="noopener noreferrer">\${linkText}</a>\`;
                
                promoTextEl.innerHTML = \`\${text || ''} &nbsp;&middot;&nbsp; \${anchorHtml}\`;
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
`;

fs.writeFileSync(file, newLines.join('\n') + '\n' + newContent, 'utf8');
console.log('Successfully replaced end of script.js with initPromotions');
