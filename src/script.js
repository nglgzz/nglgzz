const circle = document.querySelector('circle');

const image = document.querySelector('image');
image.setAttribute('height', window.innerHeight);
image.setAttribute('width', (1250 / 800) * window.innerHeight);

window.addEventListener('mousemove', e => {
  circle.setAttribute('cx', e.clientX);
  circle.setAttribute('cy', e.clientY);
});

window.addEventListener('scroll', () => {
  const doc = document.documentElement;
  const bod = document.body;

  const scrollTop = doc['scrollTop'] || bod['scrollTop'];
  const scrollHeight = doc['scrollHeight'] || bod['scrollHeight'];

  const scrollPerc = scrollTop / (scrollHeight - doc.clientHeight);

  circle.setAttribute('r', scrollPerc * 300 + 200);
});
