function getdata(dataid, getnextdata){
    setTimeout(()=>{
        console.log(dataid);
        if(getnextdata)
        {
            getnextdata();
        }
    }, 2000)
}
getdata(1, ()=>{
    console.log("Getting data 2");
    getdata(2, ()=>{
        console.log("Getting data 3");
        getdata(3, ()=>{
            console.log("Getting data 4");
            getdata(4);
        });
    });
});
//When there are nested callbacks (callback inside callback) this situation is knowns as callback hell(also known as pyramid of Doom). And to solve this problem we have promises. 