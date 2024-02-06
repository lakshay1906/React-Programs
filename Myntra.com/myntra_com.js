let d = document;
let cart_counter = d.getElementsByClassName("cart-counter")[0];
let add_to_cart = d.getElementsByClassName("add-to-cart")[0];
let mwbtb1 = d.getElementsByClassName('mwbtb-1')[0];
let mwbtb2 = d.getElementsByClassName('mwbtb-2')[0];
let mwbtb3 = d.getElementsByClassName('mwbtb-3')[0];
let mwbtb4 = d.getElementsByClassName('mwbtb-4')[0];
let mwbtb5 = d.getElementsByClassName('mwbtb-5')[0];
let mwbtb6 = d.getElementsByClassName('mwbtb-6')[0];
let count = 0
cart_counter.innerHTML = count;

mwbtb1.addEventListener('click',()=>{
    count++;
    cart_counter.innerHTML = count;
    cart_counter.classList.add('cart-counter-js');
})
mwbtb2.addEventListener('click',()=>{
    count++;
    cart_counter.innerHTML = count;
    cart_counter.classList.add('cart-counter-js');
})
mwbtb3.addEventListener('click',()=>{
    count++;
    cart_counter.innerHTML = count;
    cart_counter.classList.add('cart-counter-js');
})
mwbtb4.addEventListener('click',()=>{
    count++;
    cart_counter.innerHTML = count;
    cart_counter.classList.add('cart-counter-js');
})
mwbtb5.addEventListener('click',()=>{
    count++;
    cart_counter.innerHTML = count;
    cart_counter.classList.add('cart-counter-js');
})
mwbtb6.addEventListener('click',()=>{
    count++;
    cart_counter.innerHTML = count;
    cart_counter.classList.add('cart-counter-js');
})