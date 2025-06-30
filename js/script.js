let $ = document;
let navbarItemHasAlert = document.querySelector('.navbar__link--alert');
let exitAlertBtn = document.querySelector('.navbar__itemAlertExit');
let closeAlertBtn = document.querySelector('.navbar__itemAlertClose');
let navbarItemAlert = document.querySelector('.navbar__itemAlert');
let blackBackground = $.querySelector(".navbar__blackBackground");
let hamburgerButton = $.querySelector(".navbar__hamburgerButton");
let mobileItems = $.querySelector(".navbar__itemsMobile");

function mobileItemsController() {
    mobileItems.classList.toggle("navbar__itemsMobile--open")
    blackBackground.classList.toggle("navbar__blackBackground--open")
}

blackBackground.addEventListener("click", mobileItemsController);
hamburgerButton.addEventListener("click", mobileItemsController);

navbarItemHasAlert.addEventListener("click", function (event) {
    event.preventDefault();
    navbarItemAlert.classList.toggle("navbar__itemAlert--open");
});

closeAlertBtn.addEventListener("click", function (event) {
    navbarItemAlert.classList.remove("navbar__itemAlert--open");
})

exitAlertBtn
.addEventListener("click", function (event) {
    window.location = "";
})