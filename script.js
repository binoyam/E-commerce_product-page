const smallimges = document.querySelectorAll(".thumbnail");
const productDisplay = document.querySelector(".preview");
const cartBtn = document.querySelector(".cart");
const cart_content = document.querySelector(".cart-div");

cartBtn.addEventListener('click', showCart);

function showCart(){
    cart_content.classList.toggle("active-cart");
}

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
