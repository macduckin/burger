let modalReservation = document.querySelector('.modal-res');
let modalDouble = document.querySelector('.double-inner button')
let modalImg = document.querySelector('#modal-img')
let whyModal = document.querySelector('.why-modal')
let images = [
    "https://template79170.motopreview.com/mt-demo/79100/79170/mt-content/uploads/2019/03/mt-1781-home-gallery-img1.jpg",
    "https://template79170.motopreview.com/mt-demo/79100/79170/mt-content/uploads/2019/03/mt-1781-home-gallery-img4.jpg",
    "https://template79170.motopreview.com/mt-demo/79100/79170/mt-content/uploads/2019/03/mt-1781-home-gallery2.jpg",
    "https://template79170.motopreview.com/mt-demo/79100/79170/mt-content/uploads/2019/03/mt-1781-home-gallery3.jpg",
    "https://template79170.motopreview.com/mt-demo/79100/79170/mt-content/uploads/2019/03/mt-1781-home-gallery5.jpg"
];
let pictureIndex = 0;
let showModalWindow = () => {
    modalReservation.classList.add('why-active');
    pictureIndex = index;
}
let closeModalWindow = () => {
    modalReservation.classList.remove('why-active');
}
function changeImg(num) {
    pictureIndex += num;
    if (pictureIndex >= images.length) {
        pictureIndex = 0;
    }
    else if (pictureIndex < 0) {
        pictureIndex = images.length - 1;

    }
    modalImg.src = images[pictureIndex];
}
// let showModalImg = (image) => {
//     console.log(image);
//     modalImg.src = image.src;
//     whyModal.classList.add('why-active')
//     whyModal.classList.add('why-animation')
// }

let showModalImg2 = (image) => {
    console.log(image);
    modalImg.src = image;
    whyModal.classList.add('why-active');
    whyModal.classList.add('why-animation');
}

let closeModalImg = () => {
    whyModal.classList.remove('why-active');
}