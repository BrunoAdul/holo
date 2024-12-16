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



  
