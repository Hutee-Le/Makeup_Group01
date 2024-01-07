//Of Review-------------------------------
var ratings = {
    totalScore: 8,
    totalCount: 2,
    countExcellent: 0,
    countGood: 2,
    countAverage: 0,
    countPoor: 0,
    countTerrible: 0,
    barExcellentElement: 0,
    barGoodElement: 100,
    barAverageElement: 0,
    barPoorElement: 0,
    barTerribleElement: 0
};
//---------------------------------------

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
function Check() {
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
        dateTimeSelect.innerHTML += '<option value="" disabled selected>Select Date and Time</option>';
        dateTimeSelect.innerHTML += '<option value="2024-03-10T10:00">March 10, 2024 at 10:00 AM</option>';
        dateTimeSelect.innerHTML += '<option value="2024-03-11T14:00">March 11, 2024 at 2:00 PM</option>';
        downtownMap.style.display = 'block';
    } else if (locationSelect.value === 'uptown') {
        dateTimeSelect.innerHTML += '<option value="" disabled selected>Select Date and Time</option>';
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
    var dateTimeSelect = document.getElementById('date');

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

    if (dateTimeSelect.selectedIndex <= 0) {
        alert('Please select a Date and Time.');
        dateTimeSelect.focus();
        return false;
    }

    return true;
}

// Function Check Submit Booking Form
function submitForm() {
    if (validateForm()) {
        alert("Your booking registration has been successfully sent. Please wait, a consultant will contact you soon.");

        document.getElementById('booking-form').reset();

        // Clear the date and time select options
        var dateTimeSelect = document.getElementById('date');
        dateTimeSelect.innerHTML = '<option value="" disabled selected>Select Date and Time</option>';
        dateTimeSelect.disabled = true;

        // Hide the maps
        var downtownMap = document.getElementById('downtown-map');
        var uptownMap = document.getElementById('uptown-map');
        downtownMap.style.display = 'none';
        uptownMap.style.display = 'none';

        return false;
    } else {
        return false;
    }
}



//----------------Review---------------//
// ZoomIn - ZomOut
function zoomIn(img) {
    var overlay = document.getElementById('overlay');
    var zoomedImage = document.getElementById('zoomed-image');

    
    overlay.style.display = 'flex';
    zoomedImage.src = img.src;

    
    zoomedImage.style.transform = 'scale(1)';
    setTimeout(function () {
        zoomedImage.style.transform = 'scale(1.2)';
    }, 10);
}

function zoomOut() {
    var overlay = document.getElementById('overlay');
    var zoomedImage = document.getElementById('zoomed-image');


    overlay.style.display = 'none';

    zoomedImage.style.transform = 'scale(1)';
}

function showTooltip(img, text) {
    var tooltip = document.getElementById('tooltip');
    tooltip.innerText = text;
    tooltip.style.display = 'block';
    tooltip.style.left = img.offsetLeft + 'px';
    tooltip.style.top = img.offsetTop + img.offsetHeight + 'px';
}

function hideTooltip() {
    var tooltip = document.getElementById('tooltip');
    tooltip.style.display = 'none';
}


//---Add Comment----//
function addComment() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var rating = document.querySelector('input[name="rating"]:checked');

    if (name && isValidEmail(email) && message && rating) {

        var ratingValue = rating.value;


        var commentDiv = document.createElement("div");
        commentDiv.className = "card";

        var infoDiv = document.createElement("div");
        infoDiv.className = "row_cmt d-flex border_info";
        commentDiv.appendChild(infoDiv);

        var profilePicDiv = document.createElement("div");
        profilePicDiv.innerHTML = '<img class="profile-pic" src="./img/sourceImg/review/avatar.jpg">';
        infoDiv.appendChild(profilePicDiv);

        var commentInfoDiv = document.createElement("div");
        commentInfoDiv.className = "flex-column";

        var nameLink = document.createElement("a");
        nameLink.className = "mt-2 mb-0";
        nameLink.appendChild(document.createTextNode(name));
        commentInfoDiv.appendChild(nameLink);


        var ratingDiv = document.createElement("div");
        ratingDiv.className = "text-left";
        ratingDiv.innerHTML = '<p class="text-muted">' + getStarRating(ratingValue) + '</p>';
        commentInfoDiv.appendChild(ratingDiv);

        infoDiv.appendChild(commentInfoDiv);


        var dateDiv = document.createElement("div");
        dateDiv.className = "ml-auto";
        var currentDate = new Date();
        dateDiv.innerHTML = '<p class="text-muted pt-5 pt-sm-3">' + currentDate.toLocaleDateString() + '</p>';
        infoDiv.appendChild(dateDiv);


        var contentDiv = document.createElement("div");
        contentDiv.className = "row_cmt text-left mt-4";
        contentDiv.innerHTML = '<p class="content">' + message + '</p>';
        commentDiv.appendChild(contentDiv);


        var fileInput = document.getElementById("file");
        if (fileInput.files.length > 0) {
            var imagesDiv = document.createElement("div");
            imagesDiv.className = "row_cmt text-left";

            for (var i = 0; i < fileInput.files.length; i++) {
                var imgElement = document.createElement("img");
                imgElement.className = "pic";
                imgElement.src = URL.createObjectURL(fileInput.files[i]);
                imagesDiv.appendChild(imgElement);
            }
            commentDiv.appendChild(imagesDiv);
        }


        var replyDiv = document.createElement("div");
        replyDiv.className = "row_cmt text-left mt-4";

        var likeDiv = document.createElement("div");
        likeDiv.className = "mr-3 vote";

        var replyImg = document.createElement("img");
        replyImg.src = "";
        replyImg.width = "3%";

        var replySpan = document.createElement("span");
        replySpan.className = "blue-text pl-2";
        replySpan.appendChild(document.createTextNode("Reply"));

        likeDiv.appendChild(replyImg);
        likeDiv.appendChild(replySpan);
        replyDiv.appendChild(likeDiv);

        commentDiv.appendChild(replyDiv);

        var commentsContainer = document.getElementById("comments");

        if (commentsContainer.children.length > 0) {
            commentsContainer.insertBefore(commentDiv, commentsContainer.firstChild);
        } else {
            commentsContainer.appendChild(commentDiv);
        }


        updateRatingStats();


    } else {
        alert("Please enter your name, email and the content you want to leave a review for!");

    }

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    document.getElementById("file").value = "";
    document.querySelector('input[name="rating"]:checked').checked = false;

}


