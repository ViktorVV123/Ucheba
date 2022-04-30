function sort(items) {
  const swap = (arr, i , j) => [arr[i], arr[j]] = [arr[j], arr[i]];
  for (let i = 0; i < items.length ; i++) {
    for(let j = 0 ; j < items.length - i - 1; j++) {
        if (items[j] > items[j + 1]) swap(items, j, j + 1);
    }
  }
  return items;
}
