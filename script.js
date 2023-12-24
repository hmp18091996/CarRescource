
// Open Popup Listener
document.addEventListener("DOMContentLoaded", function () {
    // Hàm hiển thị popup
    function showPopup() {
        $('#myModal').modal('show');
    }

    // Hiển thị popup khi trang được tải
    window.onload = function () {
        showPopup();

        // Thiết lập hiển thị lại popup sau mỗi 60 giây
        setInterval(function () {
            showPopup();
        }, 60000); // 60 giây
    };
});

