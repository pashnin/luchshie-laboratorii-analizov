(function () {
    var STORAGE_KEY = 'sberPromoClosed';
    var overlay = document.getElementById('sber-promo-overlay');
    if (!overlay) {
        return;
    }

    var closeBtn = overlay.querySelector('.sber-promo-close');
    var backdrop = overlay.querySelector('.sber-promo-backdrop');

    function open() {
        overlay.hidden = false;
        document.body.classList.add('sber-promo-open');
        if (closeBtn) {
            closeBtn.focus();
        }
    }

    function close() {
        overlay.hidden = true;
        document.body.classList.remove('sber-promo-open');
        try {
            sessionStorage.setItem(STORAGE_KEY, '1');
        } catch (err) {
            console.warn('sessionStorage недоступен', err);
        }
    }

    try {
        if (sessionStorage.getItem(STORAGE_KEY)) {
            return;
        }
    } catch (err) {
        console.warn('sessionStorage недоступен', err);
    }

    window.setTimeout(function () {
        open();
    }, 1400);

    if (closeBtn) {
        closeBtn.addEventListener('click', function (e) {
            e.preventDefault();
            close();
        });
    }

    if (backdrop) {
        backdrop.addEventListener('click', close);
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !overlay.hidden) {
            close();
        }
    });
})();
