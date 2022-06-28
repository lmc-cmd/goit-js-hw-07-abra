import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const makeGallery = galleryItems.map((e) => {
  const galarryItem = document.createElement(`div`);
  galarryItem.classList.add(`gallery__item`);
  const makeItemLink = () => {
    const galleryItemLink = document.createElement(`a`);
    galleryItemLink.classList.add(`gallery__link`);
    const makeImg = () => {
      const imgItem = document.createElement(`img`);
      imgItem.classList.add(`gallery__image`);
      imgItem.src = e.preview;
      imgItem.dataSource = e.original;
      imgItem.alt = e.description;
      return imgItem;
    };
    galleryItemLink.append(makeImg());
    return galleryItemLink;
  };
  galarryItem.append(makeItemLink());
  return galarryItem;
});
galleryEl.append(...makeGallery);

// const basicLightbox = require("basiclightbox");
// console.dir(makeGallery);

//     `<div class="gallery__item">
// //     <a class="gallery__link" href="large-image.jpg">
// //       <img
// //         class="gallery__image"
// //         src="small-image.jpg"
// //         data-source="large-image.jpg"
// //         alt="Image description"
// //       />
// //     </a>
// //   </div>`
// );

// galleryEl.innerHTML(makeGallery());

// /   ; //   c;
//   {
//     const galleryItemLink = document.createElement(`a`);
//     galleryItemLink.classList.add(`gallery__link`);
//     return galleryItemLink;
//   }
//   return galarryItem;
// });
//   .galleryEl.append(makeGallery);
// `<div class="gallery__item">
//     <a class="gallery__link" href="large-image.jpg">
//       <img
//         class="gallery__image"
//         src="small-image.jpg"
//         data-source="large-image.jpg"
//         alt="Image description"
//       />
//     </a>
//   </div>`;

// console.log(makeGallery);

// const makeGaleryEL = ({ url, alt } = {}) =>
//   `<li class="gallery__item"><a href=""><img src=${url} alt=${alt} width="300" height="200"
//     style= margin:20px></a></li>`;

// {
//   `<div class="gallery__item">
//     <a class="gallery__link" href="large-image.jpg">
//       <img
//         class="gallery__image"
//         src="small-image.jpg"
//         data-source="large-image.jpg"
//         alt="Image description"
//       />
//     </a>
//   </div>`;
// }

// const htmlInstance = basicLightbox.create(document.querySelector("#html"));
