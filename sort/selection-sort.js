(function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return (root.selectionSort = factory());
    });
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.selectionSort = factory();
  }
}(this, function () {
  'use strict';

  var algorithm = {

    sort: function (array) {
      for (var i = 0; i < array.length - 1; i++) {
        var minIndex = i;

        for (var j = i + 1; j < array.length; j++) {
          if (algorithm.compare(array[j], array[minIndex]) < 0) {
            minIndex = j;
          }
        }

        if (minIndex !== i) {
          algorithm.swap(array, i, minIndex);
        }
      }

      return array;
    },

    // Swaps elements at indexes `a` and `b`.
    swap: function (array, a, b) {
      var temp = array[a];
      array[a] = array[b];
      array[b] = temp;
    },

    // Compares elements at indexes `a` and `b`. Returns 0 if they're equal, a
    // positive number if `a` is larger or a negative number if `b` is larger.
    compare: function (a, b) {
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      return 0;
    }

  };

  return algorithm;
}));


/*
Algorithm
for i = 1:n,
    k = i
    for j = i+1:n, if a[j] < a[k], k = j
    → invariant: a[k] smallest of a[i..n]
    swap a[i,k]
    → invariant: a[1..i] in final position
end
Properties
Not stable
O(1) extra space
Θ(n2) comparisons
Θ(n) swaps
Not adaptive
Discussion
From the comparions presented here, one might conclude that selection sort should never be used. It does not adapt to the data in any way (notice that the four animations above run in lock step), so its runtime is always quadratic.

However, selection sort has the property of minimizing the number of swaps. In applications where the cost of swapping items is high, selection sort very well may be the algorithm of choice.

Key
Black values are sorted.
Gray values are unsorted.
A red triangle marks the algorithm position.
© 2015 Sorting-Algorithms.com	Powered by Google App Engine	Valid CSS!  Valid XHTML 1.0 Transitional  Pagerank	Page Counter

*/