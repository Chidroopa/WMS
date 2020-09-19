function validate(){

        var mailid = document.getElementById('mailid').value;
        var mailreg = /^\w+([\.-]+\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        var pin = document.getElementById('pincode').value;
        var pinreg = /^(?=.*\d).{6}$/;
        if(! mailid.match(mailreg) && mailid.length>0){
          alert("Enter valid E-mail ID");
          return false;
        }
        else if(! pin.match(pinreg) && pin.length>0){
          alert("Enter a valid Indian Pincode");
          return false;
        }
        else{
          alert("Successfully submitted !");
          return true;
        }
}