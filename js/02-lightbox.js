import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const makeGallery = galleryItems.map((e) => {
  // const galarryItem = document.createElement(`div`);
  // galarryItem.classList.add(`gallery__item`);
  const makeItemLink = () => {
    const galleryItemLink = document.createElement(`a`);
    galleryItemLink.classList.add(`gallery__link`);
    const makeImg = () => {
      const imgItem = document.createElement(`img`);
      imgItem.classList.add(`gallery__image`);
      imgItem.src = e.preview;
      // imgItem.dataSource = e.original;
      imgItem.alt = e.description;
      return imgItem;
    };
    galleryItemLink.append(makeImg());
    return galleryItemLink;
  };
  galleryEl.append(makeItemLink());
  // return galarryItem;
});
galleryEl.append(...makeGallery);

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionPosition: "bottom",
  captionData: "alt",
  navtext: ["<~", "~>"],
});

{
  /* <a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a>;
 */
}

// galleryEl.addEventListener(`click`, (e) => {
//   gallery.on("show.simplelightbox");
// });
// let gallery = new SimpleLightbox(".gallery a");
// gallery.on("show.simplelightbox", function () {
//   console.log(`asdsaa`);

//   // Do something…
// });

// **Example**
// ```javascript
// let gallery = new SimpleLightbox(".gallery a");
// gallery.on("show.simplelightbox", function () {
//   // Do something…
// });

// gallery.on('error.simplelightbox', function (e) {
// 	console.log(e); // Some usefull information
// });

// // with jQuery nearly the same
// let gallery = $('.gallery a').simpleLightbox();
// gallery.on('show.simplelightbox', function () {
// 	// Do something…
// });
