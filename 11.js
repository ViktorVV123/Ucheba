const around = (a, i, j, val) => [a[i-1][j-1],a[i-1][j],a[i-1][j+1],a[i+1][j-1],a[i+1][j],a[i+1][j+1],a[i][j-1],a[i][j+1]].some(x => x==val) ? 1 : 0,
      map2d = (arr, fn, a = [[]].concat(arr.slice(), [[]])) => arr.map((row, i) => row.map((c, j) => fn(a, i+1, j))),
      outerEdgesOf = arr => map2d(arr, (a, i, j) => 1-a[i][j] &&    around(a, i, j, 1)),
      innerEdgesOf = arr => map2d(arr, (a, i, j) =>   a[i][j] &&    around(a, i, j, 0)),
      grow         = arr => map2d(arr, (a, i, j) =>   a[i][j] ||    around(a, i, j, 1)),
      shrink       = arr => map2d(arr, (a, i, j) =>   a[i][j] && (1-around(a, i, j, 0)));