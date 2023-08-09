/* image switcher variables*/
const smallimges = document.querySelectorAll(".thumbnail");// small thubnails
const productDisplay = document.querySelector(".preview"); //big image

/* cart variables*/
const cartBtn = document.querySelector(".cart"); //cart icon
const cart_content = document.querySelector(".cart-div"); //cart dropdown
const cartNotification = document.querySelector(".notification");//notification
const cartBox = document.querySelector(".cart-box"); // cart content holder
const cartEmptyMessage = document.querySelector(".zero");// your cart is empty message
const deleteCart = document.querySelector(".delete");// delete buttton inside cart

/* product quantity selection and add to cart variables*/
const minusBtn = document.querySelector(".minus"); //minus sign btn
const plusBtn = document.querySelector(".plus"); //plus sign btn
const addToCartBtn = document.querySelector(".addtocart");// add to cart button
const prodQuantity = document.querySelector(".quantity");// quantity amount
let counter = 0;//for current quantity display

/* function: show/ hide cart dropdown */
cartBtn.addEventListener('click', () => {
    cart_content.classList.toggle("active-cart");
});

/* function: display the large image of the thumbnail clicked */
smallimges.forEach((smlimg) => {
    smlimg.addEventListener('click', () => {
        smallimges.forEach((img) => {
            img.classList.remove("active");
        });
        smlimg.classList.add("active");
        const activeImg = document.querySelector(".active");
        switch (activeImg.getAttribute("src")) {
            case "./images/image-product-1-thumbnail.jpg":
                productDisplay.src = "./images/image-product-1.jpg";
                break;
            case "./images/image-product-2-thumbnail.jpg":
                productDisplay.src = "./images/image-product-2.jpg";
                break;
            case "./images/image-product-3-thumbnail.jpg":
                productDisplay.src = "./images/image-product-3.jpg";
                break;
            case "./images/image-product-4-thumbnail.jpg":
                productDisplay.src = "./images/image-product-4.jpg";
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

        cartBox.innerHTML = `<div class="cart-content">
        <img class="prd" src="./images/image-product-1-thumbnail.jpg" alt="product1">
        <div class="product-detail">
          <p class="name">Fall Limited Edition Sneakers</p>
          <p class="calculate">
            <span class="price">$125.00</span>
            <span class="times">&times;</span>
            <span class="amount">${counter}</span>
            <span class="total">$${total}</span>
          </p>
        </div>
        <button class="delete" onClick="removeCart()"><img src="./images/icon-delete.svg" alt="icon-delete"></button>
      </div>
      <button class="checkout" onClick="checkout()">Checkout</button>`;

        cartNotification.classList.add("notify");
        cartNotification.innerText = counter;
    }
    else {
        cartEmptyMessage.style.display = "block";
        cartBox.style.display = "none";
        cartNotification.classList.remove("notify");
    }
}

/*function: remove cart contents*/
function removeCart() {
    // counter = 0;
    cartEmptyMessage.style.display = "block";
    cartBox.style.display = "none";
    cartNotification.classList.remove("notify");
}








/* do mobile screen functions */
/* extra popup for after checkout , maybe a form or a thank you card*/
