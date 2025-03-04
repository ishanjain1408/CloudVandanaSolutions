const images = [
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1020/600/400",
    "https://picsum.photos/id/1033/600/400",
    "https://picsum.photos/id/1041/600/400"
];

let currentIndex = 0;

const sliderImage = document.getElementById('sliderImage');

function showImage(index) {
    sliderImage.src = images[index];
}

function prevImage() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    showImage(currentIndex);
}

window.onload = () => showImage(currentIndex);
