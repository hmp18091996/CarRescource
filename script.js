function onClickItemProducts() {
    $('.list-car').on("click", function () {
        $('#myModal').modal('show');
    });
}

// $(document).ready(function () {

//     onClickItemProducts();

//     $('#myModal').modal('show');

//     setInterval(function () {
//         $('#myModal').modal('show');
//     }, 60000); // 60 giây


// });


function sendMail() {

    emailjs.init("rPfiv9ZlXxZyoXb4T");

    const paymentOptions = document.getElementsByName("paymentOption");
    const carSelect = document.getElementById("carName");
    const selectedOption = carSelect.options[carSelect.selectedIndex];
    const selectedTextOfCarName = selectedOption.text;
    let selectedValueOfPaymentType = '';

    for (const option of paymentOptions) {
        if (option.checked) {
            selectedValueOfPaymentType = option.value;
        }
    }

    let serviceID = "service_6mdmw94";
    let templateID = "template_ud24bh6";

    var params = {
        paymentType: selectedValueOfPaymentType,
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        carName: selectedTextOfCarName,
    };

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            alert('Đã gửi thành công')
        })
        .catch(
    );
}