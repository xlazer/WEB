//task2
function numbers(data,month,variant){
	return((data+month)/variant)
}

alert("Task 2")
var data,month,variant;
data=prompt("Enter the data of your birth(number): ");
month=prompt("Enter the month of your birth(number): ");
variant=prompt("Enter number of your variant: ");

alert(+numbers(+data,+month,+variant));
