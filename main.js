document.addEventListener("DOMContentLoaded", () => {
    const innovativeText = document.querySelector(".innovative-public-health");
    const hoverImage = document.getElementById("hover-image");

    if (innovativeText && hoverImage) {
        innovativeText.addEventListener("mouseenter", () => {
            hoverImage.style.opacity = "1";
            hoverImage.style.visibility = "visible";
        });

        innovativeText.addEventListener("mouseleave", () => {
            hoverImage.style.opacity = "0";
            hoverImage.style.visibility = "hidden";
        });
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const backgroundContainer = document.getElementById("sliding-background");
  
    // Array of background image URLs
    const images = ["img/blue_footer_banner.png", "img/blue_footer_banner.png"];
  
    // Dynamically create img elements for each image
    images.forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "Sliding background image";
      backgroundContainer.appendChild(img);
    });
  });
  