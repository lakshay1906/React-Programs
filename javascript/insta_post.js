let mobile = document.createElement("div");
mobile.classList.add("mobile-outer");
document.body.appendChild(mobile);
let pics = ["https://trailerbabu.com/wp-content/uploads/2019/07/mission-mangal-movie-poster-vertical-400x650.jpg", "https://trailerbabu.com/wp-content/uploads/2023/10/animal-400x650.jpg","https://trailerbabu.com/wp-content/uploads/2023/11/sajini-shinde-ka-viral-video-400x650.jpg"];
let img = document.createElement("img");
mobile.appendChild(img);
img.classList.add("img");
function showpic()
{
    for(let i=0;i<3;i++)
    {
        setInterval(()=>{
            img.setAttribute("src", pics[i]);
        },4000);
    }
}
showpic();
// setTimeout(showpic,5000);