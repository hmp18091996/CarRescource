
// Open Popup Listener
document.addEventListener("DOMContentLoaded", function () {
    // Hàm hiển thị popup
    function showPopup() {
        $('#myModal').modal('show');
    }

    window.onload = function () {
        showPopup();

        setInterval(function () {
            showPopup();
        }, 60000); // 60 giây
    };
});

