// For Adding Likes
	
	document.getElementById("c1").addEventListener("click", function(){
		var likes = document.getElementById("l1").innerHTML;
		likes = parseInt(likes) + parseInt(1);
		document.getElementById("l1").innerHTML=likes;
		document.getElementById("c1").classList.toggle("red");
	});

	document.getElementById("c2").addEventListener("click", function(){
		var likes = document.getElementById("l2").innerHTML;
		likes = parseInt(likes) + parseInt(1);
		document.getElementById("l2").innerHTML=likes;
		document.getElementById("c2").classList.toggle("red");
	});

	document.getElementById("c3").addEventListener("click", function(){
		var likes = document.getElementById("l3").innerHTML;
		likes = parseInt(likes) + parseInt(1);
		document.getElementById("l3").innerHTML=likes;
		document.getElementById("c3").classList.toggle("red");
	});

	document.getElementById("c4").addEventListener("click", function(){
		var likes = document.getElementById("l4").innerHTML;
		likes = parseInt(likes) + parseInt(1);
		document.getElementById("l4").innerHTML=likes;
		document.getElementById("c4").classList.toggle("red");
	});

	document.getElementById("c5").addEventListener("click", function(){
		var likes = document.getElementById("l5").innerHTML;
		likes = parseInt(likes) + parseInt(1);
		document.getElementById("l5").innerHTML=likes;
		document.getElementById("c5").classList.toggle("red");
	});

	document.getElementById("c6").addEventListener("click", function(){
		var likes = document.getElementById("l6").innerHTML;
		likes = parseInt(likes) + parseInt(1);
		document.getElementById("l6").innerHTML=likes;
		document.getElementById("c6").classList.toggle("red");
	});

	document.getElementById("c7").addEventListener("click", function(){
		var likes = document.getElementById("l7").innerHTML;
		likes = parseInt(likes) + parseInt(1);
		document.getElementById("l7").innerHTML=likes;
		document.getElementById("c7").classList.toggle("red");
	});

	document.getElementById("c8").addEventListener("click", function(){
		var likes = document.getElementById("l8").innerHTML;
		likes = parseInt(likes) + parseInt(1);
		document.getElementById("l8").innerHTML=likes;
		document.getElementById("c8").classList.toggle("red");
	});

	document.getElementById("c9").addEventListener("click", function(){
		var likes = document.getElementById("l9").innerHTML;
		likes = parseInt(likes) + parseInt(1);
		document.getElementById("l9").innerHTML=likes;
		document.getElementById("c9").classList.toggle("red");
	});

	document.getElementById("c10").addEventListener("click", function(){
		var likes = document.getElementById("l10").innerHTML;
		likes = parseInt(likes) + parseInt(1);
		document.getElementById("l10").innerHTML=likes;
		document.getElementById("c10").classList.toggle("red");
	});

	document.getElementById("c11").addEventListener("click", function(){
		var likes = document.getElementById("l11").innerHTML;
		likes = parseInt(likes) + parseInt(1);
		document.getElementById("l11").innerHTML=likes;
		document.getElementById("c11").classList.toggle("red");
	});

	document.getElementById("c12").addEventListener("click", function(){
		var likes = document.getElementById("l12").innerHTML;
		likes = parseInt(likes) + parseInt(1);
		document.getElementById("l12").innerHTML=likes;
		document.getElementById("c12").classList.toggle("red");
	});

	document.getElementById("c13").addEventListener("click", function(){
		var likes = document.getElementById("l13").innerHTML;
		likes = parseInt(likes) + parseInt(1);
		document.getElementById("l13").innerHTML=likes;
		document.getElementById("c13").classList.toggle("red");
	});

	document.getElementById("btn").addEventListener("click" , function(){
		document.getElementById("myModal").style.display = "block";
	});

	document.getElementById("close").addEventListener("click" ,function(){
  		document.getElementById("myModal").style.display = "none";

	});


