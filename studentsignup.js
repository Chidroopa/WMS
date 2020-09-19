function validate(){

        var mailid = document.getElementById('mailid').value;
        var mailreg = /^\w+([\.-]+\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        var pwd = document.getElementById('password').value;
        var pwdreg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        var pwd = document.getElementById('password').value;
        var cpwd = document.getElementById('cpassword').value;
        var pin = document.getElementById('pincode').value;
        var pinreg = /^(?=.*\d).{6}$/;
        if(! mailid.match(mailreg)){
          alert("Enter valid E-mail ID");
          return false;
        }
        else if(! pwd.match(pwdreg)){
          alert("Enter a valid password with the specifed rules");
          return false;
        }
        else if(pwd!=cpwd){
          alert("Enter same password which you entered in password field in cofirm password field also.");
          return false;
        }
        else if(! pin.match(pinreg)){
          alert("Enter a valid Indian Pincode");
          return false;
        }
        else{
          alert("Successfully submitted !");
          return true;
        }
}
