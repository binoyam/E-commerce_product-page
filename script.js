/* image switcher variables*/
const thumbnails = document.querySelectorAll(".thumbnail");// small thumbnails
const mainImgDisplay = document.querySelector(".preview"); //big image

/* cart variables*/
const cartIcon = document.querySelector(".cart"); //cart icon
const cart_content = document.querySelector(".cart-div"); //cart dropdown
const cartNotification = document.querySelector(".notification");//notification
const cartBox = document.querySelector(".cart-box"); // cart content holder
const cartEmptyMessage = document.querySelector(".zero");// "your cart is empty" message

/* product quantity selection and add to cart variables*/
const minusBtn = document.querySelector(".minus"); //minus sign btn
const plusBtn = document.querySelector(".plus"); //plus sign btn
const addToCartBtn = document.querySelector(".addtocart");// add to cart button
const prodQuantity = document.querySelector(".quantity");// quantity amount
let counter = 0;//for current quantity display

/* lightbox effect varialbes*/
const lightBox = document.querySelector(".light-box-div");//lightbox container
const closeBtn = document.querySelector(".close");// close lightbox icon
const previousBtn = document.querySelector(".previous-btn");// left arrow
const nextBtn = document.querySelector(".next-btn");// right arrow
const lightboxDisplay = document.querySelector(".lightbox-preview")//lightbox big image

/* images urls*/
const imageUrls = [
    './images/image-product-1.jpg',
    './images/image-product-2.jpg',
    './images/image-product-3.jpg',
    './images/image-product-4.jpg'
];

/* function: show/ hide cart dropdown */
cartIcon.addEventListener('click', () => {
    cart_content.classList.toggle("active-cart");
});

/* function: display the large image of the thumbnail clicked 
        for both normal and lightbox*/
thumbnails.forEach((smlimg) => {
    smlimg.addEventListener('click', () => {
        thumbnails.forEach((img) => {
            img.classList.remove("active");
        });
        smlimg.classList.add("active");
        const activeImg = document.querySelector(".active");
        switch (activeImg.getAttribute("src")) {
            case "./images/image-product-1-thumbnail.jpg":
                mainImgDisplay.src = "./images/image-product-1.jpg";
                lightboxDisplay.src = "./images/image-product-1.jpg";
                break;
            case "./images/image-product-2-thumbnail.jpg":
                mainImgDisplay.src = "./images/image-product-2.jpg";
                lightboxDisplay.src = "./images/image-product-2.jpg";
                break;
            case "./images/image-product-3-thumbnail.jpg":
                mainImgDisplay.src = "./images/image-product-3.jpg";
                lightboxDisplay.src = "./images/image-product-3.jpg";
                break;
            case "./images/image-product-4-thumbnail.jpg":
                mainImgDisplay.src = "./images/image-product-4.jpg";
                lightboxDisplay.src = "./images/image-product-4.jpg";
                break;
        }
    });
});

/* function: update qunatity */
plusBtn.addEventListener('click', incrementQuantity);
minusBtn.addEventListener('click', decrementQuantity)

function incrementQuantity() {
    counter++;
    prodQuantity.innerText = counter;
}
function decrementQuantity() {
    if (counter > 0) {
        counter--;
        prodQuantity.innerText = counter;
    }
}

/* function: add to cart */
addToCartBtn.addEventListener('click', addToCart);

function addToCart() {
    if (counter > 0) {
        cartEmptyMessage.style.display = "none";
        const total = 125 * counter;
        cartBox.style.display = "flex";
        cartNotification.classList.add("notify");
        cartNotification.innerText = counter;

        cartBox.innerHTML = `<div class="cart-content">
        <img class="prd" src="./images/image-product-1-thumbnail.jpg" alt="product1">
        <div class="product-detail">
          <p class="name">Fall Limited Edition Sneakers</p>
          <p class="calculate">
            <span class="price">$125.00</span>
            <span class="times">&times;</span>
            <span class="amount">${counter}</span>
            <span class="total">$${total}.00</span>
          </p>
        </div>
        <button class="delete" onClick="removeCart()"><img src="./images/icon-delete.svg" alt="icon-delete"></button>
      </div>
      <button class="checkout" onClick="checkout()">Checkout</button>`;
    }
    else {
        cartEmptyMessage.style.display = "block";
        cartBox.style.display = "none";
        cartNotification.classList.remove("notify");
    }
}

/*function: remove cart contents*/
function removeCart() {
    counter = 0;
    cartEmptyMessage.style.display = "block";
    cartBox.style.display = "none";
    cartNotification.classList.remove("notify");
    prodQuantity.innerText = counter;
}

/* function: open lightbox */
mainImgDisplay.addEventListener('click', () => {
    lightBox.classList.remove("hidden");
});

/*function: close lightbox effect */
closeBtn.addEventListener('click', () => {
    lightBox.classList.add("hidden");
});

/* previous / next button functions*/
previousBtn.addEventListener('click', previousImage);
nextBtn.addEventListener('click', nextImage);

let currentImageIndex = 0;

/* function: update current image */
function updateImage() {
    mainImgDisplay.src = imageUrls[currentImageIndex];
    lightboxDisplay.src = imageUrls[currentImageIndex];
}

/* function: display next image */
function nextImage() {
    currentImageIndex++;
    if (currentImageIndex >= imageUrls.length) {
        currentImageIndex = 0;
    }
    updateImage();
}

/* function: display previous image */
function previousImage() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = imageUrls.length - 1;
    }
    updateImage();
}









/* do mobile screen functions */
/* extra popup for after checkout , maybe a form or a thank you card*/
