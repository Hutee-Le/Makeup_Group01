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