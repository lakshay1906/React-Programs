function validateForm()
{
    let returnVal = true;
    let name = document.getElementById('firstname').value;
    // console.log(name.length)
    if(name.length <3)
    {
        setError('firstname',"name is invalid")
    }

    return returnVal;
}
function setError(id, error)
{
    let element = document.getElementById(id);
    document.getElementsByClassName('error')[0].innerHTML = error;
}
let show_pass = document.getElementById('show_pass');
show_pass.addEventListener('click', ()=>{
    show_pass.setAttribute('type', 'text');
});
