var arr = [];

for (var i = 0; i < 5; i++) {
	arr[i] = prompt("Enter name");
}
console.log(arr);

var arrName = prompt('Please, enter name');

for (j =  arr.length - 1; j >= 0; --j) {
		if (arrName == arr[j])
		break;
}
if (arrName == arr[j])  {
	alert(arrName + ', you have successfully logged');
} else {
  alert("You enter wrong name");	
}


 
