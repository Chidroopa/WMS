function isValid()
{
    var uname=document.form1.pname.value;
    var utitle=document.form1.ptitle.value;
   var uthoughts=document.form1.textarea1.value;
    return isNameValid(uname) && isTitleValid(utitle) &&isTextValid(uthoughts);
}

function isNameValid(uname)
{
    var ulen=uname.length;
    if(ulen==0)
    {
        alert("Username shouldn't be empty.!")
        return false
    }
    else if(ulen <8 || ulen >12)
    {
        alert("Username should contain 8-12 characters,yours contains "+ulen)
        return false
    }
    var letters=/[A-Za-z]*/
    if(uname.match(letters)=="")
    {
        alert("Username should contain ONLY ALPHABETS.!")
        return false
    }
    return true
}

function isTitleValid(utitle)
{
    var title_length=utitle.length;
    if(title_length==0)
    {
        alert("Title shouldn't be empty.!")
        return false
    }
    
    var letters=/[A-Za-z0-9]*/
    if(utitle.match(letters)=="")
    {
        alert("Title should contain ONLY ALPHABETS AND LETTERS.!")
        return false
    }
    return true
}

function isTextValid(uthoughts)
{
    var ulen=uthoughts.length;
    if(ulen==0)
    {
        alert("Username shouldn't be empty.!")
        return false
    }
    else if(ulen <150 || ulen >200)
    {
        alert("Username should contain 150-200 characters,yours contains "+ulen)
        return false
    }
    
    return true
}





