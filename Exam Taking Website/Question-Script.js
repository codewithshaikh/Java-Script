//For Question Slides
		var slide_index = 1;
        displaySlides(slide_index);

        function next(n) 
        {
            displaySlides(slide_index += n);
        }
        

        function displaySlides(n) 
        {
            var i;
            var pages = document.getElementsByClassName("Qs");
            if (n > pages.length) 
            { 
            	slide_index = pages.length; 
            }

            if (n < 1) 
            { 
            	slide_index = 1; 
            }

            for (i = 0; i < pages.length; i++) 
            {
                pages[i].style.display = "none";
            }

            pages[slide_index - 1].style.display = "block";
            ShowPagination(slide_index-1);
        }

        function ShowPagination(n)
        {
        	var active = document.getElementsByClassName("link");
        	for(var i = 0 ; i<active.length ; i++)
        	{
        		if((active[i].classList.contains("pagination-submit")))
        		{	
        			active[i].classList.remove("pagination-active");
        		}
        		else
        		{
        			active[i].classList.remove("pagination-active");
        		}
        	}

	        if((active[n].classList.contains("checking")))
	        {
	        	active[n].classList.add("pagination-active");
	        }
        }	

        function sub()
        {
        	var active = document.getElementsByClassName("link");
        	var btns = document.getElementsByClassName("class-button");
        	var textarea = document.getElementsByClassName("text-disable");
        	for(var i = 0 ; i<active.length ; i++)
        	{
        		if(active[i].classList.contains("pagination-active"))
        		{
        			textarea[i].disabled = true;
        			btns[i].innerHTML = "SUBMITTED";
        			btns[i].disabled = true;
        			active[i].classList.add("pagination-submit");
        			active[i].classList.remove("checking");
        			active[i].classList.remove("pagination-active");

        		}
        	}
        }


        function ChangePagination(n)
        {
        	var pages = document.getElementsByClassName("Qs");
        	for(var i=0 ; i<pages.length ; i++)
        	 {
        	 	pages[i].style.display="none";
        	 }
        	 pages[n].style.display="block";
        	 ShowPagination(n);
        }

        var mins = "120";
        var secs = "00";
        document.getElementById('timer').innerHTML = mins +" : " + secs;
		startTimer();

		function startTimer() {
		  var presentTime = document.getElementById('timer').innerHTML;
		  var timeArray = presentTime.split(/[:]+/);
		  var m = timeArray[0];
		  var s = checkSecond((timeArray[1] - 1));
		  if( s == 59 )
		  {
		  	 m = m - 1 ;
		  }

		  if( m == 0)
		  {
		     return ;
		  }
		  
		  document.getElementById('timer').innerHTML = m  + ": " + s;
		  var times = document.getElementById('timer').innerHTML;
		  var splitTime = times.split(/[:]+/);
		  console.log("i am fine");
		  var hr = 	splitTime[0]
		  var min = splitTime[1];
		  var sec = splitTime[2];
			 if( min == 00 && sec ==00)
			 {
			 	document.getElementById('Q-container').style.display = "none";
			 	document.getElementById('Submitted').style.display = "block";
			 	setTimeout(Finish , 4000);
			 }
		  setTimeout(startTimer, 1000);
		  
		}

		function checkSecond(sec) 
		{
		  if (sec < 10 && sec >= 0) 
		  {
		  	sec = "0" + sec
		  } 

		  // add zero in front of numbers < 10
		  if(sec < 0) 
		  { 
		  	sec = "59"
		  }
		  return sec;
		}

		document.getElementById('FinishExam').addEventListener("click", function() {
			document.getElementById('Q-container').style.display = "none";
			document.getElementById('Submitted').style.display = "block";
			setTimeout(Finish , 4000);
		});


		function Finish()
		{
			window.open('Page1.html', name = self);
			localStorage.setItem("myValue", 'false');
		}
