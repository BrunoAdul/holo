document.addEventListener("DOMContentLoaded", () => {
    const backgroundContainer = document.getElementById("sliding-background");
  
    // Array of background image URLs
    const images = [
      "img/blue_footer_banner.png",
      "img/green_footer_banner.png"
    ];
  
    let currentIndex = 0;
  
    // Function to change the background image
    function changeBackgroundImage() {
      backgroundContainer.style.backgroundImage = `url('${images[currentIndex]}')`;
  
      // Update the index to the next image
      currentIndex = (currentIndex + 1) % images.length;
    }
  
    // Initial call to set the first image
    changeBackgroundImage();
  
    // Set interval to change the background image every 5 seconds
    setInterval(changeBackgroundImage, 5000);
  });
  