function searchNames( logins ){
  return logins.filter(function(el, index, arr) {
    return index % 2 === 1 && arr[index - 1].match(/^\.|\.$/);
  });
}