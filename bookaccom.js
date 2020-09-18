function formBookAccomdation()
{
    var bhall = document.bookaccomd.hall;
    var bslots = document.bookaccomd.slots;
    if(stateselect(bhall))
    {
        if(bokslots(bslots))
        {
            alert("Successfull Submission");
        }
    }
    return false;
}
function stateselect(bhall)
{
    if(bhall.value == "default")
    {
        alert('Select hall from given below ');
        bhall.focus();
        return false;
    }
    else
    {
        return true;
    }
}
function bokslots(bslots)
{
    if(bslots.value == "default")
    {
        alert('Select available slots here ');
        bslots.focus();
        return false;
    }
    else
    {
        return true;
    }
}