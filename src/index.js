let users = [12,23,234,244,235,32];
users.every(function(currentVal,index,originalArray){
alert(index);
console.log(currentVal);
console.log(originalArray);
return currentVal > 0
})
