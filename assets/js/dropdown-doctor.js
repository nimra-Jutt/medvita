




// let dropdownbtn = document.getElementById("first-dropdown-toggle");
// let dropdownList = document.getElementById("dropdown-toggle-list-show");

// let Typedropdownbtn = document.getElementById("type-dropdown-toggle");
// let TypedropdownList = document.getElementById("type-dropdown-toggle-list-show");

// let locationdropdownbtn = document.getElementById("location-dropdown-toggle");
// let locationdropdownList = document.getElementById("location-dropdown-toggle-list-show");


// dropdownbtn.addEventListener('click', function firstdownStart() {
//     dropdownbtn.classList.toggle('dropdown-active');
//     dropdownList.classList.toggle('dropdown-active');

//     // close other dropdown 
//     Typedropdownbtn.classList.remove('type-dropdown-active');
//     TypedropdownList.classList.remove('type-dropdown-active');
//     locationdropdownbtn.classList.remove('location-dropdown-active');
//     locationdropdownList.classList.remove('location-dropdown-active');


// });




// Typedropdownbtn.addEventListener('click', function typedownStart(){
//     Typedropdownbtn.classList.toggle('type-dropdown-active');
//     TypedropdownList.classList.toggle('type-dropdown-active');

//     // close other dropdown 
//     dropdownbtn.classList.remove('dropdown-active');
//     dropdownList.classList.remove('dropdown-active');
//     locationdropdownbtn.classList.remove('location-dropdown-active');
//     locationdropdownList.classList.remove('location-dropdown-active');


// });




// locationdropdownbtn.addEventListener('click', function locationdownStart() {
//     locationdropdownbtn.classList.toggle('location-dropdown-active');
//     locationdropdownList.classList.toggle('location-dropdown-active');

//     // close other dropdown 
//     dropdownbtn.classList.remove('dropdown-active');
//     dropdownList.classList.remove('dropdown-active');
//     Typedropdownbtn.classList.remove('type-dropdown-active');
//     TypedropdownList.classList.remove('type-dropdown-active');

// });



// let dropdownItem = document.querySelectorAll('.doctor-dropdown-wrapper')
// console.log(dropdownItem);






// Get all dropdown buttons and their lists
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









// let dropdowns = document.querySelectorAll('.doctor-dropdown-wrapper');
// for (let i = 0; i < dropdowns.length; i++) {
//     dropdowns[i].addEventListener('click', function (){
//     if(this.classList.contains('dropdown-active')){
//         this.classList.remove('dropdown-active');
//     }
//     else{
//         for (let i = 0; i < dropdowns.length; i++) {
//             dropdowns[i].classList.remove('dropdown-active');
//         }
//         this.classList.add('dropdown-active');
//     }
// });
// }

// console.log(dropdowns);



let dropdowns = document.querySelectorAll('.doctor-dropdown-wrapper');
dropdowns.forEach( element => {
    element.addEventListener('click',  () => {
        if (element.classList.contains('dropdown-active')) {
            element.classList.remove('dropdown-active');
        }
        else {
            dropdowns.forEach(element =>{
                element.classList.remove('dropdown-active');
            });
            element.classList.add('dropdown-active');
        }
    }
    )
})




// const numbers = [65, 44, 12, 4];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }
// numbers.forEach( num => console.log(num));
