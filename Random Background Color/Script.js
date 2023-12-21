const hex = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];

document.getElementById('btn').addEventListener("click" , function(){
	let hexcolor = "#" ;
	for(let i=0 ; i<6 ; i++)
		{
			hexcolor = hexcolor+hex[change()];
		}

	document.getElementById('color').textContent = hexcolor ;
	document.getElementById('color').style.color =  hexcolor;
	document.getElementById('cont').style.borderColor = hexcolor;
	document.getElementById('cont').style.boxShadow = "5px 5px 25px"+ hexcolor;
	document.getElementById('btn').style.borderColor =  hexcolor;
	document.getElementById('btn').style.boxShadow = "1px 1px 7px"+ hexcolor;
});	


function change()
{
	return Math.floor(Math.random()*hex.length);
}
