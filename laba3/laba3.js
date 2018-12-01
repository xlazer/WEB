alert(document.head.innerHTML);

var variant = 6;
var elem = document.getElementById('list-header');
elem.innerHTML = '<b>' + elem.textContent + ' ' + variant + '</b>';

var name = "Olexandr";
document.getElementsByTagName("li")[1].innerHTML = name;

document.getElementsByTagName("ul")[0].style.color = '#555';
