//task5
function rekFact(num){
       if(num === 0)
	   return 1;
        else
           return num*rekFact(num-1);
}

function iterFact(numbe){
         var n = 1;
            for (var i = 2; i <= numbe; i++)
                    n = n * i;
                return n;
            }


alert("Task 5(rek)");
var num=prompt("Enter your number: ");
alert(rekFact(+num));


alert("Task 5(iter)");
var numbe = prompt("Enter your number: ");
alert(iterFact(+numbe));