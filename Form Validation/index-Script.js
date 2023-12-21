function validation() 
{
	if(document.frm.Username.value=="")
	{
		document.getElementById("error").innerHTML="***Fill out username name***"
		return false;
	}
	else if(document.frm.email.value=="")
	{
		alert("Fill out Email ")
		return false;
	}
	else if(document.frm.password.value=="")
	{
		alert("Fill out Password ")
		return false;
	}
	else if(document.frm.password.value.length<6)
	{
		alert("Password should be minimum 6 character long")
		return false;
	}
	else if(document.frm.password.value.length>12)
	{
		alert("Password should be Maximum 12 character long")
		return false;
	}
	else if(document.frm.Confirmpassword.value=="")
	{
		alert("Fill out Confirm Password ")
		return false;
	}
	else if(document.frm.Confirmpassword.value!=document.frm.password.value)
	{
		alert("Password not matched")
		return false;
	}
	else if(document.frm.Phone.value=="")
	{
		alert("Fill out Mobile Number ")
		return false;
	}
	else if(document.frm.Phone.value.length!=10)
	{
		alert("Mobile number should be of 10 Digit ")
		return false;
	}
	else if(document.frm.Statecode.value=="")
	{
		alert("Fill out State code ")
		return false;
	}
	else if(document.frm.Statecode.value.length>=6)
	{
		alert("State Code Should Be less than 6")
		return false;
	}
	else
	{
		return true;

	}		

}