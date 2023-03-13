var x = 1
while(x<52){
	document.getElementById('line').innerHTML += x + " ";
	x+=2;
}

var y = 2
do{
	document.getElementById('line2').innerHTML += y + " ";
	y+=2;
}while(y<51);

for(var z = 1; z<4097; z *= 2){
	document.getElementById('line3').innerHTML += z + " ";
}