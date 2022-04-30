function min(a, b){
  return (isNaN(a) || isNaN(b)) ? NaN : ((a < b) ? +a : +b);
}
