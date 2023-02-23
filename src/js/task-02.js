const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');
const ingrList = ingredients.map(elem => {
  const listEl = document.createElement('li');
  listEl.textContent = elem;
  listEl.classList.add('item');
  return listEl;
});
list.append(...ingrList);
