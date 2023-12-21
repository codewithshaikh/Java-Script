
	try{
		let retString1 = localStorage.getItem("namming");
		let local1 = JSON.parse(retString1);

		let retString2 = localStorage.getItem("apply");
		let local2 = JSON.parse(retString2);

		let retString3 = localStorage.getItem("language");
		let local3 = JSON.parse(retString3);	

		var i = localStorage.getItem("i");
		
		var d = new Date(); 
		var NoTimeDate =d.getDate()+"/"+(d.getMonth()+1)+"/"+ d.getFullYear();
		document.getElementById('box3-1').innerHTML = local1[i];
		document.getElementById('box3-2').innerHTML = local2[i];
		document.getElementById('box3-3').innerHTML = local3[i].toUpperCase();
		document.getElementById('box3-4').innerHTML = NoTimeDate;
		var lan = local3[i];
	}
	catch(err)
	{
		alert("Error: "+err.message);
	}

	//For Instructions Modal 
	  	const check = document.getElementById('checkbox');
	  	check.addEventListener("click" , function(){
	  		if(check.checked == true)
		  	{
		  		document.getElementById('modal-btn').disabled =  false ;
		  	}
		  	else
		  	{
		  		document.getElementById('modal-btn').disabled =  true ;
		  	}
	  	})

	  	document.getElementById('modal-btn').addEventListener("click" , function(){
	  		if(lan == "c")
	  		{
	  			window.open("Questions-Page-C.html" , name = self);
	  		}
	  		else if(lan == "c++")
	  		{
	  			window.open("Questions-Page-C++.html" , name = self);
	  		}
	  		else
	  		{
	  			window.open("Questions-Page-Java.html" , name = self);
	  		}
	  		
	  	});
	