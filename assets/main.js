const menuClose = document.querySelector('.menu-close');
const menuList = document.querySelector('.menu-list');
const menuListMobile = document.querySelector('.menu-list-mobile');
const menuHamb = document.querySelector('.menu-hamburger');
function watchMedia(x) {
    if(x.matches) {
        menuList.classList.add('hidden');
        menuListMobile.classList.add('hidden');
        menuHamb.classList.remove('hidden');
    } else {
        menuListMobile.classList.add('hidden');
        menuHamb.classList.add('hidden');
        menuList.classList.remove('hidden');
    }
}
const query = window.matchMedia("(max-width: 1439px)");
watchMedia(query);
query.addListener(watchMedia);

menuClose.onclick = () => {
    menuListMobile.classList.add('hidden');
};

menuHamb.onclick = () => {
    menuListMobile.classList.remove('hidden');
};