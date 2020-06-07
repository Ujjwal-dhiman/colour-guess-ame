
document.querySelector(".btn").addEventListener("click" , function(){
var array =["yellow" , "green" , "black" ,"blue" , "red"]
var random = Math.floor(Math.random() * array.length);
var color =document.querySelector(".display-text").innerHTML = array[random]
})
for(var i =0;i<document.querySelectorAll(".color").length;i++){
document.querySelectorAll(".color")[i].addEventListener("click" , function(){
	  chosenColor = this.id;
	  var color=document.querySelector(".display-text").innerHTML;
	 compare(color,chosenColor)
	})
}

 function compare(col,col1){
 	if(col==col1){
 		var audio = new Audio("red.mp3");
 		audio.play();
 	}
 	else{
 		var audio = new Audio("wrong.mp3");
 		audio.play();
 	}
	}






