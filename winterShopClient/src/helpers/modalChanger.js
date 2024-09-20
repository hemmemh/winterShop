export default function modalChanger(menu) {
  let bool = false;
  window.innerWidth < 991.98 ? (bool = true) : (bool = false);
  if (menu && window.innerWidth <= 767.98) {
    document.body.classList.add('hidden');
  }

  if (window.innerWidth > 767.98) {
    document.body.classList.remove('hidden');
  }
  return bool;
}
