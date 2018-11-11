alert("Task 1")
var name ="Lazoriv Olexandr";
alert(name);

alert("Task 2")
var a=6, b=12;
var c=a-b;
var d=7;
var result=c+d;
alert(result);

alert("Task 3")
var variant;
variant=prompt("Enter number of your variant: ");
var a=variant;
if(a>=7){
  alert("True") ;}
else{ 
  alert("False");}
if(a%2==0){
	a=+a+7;
	}
else{a-=3;
	}
	alert(a);

alert("Task 4")
end=+variant+10;
document.write("Squares of numbers from 1 to " + end + " :");
for(var i=1;i<=end;i++){
	document.write("<br />" + i + " = " + (i*i)); 
	}

alert("Task 5")
	document.write("<br />" + "<br />" + "Simple numbers from 2 to " + end + " :" + "<br />");
var iter =0;
   for(var i=2;i<=end;i++){
	for(var j=1;j<=end;j++){
	if(i%j==0){iter++;  }}
	if(iter==2){document.write( +i +"<br />"); 
		iter=0; }
        else{ iter=0;}
	} 
