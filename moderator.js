function formModerator()
{
	var uname = document.moderator.u_name;
	var passid = document.moderator.psw;
	var uzip = document.moderator.userid;
	var uemail = document.moderator.email;
	var ugender=document.moderator.gender;
	var ufield = document.moderator.field;
    if(allLetter(uname))
    {
        if(passid_validation(passid,7,12))
        {
        //     if(stateselect(ugender))
        //     {
                 if(allnumeric(uzip))
                 {
                     if(ValidateEmail(uemail))
                   {
                        if(stateselect(ugender))
                        {
                            if(allfield(ufield))
                            {
                                alert("Form Successfully Submitted");
                            }
                        }
                   }
               }
        //     }
     }
    }
    return false;
}
function passid_validation(passid,mx,my)
{
    var passid_len = passid.value.length;
    var letters = /^[0-9a-zA-Z]+$/;
    if(passid_len == 0 ||passid_len >= my || passid_len < mx)
    {
        alert("Password should not be empty/length be between "+mx+" to "+my);
        passid.focus();
        return false;
    }
    if(passid.value.match(letters))
    {
        return true;
    }
    alert('Password must contain alphanumeric characters');
    passid.focus();
    return false;
}
function allLetter(uname)
{ 
    var letters = /^[A-Za-z]+$/;
    if(uname.value.match(letters))
    {
        return true;
    }
    else if(uname.value.length==0)
    {
        alert('Your name should not empty');
        uname.focus();
        return false;
    }
    else
    {
        alert('Your name must have alphabet characters only');
        uname.focus();
        return false;
    }
}
function stateselect(ugender)
{
    if(ugender.value == "Default")
    {
        alert('Select male or female ');
        ugender.focus();
        return false;
    }
    else
    {
        return true;
    }
}
function allnumeric(uzip)
{ 
    var numbers = /^[0-9]+$/;
    if(uzip.value.match(numbers))
    {
        return true;
    }
    else
    {
        alert('UserID must have numeric characters');
        uzip.focus();
        return false;
    }
}
function ValidateEmail(uemail)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(uemail.value.match(mailformat))
    {
        return true;
    }
    else
    {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
}
function allfield(ufield)
{ 
    var letters = /^[A-Za-z]+$/;
    if(ufield.value.match(letters))
    {
        return true;
    }
    else if(ufield.value.length==0)
    {
        alert('Field should not empty');
        ufield.focus();
        return false;
    }
    else
    {
        alert('This Field must have alphabet characters only');
        ufield.focus();
        return false;
    }
}
