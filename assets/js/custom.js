

let menu = document.getElementById("toggle-menu");
let menuBtn = document.getElementById("call-menu");

menuBtn.addEventListener('click', function menuResponsive() {
    menuBtn.classList.toggle('menu-active');
    menu.classList.toggle('active');

    // menuResponsive();
});
document.getElementById('footerYear');
let newDate = new Date();
let fullYear = newDate.getFullYear();
console.log(fullYear);
document.getElementById('footerYear').innerText = fullYear;


// let imgsDropdown = document.querySelectorAll('.tabs-show');
// let faqsDropdown = document.querySelectorAll('.tabs-wrapper');

// for (let i = 0; i < faqsDropdown.length; i++) {
//     faqsDropdown[i].addEventListener('click', function () {

//         for (let i = 0; i < faqsDropdown.length; i++) {
//             faqsDropdown[i].classList.remove('faqs-active');
//             imgsDropdown[i].classList.remove('image-active');

//         }
//         faqsDropdown[i].classList.add('faqs-active');
//         console.log(faqsDropdown[i]);
//         imgsDropdown[i].classList.add('image-active');
//         console.log(imgsDropdown[i]);

//     });
// }

// let secure = document.querySelectorAll('.secure-show');
// let secureDropdown = document.querySelectorAll('.secure-wrapper');

// for (let i = 0; i < secureDropdown.length; i++) {
//     secureDropdown[i].addEventListener('click', function () {

//         for (let i = 0; i < secureDropdown.length; i++) {
//             secureDropdown[i].classList.remove('secure-active');
//             secure[i].classList.remove('secure-image-active');

//         }
//         secureDropdown[i].classList.add('secure-active');
//         console.log(secureDropdown[i]);
//         secure[i].classList.add('secure-image-active');
//         console.log(secure[i]);
//     });
// }