// For Comment Sending

	function send()
	{	
		console.log("hello");
		var creatediv =  document.createElement("div");
		var createspan =  document.createElement("span");
		var createp =  document.createElement("p");

		
		createp.innerHTML =  document.getElementsByName("comments")[0].value ;

		if(createp.innerHTML != '')
		{
			createspan.innerHTML = Math.floor(Math.random()*60) + " seconds ago";
			creatediv.classList.add("classes_div");
			createp.classList.add("classes_div_p");
			createspan.classList.add("spanning");
			creatediv.appendChild(createp);
			creatediv.appendChild(createspan);
			
			// creatediv.insertBefore(createp , creatediv.children[0]);

			document.getElementById("classe").prepend(creatediv);
			document.getElementsByName("comments")[0].value = "";
		}
		else
		{
			alert('Write Comment ....');
		}
					

	}



	// For Emoji Adding 

	var names = document.getElementsByClassName("emojis");

	 names[0].addEventListener("click" , function(){
	 	var text =  document.getElementsByName("comments")[0].value ;
	 	var newText = text + String.fromCodePoint(0x1F600);
		document.getElementsByName("comments")[0].value	 =  newText;
	 }) 

	 names[1].addEventListener("click" , function(){
	 	var text =  document.getElementsByName("comments")[0].value ;
	 	var newText = text + String.fromCodePoint(0x1F601);
		document.getElementsByName("comments")[0].value	 =  newText;
	 })

	 names[2].addEventListener("click" , function(){
	 	var text =  document.getElementsByName("comments")[0].value ;
	 	var newText = text + String.fromCodePoint(0x1F602);
		document.getElementsByName("comments")[0].value	 =  newText;
	 })

	 names[3].addEventListener("click" , function(){
	 	var text =  document.getElementsByName("comments")[0].value ;
	 	var newText = text + String.fromCodePoint(0x1F603);
		document.getElementsByName("comments")[0].value	 =  newText;
	 })

	 names[4].addEventListener("click" , function(){
	 	var text =  document.getElementsByName("comments")[0].value ;
	 	var newText = text + String.fromCodePoint(0x1F604);
		document.getElementsByName("comments")[0].value	 =  newText;
	 })

	 names[5].addEventListener("click" , function(){
	 	var text =  document.getElementsByName("comments")[0].value ;
	 	var newText = text + String.fromCodePoint(0x1F605);
		document.getElementsByName("comments")[0].value	 =  newText;
	 })

	 names[6].addEventListener("click" , function(){
	 	var text =  document.getElementsByName("comments")[0].value ;
	 	var newText = text + String.fromCodePoint(0x1F606);
		document.getElementsByName("comments")[0].value	 =  newText;
	 })

	 names[7].addEventListener("click" , function(){
	 	var text =  document.getElementsByName("comments")[0].value ;
	 	var newText = text + String.fromCodePoint(0x1F607);
		document.getElementsByName("comments")[0].value	 =  newText;
	 })

	 names[8].addEventListener("click" , function(){
	 	var text =  document.getElementsByName("comments")[0].value ;
	 	var newText = text + String.fromCodePoint(0x1F608);
		document.getElementsByName("comments")[0].value	 =  newText;
	 })

	 names[9].addEventListener("click" , function(){
	 	var text =  document.getElementsByName("comments")[0].value ;
	 	var newText = text + String.fromCodePoint(0x1F609);
		document.getElementsByName("comments")[0].value	 =  newText;
	 })

	 names[10].addEventListener("click" , function(){
	 	var text =  document.getElementsByName("comments")[0].value ;
	 	var newText = text + String.fromCodePoint(0x1F60A);
		document.getElementsByName("comments")[0].value	 =  newText;
	 })

	 names[11].addEventListener("click" , function(){
	 	var text =  document.getElementsByName("comments")[0].value ;
	 	var newText = text + String.fromCodePoint(0x1F60B);
		document.getElementsByName("comments")[0].value	 =  newText;
	 })

	 names[12].addEventListener("click" , function(){
	 	var text =  document.getElementsByName("comments")[0].value ;
	 	var newText = text + String.fromCodePoint(0x1F60C);
		document.getElementsByName("comments")[0].value	 =  newText;
	 })

	 names[13].addEventListener("click" , function(){
	 	var text =  document.getElementsByName("comments")[0].value ;
	 	var newText = text + String.fromCodePoint(0x1F60D);
		document.getElementsByName("comments")[0].value	 =  newText;
	 })

	 names[14].addEventListener("click" , function(){
	 	var text =  document.getElementsByName("comments")[0].value ;
	 	var newText = text + String.fromCodePoint(0x1F60E);
		document.getElementsByName("comments")[0].value	 =  newText;
	 })

	 names[15].addEventListener("click" , function(){
	 	var text =  document.getElementsByName("comments")[0].value ;
	 	var newText = text + String.fromCodePoint(0x1F60F);
		document.getElementsByName("comments")[0].value	 =  newText;
	 })

	 names[16].addEventListener("click" , function(){
	 	var text =  document.getElementsByName("comments")[0].value ;
	 	var newText = text + String.fromCodePoint(0x1F610);
		document.getElementsByName("comments")[0].value	 =  newText;
	 })

	 names[17].addEventListener("click" , function(){
	 	var text =  document.getElementsByName("comments")[0].value ;
	 	var newText = text + String.fromCodePoint(0x1F611);
		document.getElementsByName("comments")[0].value	 =  newText;
	 })

	 names[18].addEventListener("click" , function(){
	 	var text =  document.getElementsByName("comments")[0].value ;
	 	var newText = text + String.fromCodePoint(0x1F612);
		document.getElementsByName("comments")[0].value	 =  newText;
	 })