/* Add JavaScript code here! */
const hidden_menu_items = document.querySelector('.menu + div');
const menu = document.querySelector('.menu');
menu.addEventListener('click', () => {
  if (hidden_menu_items.classList.contains('hidden')) {
    hidden_menu_items.classList.toggle('hidden', false);
    return;
  }
  hidden_menu_items.classList.toggle('hidden', true);
});

hidden_menu_items.childNodes.forEach((li) => {
  li.addEventListener('click', () => {
    if (hidden_menu_items.classList.contains('hidden')) {
      hidden_menu_items.classList.toggle('hidden', false);
      return;
    }
    hidden_menu_items.classList.toggle('hidden', true);
  });
});
