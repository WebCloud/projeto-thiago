export default function videoView({ title, chanel, thumbnail }) {
  const thumbnailImage = document.createElement('img');
  thumbnailImage.src = thumbnail;

  const titleElement = document.createElement('h1');
  titleElement.textContent = title;

  const chanelElement = document.createElement('span');
  chanelElement.textContent = chanel;

  const videoViewElement = document.createElement('div');

  videoViewElement.appendChild(thumbnailImage);
  videoViewElement.appendChild(titleElement);
  videoViewElement.appendChild(chanelElement);

  return videoViewElement;
};
