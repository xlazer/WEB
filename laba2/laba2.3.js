//task3
function week(day){
	if( day == 1){ 
        alert("Понеділок") ;}
   else if(day == 2) {
         alert("Вівторок");}
   else if(day == 3) {
         alert("Середа"); }
   else if(day == 4) {
         alert("Четвер"); }
   else if(day == 5) {
         alert("П'ятниця"); }
   else if(day == 6) {
         alert("Субота"); }
   else if(day == 7) {
         alert("Неділя"); }
   else  {
	 alert("Число не входить в межі [1;7]"); }
         return day
}

	alert("Task 3")
var day;
day=prompt("Введіть число сьогоднішнього дня в межах [1;7]: ");
day=week(day);
