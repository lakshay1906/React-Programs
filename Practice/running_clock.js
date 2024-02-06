function showtime()
{
    let date = new Date();
    let hr = date.getHours();
    let realhours;
    // console.log(hr);
    if(hr>12)
    {
        realhours = hr-12;
    }
    else
    {
        realhours = hr;
    }
    date.setHours(realhours);
    let current_time = date.getHours()+" : "+date.getMinutes()+" : "+date.getSeconds();
    // console.log(current_time);
    document.getElementById("clock").innerHTML = current_time;
}

setInterval(showtime, 1000);