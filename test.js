/* alteranative code for line:40 - 70*/ 

/* function: display the large image of the thumbnail clicked 
        for both normal and lightbox*/
let activeThumbnail = null;

function updateDisplayedImage(imageUrl) {
    mainImgDisplay.src = imageUrl;
    lightboxDisplay.src = imageUrl;
}
function changeImageDisplay() {
    thumbnails.forEach(function (thumbnail) {
        if (thumbnail !== this) {
            thumbnail.classList.remove("active");
        }
    }, this);
    this.classList.add("active");
    activeThumbnail = this;

    const index = parseInt(this.getAttribute("data-index"));
    updateDisplayedImage(imageUrls[index]);
}
thumbnails.forEach(function (thumbnail) {
    thumbnail.addEventListener('click', changeImageDisplay);
});