// Artist
$(document).ready(function () {
    
    $('#class-filter li').on('click', function () {
      $("#class-filter li").removeClass('filter-active');
      $(this).addClass('filter-active');
      var filterValue = $(this).data('filter');
      $('.class-container').isotope({ filter: filterValue });
    });
  });

  // Artists detail
$(".product__details__pic__slider").owlCarousel({
    loop: true,
    margin: 20,
    items: 4,
    dots: true,
    smartSpeed: 800,
    autoHeight: false,
    autoplay: true
});

// Background Set

$('.set-bg').each(function () {
    var bg = $(this).data('setbg');
    $(this).css('background-image', 'url(' + bg + ')');
});

$('.product__details__pic__slider img').on('click', function () {
    var imgurl = $(this).data('imgbigurl');
    if (imgurl) {
        var bigImg = $('.product__details__pic__item--large').attr('src');
        if (imgurl !== bigImg) {
            $('.product__details__pic__item--large').attr('src', imgurl);
        }
    } else {
        console.error("Thuộc tính data-imgbigurl không được thiết lập hoặc không hợp lệ.");
    }
});



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


document.getElementById('bookingBtn').addEventListener('click', function () {
    window.location.href = './booking.html';
});
