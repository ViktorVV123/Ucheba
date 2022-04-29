function toBinaryString(number){
  var r = '';
  do {
    r = (number & 1) + r;
    number >>= 1;
  } while(number);
  return r;
}