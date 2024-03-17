var a=10;
console.log(a);
function x(){
  
for(var i =1; i<=5;i++){
    setTimeout(function () {console.log(i)},1000);
 }
for(var i =1; i<=5;i++){
    setTimeout(console.log(i),1000);
}
  for(let i =1; i<=5;i++){
    setTimeout(function () {console.log(i)},i*500);
}

}
x();
