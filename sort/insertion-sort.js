(function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return (root.insertionSort = factory());
    });
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.insertionSort = factory();
  }
}(this, function () {
  'use strict';

  var algorithm = {

    sort: function (array) {
      var i;

      for (i = 1; i < array.length; i++) {
        var item = array[i];
        var indexHole = i;
        while (indexHole > 0 &&
            algorithm.compare(array[indexHole - 1], item) > 0) {
          array[indexHole] = array[--indexHole];
        }
        array[indexHole] = item;
        algorithm.shift(i, indexHole);
      }

      return array;
    },

    // Called when an element is being shifted from index `from` to index `to`,
    // swapping all elements in-between.
    //
    // Example:
    // b, c, d, e, a -> shift(4, 0) -> a, b, c, d, e
    shift: function (from, to) { },

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
for i = 2:n,
    for (k = i; k > 1 and a[k] < a[k-1]; k--) 
        swap a[k,k-1]
    → invariant: a[1..i] is sorted
end
Properties
Stable
O(1) extra space
O(n2) comparisons and swaps
Adaptive: O(n) time when nearly sorted
Very low overhead
Discussion
Although it is one of the elementary sorting algorithms with O(n2) worst-case time, insertion sort is the algorithm of choice either when the data is nearly sorted (because it is adaptive) or when the problem size is small (because it has low overhead).

For these reasons, and because it is also stable, insertion sort is often used as the recursive base case (when the problem size is small) for higher overhead divide-and-conquer sorting algorithms, such as merge sort or quick sort.

Key
Black values are sorted.
Gray values are unsorted.
A red triangle marks the algorithm position.
© 2015 Sorting-Algorithms.com	Powered by Google App Engine	Valid CSS!  Valid XHTML 1.0 Transitional  Pagerank	Page Counter

*/