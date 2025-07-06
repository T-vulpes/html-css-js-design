let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    // searchForm.classList.remove('active'); // Kaldırıldı
    // cartItem.classList.remove('active'); // Kaldırıldı
}

// searchForm ve cartItem ile ilgili diğer kodları kaldırın
// let searchForm = document.querySelector('.search-form');
// document.querySelector('#search-btn').onclick = () =>{...}
// let cartItem = document.querySelector('.cart-items-container');
// document.querySelector('#cart-btn').onclick = () =>{...}

window.onscroll = () =>{
    navbar.classList.remove('active');
    // searchForm.classList.remove('active'); // Kaldırıldı
    // cartItem.classList.remove('active'); // Kaldırıldı
}