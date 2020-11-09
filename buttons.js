const img = document.getElementById("img");
const bkgImg = document.getElementById("bkgImg");

const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");

var button1count = 1;
var button2count = 1;
var button3count = 1;

function number(id){
	switch(id){
		case 1:
			img.src = "images/1.jpg";
			bkgImg.src = "images/bg1.jpg";
			button1.innerHTML = button1count++
			break;
		case 2:
			img.src = "images/2.jpg";
			bkgImg.src = "images/bg2.jpg";
			button2.innerHTML = button2count++
			break;
		case 3:
			img.src = "images/3.jpg";
			bkgImg.src = "images/bg3.jpg";
			button3.innerHTML = button3count++
			break;
	}
}