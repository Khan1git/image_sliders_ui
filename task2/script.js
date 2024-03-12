const images = document.querySelectorAll('.img1 img, .img2 img');

// // Add click event listener to each image
// images.forEach(image => {
//     image.addEventListener('click', function () {
//         const imageUrl = this.src;
//         document.querySelector('#modal').style.display = 'block';
//         document.getElementById('#pic').src = imageUrl;
//         alert("Image URL: " + imageUrl);
//     });
// });
let currentIndex = 0;

images.forEach((image, index) => {
    image.addEventListener('click', function () {
        currentIndex = index;
        const imageUrl = this.src;
        const modal = document.getElementById('modal');
        const modalImage = document.getElementById('pic');
        modal.style.display = 'block';
        modalImage.src = imageUrl;
    });
});

function closeSlider() {
    document.getElementById('modal').style.display = 'none';
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    const imageUrl = images[currentIndex].src;
    const modalImage = document.getElementById('pic');
    modalImage.src = imageUrl;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    const imageUrl = images[currentIndex].src;
    const modalImage = document.getElementById('pic');
    modalImage.src = imageUrl;
}


// function openSlider() {
//   document.querySelector('#modal').style.display = 'block';
// }
// function closeSlider() {
//      document.querySelector('#modal').style.display = 'none';
// }
