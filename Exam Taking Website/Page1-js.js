
 		// Example starter JavaScript for disabling form submissions if there are invalid fields
		(() => {
  		'use strict'
			  // Fetch all the forms we want to apply custom Bootstrap validation styles to
			  const forms = document.querySelectorAll('.needs-validation')

			  // Loop over them and prevent submission
			  Array.from(forms).forEach(form => {
			    form.addEventListener('submit', event => {
			      if (!form.checkValidity()) {
			        event.preventDefault()
			        event.stopPropagation()
			      }

			      form.classList.add('was-validated')
			    }, false)
			  })
			})()

		

		document.getElementById('Login_Page').addEventListener("click" , function(){
			document.getElementsByTagName('body')[0].style.backgroundImage = 'url(welcomes.jpg)';
			document.getElementById('login').style.display='block';
			document.getElementById('main').style.display='none'
			console.log("hey");
		 });


	 	document.getElementById('Registration_Page').addEventListener("click" , function() {
		 	document.getElementById('regis').style.display='block' ;
			document.getElementsByTagName('body')[0].style.backgroundImage = 'url(welcomes.jpg)';
			document.getElementById('main').style.display='none'
	 	});


		document.getElementById('returnL').addEventListener("click",function(){
			document.getElementById('login').style.display='none' ;
			document.getElementsByTagName('body')[0].style.backgroundImage = 'url(exam-img.jpg)';
			document.getElementById('main').style.display='block' ;
		});

		document.getElementById('returnR').addEventListener("click",function(){
			document.getElementById('regis').style.display='none' ;
			document.getElementsByTagName('body')[0].style.backgroundImage = 'url(exam-img.jpg)';
			document.getElementById('main').style.display='block' ;
		});

		let name        = ["Rahul Mishra" , "Vijay Pathak" , "Suraj Vishwakarma" , "Ayush Bansal"];

	  	let password    = [1234 , 5678 , 9101 , 1213 ] ;

	  	let mobile      = [1234567890 , 9876543210 , 9999998887 , 4444445556] ;

	  	let language    = ["c++" , "java" , "c" , "java"];

	  	let application = [123456 , 912345 , 678910 , 111213];
	  	let length 
	  	length = password.length;


		// function submitR()
		// {
		// 	try{
		// 		var name_R = document.getElementById('r1').value ; 
		// 		var password_R = document.getElementById('r3').value ; 
		// 		var mobile_R = document.getElementById('r4').value ; 
		// 		var language_no_R = document.getElementById('r5').value ; 
		// 		console.log(name_R);
		// 		console.log(password_R);
		// 		console.log(mobile_R);
		// 		console.log(language_no_R);
		// 		if(language_no_R==1)
		// 		{
		// 			var language_name_R = "c";
		// 		}
		// 		else if(language_no_R == 2)
		// 		{
		// 			var language_name_R = "c++";
		// 		}
		// 		else
		// 		{
		// 			var language_name_R = "java";
		// 		}

		// 		name[length] = name_R;
		// 		password[length] = password_R;
		// 		mobile[length] = mobile_R;
		// 		language[length] = language_name_R;
		// 		window.name = name;
		// 		window.password = password;
		// 		window.mobile = mobile;
		// 		window.language = language;
		// 		alert(name);
		// 		alert(password);

		// 		alert("Registration Sucessfull")
		// 		var no = Math.random()*100000;
		// 		var decimal = parseInt(no) ;

		// 		application[length] = decimal;
		// 		window.application = application

		// 		alert(" Your Application Number : " + decimal);
		// 		document.getElementById('regis').style.display='none' ;
		// 		document.getElementById('login').style.display='none' ;
		// 		document.getElementById('main').style.display='block' ;
		// 	}
		// 	catch(err)
		// 	{
		// 		alert("Error : "+ err.message)
		// 	}
		// }

		length = password.length; 
		
		function submitL(){
			var applicationCheck = document.getElementById('l2').value;
			var passwordCheck= document.getElementById('l3').value;
			document.getElementById('login').style.display='block' ;
			document.getElementById('regis').style.display='none' ;
			document.getElementById('main').style.display='none' ;

			var count = 0 ;

			for(var i=0 ; i< length ; i++)
			{
				if((applicationCheck == application[i]) && (passwordCheck == password[i]))
				{
					count ++ ;
					try
					{
						if(count==1)
						{	let local1 = JSON.stringify(name);
							let local2 = JSON.stringify(application) ;
							let local3 = JSON.stringify(language) ;

							localStorage.setItem("namming" , local1 );
					        localStorage.setItem("apply"   , local2);
					        localStorage.setItem("language" , local3);
					        localStorage.setItem("i" , i);
							window.open('page2.html' ,  name = self) ;
					        
						}
					}
					catch(err)
					{
						alert("Error : " + err.message);
					}
				}
			}

			if(count == 0)
			{
				alert("Incorrect Application no or Password");
			}

			
		}
