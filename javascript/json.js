let product ={
    name:'Tshirt',
    price: 499,
    rating: {
        stars: 4.5,
        reviews: 47,
    },
}
console.log(typeof product);
console.log(product);
let str = JSON.stringify(product);      // converting object into string
console.log(typeof str);
console.log(str);

let previous = JSON.parse(str);         // converting the string back into previous form that is object; We covert objects into strings because it is easy to send string over the internet
                                // we are using JSON to store data in local storage
console.log(typeof previous);
console.log(previous);

