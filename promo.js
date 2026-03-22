(function () {
    var overlay = document.getElementById('creative-overlay');
    if (!overlay) {
        return;
    }

    var closeBtn = overlay.querySelector('.creative-close');
    var backdrop = overlay.querySelector('.creative-backdrop');

    function hideOverlay() {
        overlay.hidden = true;
        document.body.classList.remove('creative-modal-open');
    }

    function showOverlay() {
        overlay.hidden = false;
        document.body.classList.add('creative-modal-open');
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

    var creativeLink = overlay.querySelector('.creative-link');
    if (creativeLink) {
        creativeLink.addEventListener('click', function () {
            hideOverlay();
        });
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !overlay.hidden) {
            hideOverlay();
        }
    });
})();
