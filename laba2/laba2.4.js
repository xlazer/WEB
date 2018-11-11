//task4
alert("Task 4");

var week2;
t=prompt("Введіть число сьогоднішнього дня в межах [1;7]: ");
    if( t == 1)
                week2= function(){		
                alert("Понеділок"); }
    else if(t == 2)
		week2= function(){
                alert("Вівторок"); }
    else if(t == 3)
                week2= function(){
                alert("Середа"); }
    else if(t == 4)
                week2= function(){		 
                alert("Четвер"); }
    else if(t == 5)
                week2= function(){		 
                alert("П'ятниця"); }
    else if(t == 6)
	        week2= function(){
                alert("Субота"); }
    else if(t == 7)
	        week2= function(){
            alert("Неділя"); }
    else
	        week2= function(){
                alert("Число не входить в межі [1;7]"); }
week2();
