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
$(".artist__details__pic__slider").owlCarousel({
    loop: true,
    margin: 20,
    items: 4,
    dots: true,
    smartSpeed: 800,
    autoHeight: false,
    autoplay: true
});

// Setbg

$('.set-bg').each(function () {
    var bg = $(this).data('setbg');
    $(this).css('background-image', 'url(' + bg + ')');
});
// 
 function Check(){
    var nTime = prompt('Bạn đã đọc review về Artist này chưa?')
    
 }

$('.artist__details__pic__slider img').on('click', function () {
    var imgurl = $(this).data('imgbigurl');
    if (imgurl) {
        var bigImg = $('.artist__details__pic__item--large').attr('src');
        if (imgurl !== bigImg) {
            $('.artist__details__pic__item--large').attr('src', imgurl);
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


//------KIEN ZONE-------//
// ZoomIn - ZomOut
function zoomIn(element) {
    element.style.transform = "scale(1.5)";
    element.style.zIndex = "2";
}
function zoomOut(element) {
    element.style.transform = "scale(1)";
    element.style.zIndex = "1";
}

//---Add Comment----//

function addComment() {
    // Lấy giá trị từ các trường nhập
    var name = document.getElementById("name").value;
    var commentText = document.getElementById("message").value;
    var rating = document.getElementById("rating").value;
    var fileInput = document.getElementById("file");
    var imageFile = fileInput.files[0];

    // Kiểm tra xem có dữ liệu không
    if (name && commentText) {
        // Tạo một đối tượng div mới để chứa bình luận
        var commentDiv = document.createElement("div");
        commentDiv.className = "row_cmt d-flex";

        // Thêm hình ảnh người dùng (đặt hình ảnh theo đường dẫn tùy chọn)
        var profilePicDiv = document.createElement("div");
        profilePicDiv.innerHTML = '<img class="profile-pic" src="./img/sourceImg/review/avatar.jpg">';
        commentDiv.appendChild(profilePicDiv);

        // Thêm thông tin bình luận
        var commentInfoDiv = document.createElement("div");
        commentInfoDiv.className = "d-flex flex-column";

        var nameLink = document.createElement("a");
        nameLink.className = "mt-2 mb-0";
        nameLink.appendChild(document.createTextNode(name));
        commentInfoDiv.appendChild(nameLink);

        // Thêm đánh giá dạng ngôi sao
        var ratingDiv = document.createElement("div");
        ratingDiv.className = "text-left";
        ratingDiv.innerHTML = '<p class="text-muted">' + getStarRating(rating) + '</p>';
        commentInfoDiv.appendChild(ratingDiv);

        commentDiv.appendChild(commentInfoDiv);

        // Thêm ngày bình luận
        var dateDiv = document.createElement("div");
        dateDiv.className = "ml-auto";
        var currentDate = new Date();
        dateDiv.innerHTML = '<p class="text-muted pt-5 pt-sm-3">' + currentDate.toLocaleDateString() + '</p>';
        commentDiv.appendChild(dateDiv);

        // Hiển thị thông báo thành công (hoặc thực hiện các công việc khác tùy thuộc vào nhu cầu của bạn)
        var submittingElement = document.getElementById("commentSubmitting");
        submittingElement.innerHTML = "Comment submitted successfully!";
        setTimeout(function () {
            submittingElement.innerHTML = "";
        }, 3000);

        // Thêm đối tượng div vào phần hiển thị bình luận
        document.getElementById("comments").appendChild(commentDiv);

        // Xóa nội dung của các trường nhập
        document.getElementById("name").value = "";
        document.getElementById("message").value = "";
        document.getElementById("rating").value = "5"; // Đặt lại đánh giá mặc định
        fileInput.value = "";
    } else {
        alert("Vui lòng nhập họ tên và bình luận!");
    }
}

function uploadFile() {
    var fileInput = document.getElementById("file");
    var imageFile = fileInput.files[0];

    if (imageFile) {
        // Thực hiện xử lý tải lên hình ảnh ở đây
        // Đoạn mã xử lý tải lên có thể được thêm vào đây
        var uploadingElement = document.getElementById("uploadSubmitting");
        uploadingElement.innerHTML = "Image uploaded successfully!";
        setTimeout(function () {
            uploadingElement.innerHTML = "";
        }, 3000);
    } else {
        alert("Vui lòng chọn một hình ảnh để tải lên!");
    }
}

// Hàm trả về chuỗi HTML chứa ngôi sao dựa trên đánh giá
function getStarRating(rating) {
    var starsHtml = '';
    for (var i = 1; i <= 5; i++) {
        if (i <= rating) {
            starsHtml += '<i class="fas fa-star star-active"></i>';
        } else {
            starsHtml += '<i class="fas fa-star star-inactive"></i>';
        }
    }
    return starsHtml;
}

// Function to update available date and time options based on selected location
function updateDateTimeOptions() {
    var locationSelect = document.getElementById('location');
    var dateTimeSelect = document.getElementById('date');
    var downtownMap = document.getElementById('downtown-map');
    var uptownMap = document.getElementById('uptown-map');

    downtownMap.style.display = 'none';
    uptownMap.style.display = 'none';
    
    dateTimeSelect.innerHTML = '';
    dateTimeSelect.disabled = false;

    if (locationSelect.value === 'downtown') {
        dateTimeSelect.innerHTML += '<option value="2024-03-10T10:00">March 10, 2024 at 10:00 AM</option>';
        dateTimeSelect.innerHTML += '<option value="2024-03-11T14:00">March 11, 2024 at 2:00 PM</option>';
        downtownMap.style.display = 'block';
    } else if (locationSelect.value === 'uptown') {
        dateTimeSelect.innerHTML += '<option value="2024-03-12T13:00">March 12, 2024 at 1:00 PM</option>';
        dateTimeSelect.innerHTML += '<option value="2024-03-13T16:00">March 13, 2024 at 4:00 PM</option>';
        uptownMap.style.display = 'block';
    }
}

// Function Validate Booking Form
function validateForm() {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var artist = document.getElementById('artist');
    var service = document.getElementById('service');
    var location = document.getElementById('location');

    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    var phoneRegex = /^[0-9]{10}$/;

    if (!name.value) {
        alert('Please enter your Name.');
        name.focus();
        return false;
    }

    if (!email.value || !emailRegex.test(email.value)) {
        alert('Please enter a valid Email. Format: username@domain.com');
        email.focus();
        return false;
    }

    if (!phone.value || !phoneRegex.test(phone.value)) {
        alert('Please enter a valid Phone Number. Format: 10 digits without spaces or dashes.');
        phone.focus();
        return false;
    }

    if (artist.selectedIndex === 0) {
        alert('Please select a Makeup Artist.');
        artist.focus();
        return false;
    }

    if (service.selectedIndex === 0) {
        alert('Please select a Service.');
        service.focus();
        return false;
    }

    if (location.selectedIndex === 0) {
        alert('Please select a Location.');
        location.focus();
        return false;
    }

    return true;
}

// Function Check Submit Booking Form
function submitForm() {
    if (validateForm()) {
        alert("Your booking registration has been successfully sent. Please wait, a consultant will contact you soon.");
        return true; 
    } else {
        return false; 
    }
}