function updateRatingStats() {

    var rating = document.querySelector('input[name="rating"]:checked').value;

    ratings.totalScore += parseInt(rating);
    ratings.totalCount++;

    switch (parseInt(rating)) {
        case 5:
            ratings.countExcellent++;
            break;
        case 4:
            ratings.countGood++;
            break;
        case 3:
            ratings.countAverage++;
            break;
        case 2:
            ratings.countPoor++;
            break;
        case 1:
            ratings.countTerrible++;
            break;
    }

    document.getElementById('averageRating').textContent = (ratings.totalScore / ratings.totalCount).toFixed(1);
    document.getElementById('reviewCount').textContent = '(' + ratings.totalCount + ' reviews)';

    var barExcellentElement = document.getElementById('barExcellent');
    if (barExcellentElement) {
        barExcellentElement.style.width = (ratings.countExcellent / ratings.totalCount * 100) + '%';
        barExcellentElement.style.backgroundColor = '#fcda84';
    }
    document.getElementById('countExcellent').textContent = ratings.countExcellent;

    var barGoodElement = document.getElementById('barGood');
    if (barGoodElement) {
        barGoodElement.style.width = (ratings.countGood / ratings.totalCount * 100) + '%';
        barGoodElement.style.backgroundColor = '#fcda84';
    }
    document.getElementById('countGood').textContent = ratings.countGood;

    var barAverageElement = document.getElementById('barAverage');
    if (barAverageElement) {
        barAverageElement.style.width = (ratings.countAverage / ratings.totalCount * 100) + '%';
        barAverageElement.style.backgroundColor = '#fcda84';
    }
    document.getElementById('countAverage').textContent = ratings.countAverage;

    var barPoorElement = document.getElementById('barPoor');
    if (barPoorElement) {
        barPoorElement.style.width = (ratings.countPoor / ratings.totalCount * 100) + '%';
        barPoorElement.style.backgroundColor = '#fcda84';
    }
    document.getElementById('countPoor').textContent = ratings.countPoor;

    var barTerribleElement = document.getElementById('barTerrible');
    if (barTerribleElement) {
        barTerribleElement.style.width = (ratings.countTerrible / ratings.totalCount * 100) + '%';
        barTerribleElement.style.backgroundColor = '#fcda84';
    }
    document.getElementById('countTerrible').textContent = ratings.countTerrible;

}



function uploadFile() {
    var fileInput = document.getElementById("file");
    var imageFile = fileInput.files[0];

    if (imageFile) {
        var uploadingElement = document.getElementById("uploadSubmitting");
        uploadingElement.innerHTML = "Image uploaded successfully!";
        setTimeout(function () {
            uploadingElement.innerHTML = "";
        }, 3000);
    } else {
        alert("");
    }
}

function getStarRating(rating) {
    var starsHtml = '';
    for (var i = 1; i <= 5; i++) {
        if (i <= rating) {
            starsHtml += '<i class="fas fa-star star-active ml-1"></i>';
        } else {
            starsHtml += '<i class="fas fa-star star-inactive ml-1"></i>';
        }
    }
    return starsHtml;
}


function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function toggleLike(element) {
    // Toggle class "liked" on the like element
    element.classList.toggle('liked');
}
//----------------Review---------------//




//--------------Contact Us--------------//
function validateFormContact() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    if (name.trim() === '') {
        showAlert('Please enter your name.');
        return false;
    }

    // Check that either email or phone has a value
    if (email.trim() === '' && phone.trim() === '') {
        alert('Please enter either an email address or a phone number.');
        return false;
    }

    // If both email and phone have values, check their formats
    if (email.trim() !== '') {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return false;
        }
    }

    if (phone.trim() !== '') {
        var phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            alert('Please enter a valid phone number (10 digits).');
            return false;
        }
    }

    if (subject.trim() === '') {
        showAlert('Please enter a subject.');
        return false;
    }

    if (message.trim() === '') {
        showAlert('Please enter a message.');
        return false;
    }

    // Display success message
    showNotification('Thank you for leaving your information, we will contact you soon !');

    //Clear data input
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";

    return false; // Submit the form if all validations pass
}

function showAlert(message) {
    alert(message);
}

function showNotification(message) {
    var notificationDiv = document.getElementById('notification');
    notificationDiv.innerHTML = message;
    notificationDiv.style.display = 'block';
}
//-----------Contact Us------------//
