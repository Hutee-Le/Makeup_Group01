document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.hero__categories__all').addEventListener('click', function () {
        var submenu = this.nextElementSibling;
        if (submenu.style.display === 'block') {
            submenu.style.display = 'none';
        } else {
            submenu.style.display = 'block';
        }
    });
});