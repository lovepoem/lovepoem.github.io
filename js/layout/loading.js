// loading
(function () {
    function disableLoad() {
        var page = document.getElementById('page');
        var loading = document.getElementById('page-loading');

        if (loading) {
            loading.classList.add('js-hidden');
        }

        if (page && page.classList.contains('js-hidden')) {
            page.classList.remove('js-hidden');
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', disableLoad, { once: true });
    } else {
        disableLoad();
    }

    window.addEventListener('load', disableLoad, { once: true });
})();
