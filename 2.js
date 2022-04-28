function solution(data, replace) {
  if (typeof data == 'object') {
    for (var p in data) {
      data[p] = solution(data[p], replace);
    }
  } else if (data == 'dynamic') {
    return replace;
  }
  
  return data;
}