(function () {
    var overlay = document.getElementById('sber-promo-overlay');
    if (!overlay) {
        return;
    }

    var closeBtn = overlay.querySelector('.sber-promo-close');
    var backdrop = overlay.querySelector('.sber-promo-backdrop');

    function hideOverlay() {
        overlay.hidden = true;
        document.body.classList.remove('sber-promo-open');
    }

    function showOverlay() {
        overlay.hidden = false;
        document.body.classList.add('sber-promo-open');
        if (closeBtn) {
            closeBtn.focus();
        }
    }

    window.setTimeout(function () {
        showOverlay();
    }, 1400);

    if (closeBtn) {
        closeBtn.addEventListener('click', function (e) {
            e.preventDefault();
            hideOverlay();
        });
    }

    if (backdrop) {
        backdrop.addEventListener('click', hideOverlay);
    }

    var promoLink = overlay.querySelector('.sber-promo-link');
    if (promoLink) {
        promoLink.addEventListener('click', function () {
            hideOverlay();
        });
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !overlay.hidden) {
            hideOverlay();
        }
    });
})();
