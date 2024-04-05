window.onload = function() {
    var menu = document.getElementById('slide-out-menu');
    menu.style.right = '-100%';

    AOS.init();
}

document.getElementById('menu-button').addEventListener('click', function() {
    var menu = document.getElementById('slide-out-menu');
    if (menu.style.right === '-100%') {
        menu.style.right = '0';
    } else {
        menu.style.right = '-100%';
    }

    this.classList.toggle('clicked');
    document.getElementById('slide-out-menu').classList.toggle('open');
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Thank you for submitting a form, our team will respond in between 2-5 business days");
});