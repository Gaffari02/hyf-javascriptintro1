let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log (myString);
console.log (myString.length);

let newMyString = myString.replace(/,/g, " "); 
console.log(newMyString);

//another way

let newMyString2 = myString.replace(new RegExp(",", "g"), " ");
console.log(newMyString);

