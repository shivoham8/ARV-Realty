let navbar = document.querySelector(".header .navbar");
let searchForm = document.querySelector(".header .search-form");
let contactInfo = document.querySelector(".contact-info");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
};

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
};

document.querySelector("#info-btn").onclick = () => {
  contactInfo.classList.add("active");
};

document.querySelector("#close-contact-info").onclick = () => {
  contactInfo.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  contactInfo.classList.remove("active");
};

var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".leaders-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

// Light Gallery

// script.js

// script.js

function openSwiper(images) {
  var newWindow = window.open("", "_self");
  newWindow.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Gallery</title>
      <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
      <style>
        body {
          margin: 0;
          font-family: Arial, sans-serif;
        }
        .swiper-container {
          width: 100%;
          height: 100vh;
        }
        .swiper-slide {
          text-align: center;
          font-size: 18px;
          background: #fff;
          /* Center image vertically */
          display: flex;
          justify-content: center;
          align-items: center;
        }
        img {
          max-width: 60%;
          max-height: 60%;
        }
        .swiper-button-next, .swiper-button-prev {
          color: #000;
        }

        #close-btn {
          color: red;
          height: 30%;
          z-index: 1100;
        }
      </style>
    </head>
    <body>
    <button class="close-btn" onclick="closeWindow()">Close</button>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          ${images
            .map(
              (image) =>
                `<div class="swiper-slide"><img src="${image}" alt="" target="_self"></div>`
            )
            .join("")}
        </div>
        <!-- Add Navigation Buttons -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
      </div>
      
      <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
      <script>
        var swiper = new Swiper('.swiper-container', {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          pagination: {
            el: '.swiper-pagination',
          },
          loop: true // Enable loop mode
        });

        // Function to close the gallery window
        function closeWindow() {
          window.close();
      </script>
    </body>
    </html>
  `);
}
