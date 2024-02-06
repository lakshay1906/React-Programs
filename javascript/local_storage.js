// Storing the data in local storage
let btn = document.querySelector('button');
localStorage.setItem('Name', 'Lakshay');
console.log(localStorage.getItem('Name'));
localStorage.setItem('Weight', '56KG');
localStorage.setItem('weight', '56KG');
localStorage.setItem('number', 40);

let users = [{
    Name: 'Lakshay',
    PLanguage: 'Javascript',
    Age: '21',
    Height: `5'4''`,
},
{
    Name: 'Vishal',
    PLanguage: 'Java',
    Age: '21',
    Height: `5'4''`,
}]
btn.addEventListener('click',()=>{
    users.push({
    Name: 'Ishita',
    PLanguage: 'Python',
    Age: '21',
    Height: `5'4''`,
    });
    localStorage.setItem('data', JSON.stringify(users));
    console.log(JSON.parse(localStorage.getItem('data'))[2].Name); // giving output in shuffled way
});

localStorage.setItem('data', JSON.stringify(users));

console.log(JSON.parse(localStorage.getItem('data'))); // giving output in shuffled way
localStorage.removeItem('Weight');
localStorage.removeItem('weight');
// localStorage.clear(); // to clear all data from local storage

// IMPORTANT   NOTE :- Sensitive information is stored in local storage because all the data or info. is stored in the browser and anyone can see that data in the inspect section.