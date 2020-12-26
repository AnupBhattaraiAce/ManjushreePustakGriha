var loader = document.querySelector(".loading-screen")

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disappear");
}
