
var picture = document.getElementById("profile_image");
console.log(picture);



picture.addEventListener("click")
function moreinfo(){
	alert("This webpage was created by Shameka Hayes");
}
function changename(){
	var Name= prompt("Enter New Name Here");
	console.log(Name);
	var title =document.getElementById("pname");
	title.innerText=Name+"'s Portfolio"
}
function newcard(){
	var title= prompt("Enter Title");
	var paragraph= prompt("Enter paragraph");
	var newdiv= document.createElement("div");
	var container=document.getElementById("container")
	container.appendChild(newdiv);
}