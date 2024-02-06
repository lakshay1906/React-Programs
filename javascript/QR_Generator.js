let input = document.querySelector('input');
let img_con = document.getElementById('image-container');
let img = document.querySelector('img');
let btn = document.querySelector('button');
btn.addEventListener('click', ()=>{
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
    localStorage.setItem('url', url);
    img_con.classList.remove('image_js');
    img.setAttribute('src', url);
})