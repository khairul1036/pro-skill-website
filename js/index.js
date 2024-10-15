// <!-- JavaScript to control the popup menu start-->
const hamburgerMenu = document.getElementById('hamburgerMenu');
const mobileSidebar = document.getElementById('mobileSidebar');
const closeSidebar = document.getElementById('closeSidebar');

hamburgerMenu.addEventListener('click', () => {
    mobileSidebar.classList.toggle('translate-x-full');
});

closeSidebar.addEventListener('click', () => {
    mobileSidebar.classList.add('translate-x-full');
});
// <!-- JavaScript to control the popup menu end-->
