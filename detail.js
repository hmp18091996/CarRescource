import { LIST_PRODUCT } from "./listCar.js";

const urlParams = new URLSearchParams(window.location.search);
const carName = urlParams.get("carName");
const CAR = LIST_PRODUCT.find(
  (car) => car.name.toLowerCase() === carName.toLowerCase()
);

const nameProduct = document.getElementById("product_name");
const priceProduct = document.getElementById("product_price");

const renderDetail = (section, containerId) => {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  const sectionTitleHtml = `<h2 class="text-center mb-4">${section.title}</h2>`;
  container.innerHTML += sectionTitleHtml;

  section.content.forEach((item) => {
    const cardHtml = `
        <div class="col-md-4">
          <div class="card">
            <img src="./img/${item.img}" class="card-img-top" alt="${item.title}">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">${item.description}</p>
            </div>
          </div>
        </div>
      `;
    container.innerHTML += cardHtml;
  });
};

function renderColorButtons(colors) {
  colorsContainer.innerHTML = '';
  colors.forEach((colorObj, index) => {
    const button = document.createElement('button');
    button.style.backgroundColor = colorObj.color;
    button.classList.add('color-button');
    button.onclick = function () {
      changeCarouselImages(colorObj.img);
    };
    button.setAttribute('aria-label', `Change to color ${colorObj.type}`);
    colorsContainer.appendChild(button);
  });
}

function changeCarouselImages(newImageSrc) {
  const carouselItems = document.querySelectorAll('#carouselExampleCaptions .carousel-item img');
  carouselItems.forEach((img, index) => {
    img.src = "./img/" + newImageSrc;
  });
}

document.addEventListener("DOMContentLoaded", (event) => {
  // Render Detail
  nameProduct.innerHTML = CAR.detail.name;
  priceProduct.innerHTML = CAR.detail.giaTu;
  // Render show ngoaiThat, noiThat, vanHanh, anToan
  renderDetail(CAR.ngoaiThat, "ngoaiThat");
  renderDetail(CAR.noiThat, "noiThat");
  renderDetail(CAR.vanHanh, "vanHanh");
  renderDetail(CAR.anToan, "anToan");

  renderColorButtons(CAR.detail.color);
});
