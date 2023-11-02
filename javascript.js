// loader
window.addEventListener("load", function () {
  // Simulate a delay of 2 seconds (2000 milliseconds)
  setTimeout(function () {
    const loader = document.querySelector(".loader");
    loader.parentElement.classList.add("loaded");
  }, 2000);
});
