//your code here!
let main=document.querySelector('main');
let ol = document.getElementById('infi-list');
for (let i = 1; i <= 10; i++) {
  ol.innerHTML += `<li>item ${i}</li>`;
}
function addItems() {
  let currentLength = ol.children.length;
  for (let i = 1; i <= 2; i++) {
    let li = document.createElement('li');
    li.textContent = `item ${currentLength + i}`;
    ol.appendChild(li);
  }
}
ol.addEventListener('scroll', () => {
  if (ol.scrollTop + ol.clientHeight >= ol.scrollHeight-10 ) {
    addItems();
  }
});

