let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    // searchForm.classList.remove('active'); // Kaldırıldı
    // cartItem.classList.remove('active'); // Kaldırıldı
}
