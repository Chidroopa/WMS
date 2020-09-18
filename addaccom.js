function formAccomdation()
{
    var hname = document.addaccomd.h_name;
    var cnum = document.addaccomd.c_hall;
    var uinch = document.addaccomd.incharge;
    var uaddr=document.addaccomd.addr;
    if(allLetter(hname))
    {
        if(allnumeric(cnum))
        {
            if(allfield(uinch))
            {
                if(alladdress(uaddr))
                {
                    alert("Form Successfull");
                }
                
            }
           
        }
       
    }
    return false;
}
function allLetter(hname)
{ 
    var letters = /^[A-Za-z]+$/;
    if(hname.value.match(letters))
    {
        return true;
    }
    else if(hname.value.length==0)
    {
        alert('Hall name should not empty');
        hname.focus();
        return false;
    }
    else
    {
        alert('Hall Name must have alphabet characters only');
        hname.focus();
        return false;
    }
}
function allnumeric(cnum)
{ 
    var numbers = /^[0-9]+$/;
    if(cnum.value.match(numbers))
    {
        return true;
    }
    else
    {
        alert('Capacity must be numeric');
        cnum.focus();
        return false;
    }
}
function allfield(uinch)
{ 
    var letters = /^[A-Za-z]+$/;
    if(uinch.value.match(letters))
    {
        return true;
    }
    else if(uinch.value.length==0)
    {
        alert('Incharge Field should not empty');
        uinch.focus();
        return false;
    }
    else
    {
        alert('Incharge Field must have alphabet characters only');
        uinch.focus();
        return false;
    }
}
function alladdress(uaddr)
{ 
    if(uaddr.value.length>7)
    {
        return true;
    }
    else
    {
        alert('Address Field should not have more than 7 letter');
        uaddr.focus();
        return false;
    }
}