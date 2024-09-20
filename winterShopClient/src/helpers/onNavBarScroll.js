export default function onNavBarScroll(navBarRef) {
  let navbarScroll = false;
  if (navBarRef && window.scrollY > navBarRef.offsetHeight / 2) {
    navbarScroll = true;
  } else if (navBarRef) {
    navbarScroll = false;
  }
  return navbarScroll;
}
