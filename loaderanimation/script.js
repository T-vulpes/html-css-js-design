window.addEventListener("load", () => {
  const loader = document.getElementById("loader-wrapper");
  const content = document.getElementById("main-content");
  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
      content.style.display = "block";
    }, 600);
  }, 5000);
});
