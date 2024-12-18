// Ensure the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const ctaButton = document.querySelector(".cta");

    ctaButton.addEventListener("click", function () {
        // Animate the button on click
        ctaButton.innerText = "Loading...";
        ctaButton.style.backgroundColor = "#ff6600";

        // Simulate an action (e.g., API call or navigation)
        setTimeout(() => {
            ctaButton.innerText = "Get Your Meme Coin Now!";
            ctaButton.style.backgroundColor = "#fff";
            alert("Thank you for showing interest in AI Meme Coin!");
        }, 2000); // 2 seconds delay
    });
});
