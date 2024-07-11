const imageSources = ['image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.jpg','image6.jpeg','image7.jpeg','image8.webp','image9.webp','image10.jpg','image11.jpg','image12.png','image13.jpg'];
function changeBackgroundImage() {
const randomIndex = Math.floor(Math.random() * imageSources.length);
document.body.style.backgroundImage = `url(${imageSources[randomIndex]})`;
}
// Change the background image every 1 seconds (1000 milliseconds)
setInterval(changeBackgroundImage, 1000);

