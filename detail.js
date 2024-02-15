import { LIST_PRODUCT } from "./listCar.js";

// Get the carName from the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const carName = urlParams.get("carName");

// Find the car object that matches the carName
const CAR = LIST_PRODUCT.find(
  (car) => car.name.toLowerCase() === carName.toLowerCase()
);

// Create an array of image URLs from the color data
const listImg = CAR.detail.color.map((color) => color.img);

// Get the DOM elements
const nameProduct = document.getElementById("product_name");
const priceProduct = document.getElementById("product_price");
const shortDesc1 = document.getElementById("pro_des_1") 
const shortDesc2 = document.getElementById("pro_des_2")

// Function to render detail sections
function renderDetail(section, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  const sectionTitleHtml = `<h2 class="text-left mb-4">${section.title}</h2>`;
  container.innerHTML += sectionTitleHtml;

  section.content.forEach((item) => {
    const cardHtml = `
        <div class="col-md-6 d-flex py-4">
          <div class="card h-100">
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
}

// Function to generate carousel items
function generateCarouselItems(images) {
  const carouselInner = document.getElementById('carouselExampleCaptions');
  carouselInner.innerHTML = `<div class="carousel-inner" id="carousel-inner-list"></div>`;
  const carouselInnerList = document.getElementById('carousel-inner-list');

  images.forEach((imgSrc, index) => {
    const carouselItem = document.createElement('div');
    carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
    carouselItem.innerHTML = `
      <img src="./img/${imgSrc}" class="d-block w-100" alt="Car image ${index + 1}">
    `;
    carouselInnerList.appendChild(carouselItem);
  });
}

// Function to render color buttons and handle clicks
function renderColorButtons(colors) {
  const colorsContainer = document.getElementById('colorsContainer');
  colorsContainer.innerHTML = '';
  colorsContainer.classList.add('d-flex', 'justify-content-center');
  
  colors.forEach((colorObj, index) => {
    const button = document.createElement('button');
    button.style.backgroundColor = colorObj.color;
    button.classList.add('color-button');
    button.onclick = function () {
      // Change the carousel images with the corresponding color images
      changeCarouselImages(index);
    };
    button.setAttribute('aria-label', `Change to color ${colorObj.type}`);
    colorsContainer.appendChild(button);
  });
}

// Function to change carousel images based on the selected color
function changeCarouselImages(index) {
  const carouselInnerList = document.getElementById('carousel-inner-list');
  const carouselItems = carouselInnerList.querySelectorAll('.carousel-item');

  carouselItems.forEach((item, itemIndex) => {
    if (itemIndex === index) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

// Event listener for when the DOM is ready
document.addEventListener("DOMContentLoaded", (event) => {
  // Render Detail
  nameProduct.innerHTML = CAR.detail.name;
  priceProduct.innerHTML = CAR.detail.giaTu;
  shortDesc1.innerHTML = "Content 1 - ABC"
  shortDesc2.innerHTML = "Content 2 - CDE"
  generateCarouselItems(listImg); // Initialize with the first set of images
  // Render show ngoaiThat, noiThat, vanHanh, anToan
  renderDetail(CAR.ngoaiThat, "ngoaiThat");
  renderDetail(CAR.noiThat, "noiThat");
  renderDetail(CAR.vanHanh, "vanHanh");
  renderDetail(CAR.anToan, "anToan");

  renderColorButtons(CAR.detail.color);
});
