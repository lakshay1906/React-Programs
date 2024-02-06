console.log("Radhe Radhe");
let movieData = [
    {
        movieImg:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/706b9474134343.5c239806af449.jpg",
        movieTitle: "Uri",
        moviePrice: "$5",
        movieDesc: "Aladin movie"
    },
    {
        movieImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq8uLI_zyCYxBRO1u9FVJ0eoYl3R82HobrUQ&usqp=CAU",
        movieTitle: "Titanic",
        moviePrice: "$5",
        movieDesc: "titanic movie"
    },
    {
        movieImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq8uLI_zyCYxBRO1u9FVJ0eoYl3R82HobrUQ&usqp=CAU",
        movieTitle: "Titanic",
        moviePrice: "$5",
        movieDesc: "titanic movie"
    }
];

movieData.map((element)=>{
    return addCard(element.movieImg, element.movieTitle, element.moviePrice, element.movieDesc);
})

function addCard(movieImg, movieTitle, moviePrice, movieDesc)
{
    let div = document.createElement("div");
    let h1 = document.createElement("h1");
    let img = document.createElement("img");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    img.setAttribute("src" , movieImg);
    h1.innerText = movieTitle;
    h2.innerText = moviePrice;
    p.innerText = movieDesc;

    div.classList = "box";

    document.body.appendChild(div);
    div.appendChild(img);
    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(p);
}

function moreCard()
{
    let img = prompt("Enter the URL of the image :");
    let title = prompt("Enter the title of the movie: ");
    let price = prompt("Enter the price of the movie ticket: ");
    let description = prompt("Enter the description of the movie: ")
    
    let arr = {
        movieImg:`${img}`,
        movieTitle: `${title}`,
        moviePrice: `${price}`,
        movieDesc: `${description}`
    }
    movieData.push(arr);
    localStorage.setItem('data', JSON.stringify(movieData));
    addCard(img, title, price, description);
    console.log(localStorage.getItem('data'));  
}