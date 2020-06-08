const menuBtn = document.querySelector('.m-menu'),
    menu = document.querySelector('.menu-sidebar'),
    menuSidebar = document.querySelector('.menu-sidebar'),
    fanpageFooterForm = document.querySelector('.fanpage-footer-form'),
    likesRadio = document.getElementById('likes'),
    viewsRadio = document.getElementById('views'),
    postsRadio = document.getElementById('posts');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    if (menu.classList.contains('active')) {
        menuBtn.style.transform = 'rotate(90deg)';
        menuBtn.style.transition = 'transform 0.3s';
    } else {
        menuBtn.style.transform = '';
        menuBtn.style.transition = 'transform 0.3s';
    }
});

fanpageFooterForm.addEventListener('click', (event) => {
    likesRadio.parentElement.style.border = '';
    likesRadio.nextElementSibling.style.color = '';
    viewsRadio.parentElement.style.border = '';
    viewsRadio.nextElementSibling.style.color = '';
    postsRadio.parentElement.style.border = '';
    postsRadio.nextElementSibling.style.color = '';
    if (likesRadio.checked) {
        likesRadio.parentElement.style.border = '1px solid #1890FF';
        likesRadio.nextElementSibling.style.color = '#1890FF';
    }
    if (viewsRadio.checked) {
        viewsRadio.parentElement.style.border = '1px solid #1890FF';
        viewsRadio.nextElementSibling.style.color = '#1890FF';
    }
    if (postsRadio.checked) {
        postsRadio.parentElement.style.border = '1px solid #1890FF';
        postsRadio.nextElementSibling.style.color = '#1890FF';
    }
});
