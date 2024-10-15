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


// Counter Start
function countUp(elementId, targetNumber) {
    let currentNumber = 0;
    const interval = setInterval(() => {
        if (currentNumber < targetNumber) {
            currentNumber++;
            document.getElementById(elementId).innerText = currentNumber;
        } else {
            clearInterval(interval);
        }
    }, 10); // Adjust the interval time for speed
}

// Initialize counters with target values
window.onload = () => {
    countUp('participants', 500);
    countUp('subEvents', 3);
    countUp('seminars', 5);
    countUp('department', 53);
};
// Counter end