/* image switcher variables*/
const smallimges = document.querySelectorAll(".thumbnail");// small thubnails
const productDisplay = document.querySelector(".preview"); //big image

/* cart variables*/
const cartBtn = document.querySelector(".cart"); //cart icon
const cart_content = document.querySelector(".cart-div"); //cart dropdown
const cartNotification = document.querySelector(".notification");//notification

/* product quantity selection and add to cart variables*/
const minusBtn = document.querySelector(".minus"); //minus sign btn
const plusBtn = document.querySelector(".plus"); //plus sign btn
const addToCartBtn = document.querySelector(".addtocart");// add to cart button
const prodQuantity = document.querySelector(".quantity");// quantity amount
let counter = 0;//for current quantity display

/* function: show/ hide cart dropdown */
cartBtn.addEventListener('click', () => {
    cart_content.classList.toggle("active-cart");
    if (cartNotification.innerText) {
        const message = document.createElement("P");
        const text = document.createTextNode("Your cart is empty.");
        message.appendChild(text);
        message.style.color = "var(--Darkgrayishblue)";
        cart_content.appendChild(message);
    }
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

}
/* todo */
/* do the add to cart functions */
/* do mobile screen functions */
/* extra popup for after checkout , maybe a form or a thank you card*/
