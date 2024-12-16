

// // Get all dropdown buttons and their lists
// let dropdownButtons = [
//     { button: document.getElementById("first-dropdown-toggle"),
//          list: document.getElementById("dropdown-toggle-list-show") },
//     { button: document.getElementById("type-dropdown-toggle"),
//          list: document.getElementById("type-dropdown-toggle-list-show") },
//     { button: document.getElementById("location-dropdown-toggle"), 
//         list: document.getElementById("location-dropdown-toggle-list-show") }
// ];

// // Loop over each dropdown button
// dropdownButtons.forEach((dropdown, index) => {
//     dropdown.button.addEventListener('click', () => {
//         // Toggle the active class on the clicked dropdown
//         dropdown.button.classList.toggle('dropdown-active');
//         dropdown.list.classList.toggle('dropdown-active');

//         // Close other dropdowns
//         dropdownButtons.forEach((otherDropdown, otherIndex) => {
//             if (otherIndex !== index) {
//                 otherDropdown.button.classList.remove('dropdown-active');
//                 otherDropdown.list.classList.remove('dropdown-active');
//             }
//         });
//     });
// });

// let faqsDropdown = document.querySelectorAll('.faqs-doctor-dropdown-wrapper');
// faqsDropdown.forEach( element => {
//     element.addEventListener('click',  () => {
//         if (element.classList.contains('faqs-active')) {
//             element.classList.remove('faqs-active');
//         }
//         else {
//             faqsDropdown.forEach(element =>{
//                 element.classList.remove('faqs-active');
//             });
//             element.classList.add('faqs-active');
//         }
//     })
// })







let faqsDropdown = document.querySelectorAll('.faqs-doctor-dropdown-wrapper');
for (let i = 0; i < faqsDropdown.length; i++) {
    faqsDropdown[i].addEventListener('click', function(){
        if (this.classList.contains('faqs-active')) {
            this.classList.remove('faqs-active');
        }
         else {
            for (let i = 0; i < faqsDropdown.length; i++) {
                faqsDropdown[i].classList.remove('faqs-active');
                
        }
        this.classList.add('faqs-active')
    }
});
}