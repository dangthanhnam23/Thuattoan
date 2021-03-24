
function getdecimal(num) {
let x =  num;
let a = "flase"; 
let hundred = (x  > 100 ) ? x =  num.toPrecision(3) : "";
let one = (x < 10 ) ? x =  num.toPrecision(1) : "";
let ten = (x < 100 ) ? x =  num.toPrecision(2) : "";
let thousand = (x > 1000) ?  x = num.toPrecision(4) : "";
if ( x > num &&  x - 1 < num ) {
   a = true;
}else {
  if ( x < num &&  x + 1 > num) {
    a = "true"
  }else{
    a = "flase";
  }
}
  return a
}
