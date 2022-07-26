import speakerArray from './data.js';

function setAttributes(el, attrs) {
  for (const key of attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

const speakerCard = (spkCard) => {
// First create elements

  const div1 = document.createElement('div');
  const img1 = document.createElement('img');
  const div2 = document.createElement('div');
  const h31 = document.createElement('h3');
  const p1 = document.createElement('p');
  const div3 = document.createElement('div');
  const div4 = document.createElement('div');
  const p2 = document.createElement('p');
  const cards = document.querySelector('.speaker-container');

  // append as per requirement into body
  const card1 = document.createElement('article');
  cards.append(card1);
  card1.append(div1);
  div1.append(img1);
  div1.append(div2);
  div2.append(h31);
  div2.append(p1);
  div2.append(div3);
  div2.append(div4);
  div2.append(p2);

  // populate the card
  div1.setAttribute('class', 'conf-speakers');
  div2.setAttribute('class', 'right-side');
  div3.setAttribute('class', 'bar2');
  div4.setAttribute('class', 'divider');
  p1.setAttribute('class', 'title');
  h31.innerHTML = spkCard.name;
  setAttributes(img1, { src: spkCard.image, class: 'sp-photo', alt: 'Speaker Photo' });
  p2.innerHTML = spkCard.description;
  p1.innerHTML = spkCard.title;
};

speakerArray.forEach((element) => {
  speakerCard(element);
});
