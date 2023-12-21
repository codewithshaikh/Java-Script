
		document.getElementById('toggle').addEventListener("click" , function(){
			var slidebar = document.querySelector('nav');
			if(!slidebar.classList.contains("close"))
			{
				document.getElementsByClassName
				slidebar.classList.add("close");
			}
			else
			{
				slidebar.classList.remove("close");
			}
		});


		var links = document.getElementsByClassName('menu-li');

		document.getElementById('menu-items-default').addEventListener("click" , function()
		{
			document.getElementById('dash').style.display = 'block';
			document.getElementById('contents').style.display='none';
			document.getElementById('category').style.display='none';
			document.getElementById('charts').style.display='none';
		});

		document.getElementById('menu-items1').addEventListener("click" , function()
		{
			document.getElementById('dash').style.display = 'none';
			document.getElementById('contents').style.display='block';
			document.getElementById('category').style.display='none';
			document.getElementById('charts').style.display='none';

			// for(var i=0 ; i<7 ; i++)
			// {
			// 	links[i].classList.remove('menu-items-active');
			// }
			// document.getElementById('menu-items1').classList.add('menu-items-active');

		});

		
		document.getElementById('menu-items2').addEventListener("click" , function()
		{
			document.getElementById('dash').style.display = 'none';
			document.getElementById('contents').style.display = 'none';
			document.getElementById('category').style.display='block';
			document.getElementById('charts').style.display='none';
		});


		
		document.getElementById('menu-items3').addEventListener("click" , function()
		{
			document.getElementById('dash').style.display = 'none';
			document.getElementById('contents').style.display='none';
			document.getElementById('category').style.display = 'none';
			document.getElementById('charts').style.display='block';
		});

		// document.getElementById('btn-2').addEventListener("click" , function(){
		// 	document.getElementById('content-1').style.opacity = ' 0';
		// 	document.getElementById('content-3').style.display='block';
		// 	document.getElementById('content').style.backgroundColor = 'white';

		// });


		// const correct = document.querySelectorAll('.correct')
		// const results = document.querySelectorAll('.results')
		// const checkbox = document.querySelectorAll('.checkbox');
		// for(let i = 0 ; i<correct.length; i++){
		//     correct[i].addEventListener('click',()=>{
		//         for(let p=0; p<results.length;p++){
		//             id(checkbox[i].checked){
		//                 results[i].innerHTML="True"
		//                 correct[i].style.background=" #38ad61";
		//                 correct[i].innerHTML="Corrected!"
		//             }
		//             else {
		//                 results[i].innerHTML="False";
		//                 correct[i].style.background="white"
		//                 correct[i].innerHTML="Correct"
		//             }
		//         }
		//     })
		// }
