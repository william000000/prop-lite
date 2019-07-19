function openSlideMenu() {
    document.getElementById('side-menu').style.width = '200px';
    document.querySelector('.container').style.marginLEFT = '250px';
}
function closeSlideMenu() {
    document.getElementById('side-menu').style.width = '0';
}

const report = document.querySelector('.report');
const popup = document.querySelector('.popup');
const details = document.querySelector('.bg-modal');
const img = document.querySelector('.sec2');
function showModal() {
    popup.style.display = "block";
}
function closeModal() {
    popup.style.display = "none";
}

function message() {
    confirm('Are you sure you want to delete it?');
}

