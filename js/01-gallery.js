import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");

function createMurkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join("");
}

gallery.insertAdjacentHTML("beforeend", createMurkup(galleryItems));
gallery.addEventListener("click", handlerClick);

function handlerClick(event) {
  event.preventDefault();
  const originalImg = event.target.dataset.source;
  const instance = basicLightbox.create(`
	<img class='js-esc' src="${originalImg}">
`);
  instance.show();
  closeModal();
  function closeModal() {
    if (instance.visible()) {
      document.addEventListener("keydown", handlerkeydown);
      function handlerkeydown(event) {
        if (event.code === "Escape") {
          instance.close();
        }
        if (!instance.visible()) {
          document.removeEventListener("keydown", handlerkeydown);
        }
      }
    }
  }
}
