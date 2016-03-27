(function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return (root.mergeSort = factory());
    });
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.mergeSort = factory();
  }
}(this, function () {
  'use strict';

  var algorithm = {

    sort: function (array) {
      if (array.length <= 1) {
        return array;
      }

      var i;
      var middle = Math.floor(array.length / 2);
      var left = new Array(middle);
      var right = new Array(array.length - middle);

      for (i = 0; i < left.length; i++) {
        left[i] = array[i];
      }
      for (i = 0; i < right.length; i++) {
        right[i] = array[i + left.length];
      }

      return merge(algorithm.sort(left), algorithm.sort(right));
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

  function merge(left, right) {
    var result = new Array(left.length + right.length);
    var leftIndex = 0;
    var rightIndex = 0;
    var resultIndex = 0;

    while (leftIndex < left.length || rightIndex < right.length) {
      if (leftIndex < left.length && rightIndex < right.length) {
        if (algorithm.compare(left[leftIndex], right[rightIndex]) <= 0) {
          result[resultIndex++] = left[leftIndex++];
        } else {
          result[resultIndex++] = right[rightIndex++];
        }
      } else if (leftIndex < left.length) {
        result[resultIndex++] = left[leftIndex++];
      } else if (rightIndex < right.length) {
        result[resultIndex++] = right[rightIndex++];
      }
    }
    return result;
  }

  return algorithm;
}));


/*
Algorithm
# split in half
m = n / 2

# recursive sorts
sort a[1..m]
sort a[m+1..n]

# merge sorted sub-arrays using temp array
b = copy of a[1..m]
i = 1, j = m+1, k = 1
while i <= m and j <= n,
    a[k++] = (a[j] < b[i]) ? a[j++] : b[i++]
    → invariant: a[1..k] in final position
while i <= m,
    a[k++] = b[i++]
    → invariant: a[1..k] in final position
Properties
Stable
Θ(n) extra space for arrays (as shown)
Θ(lg(n)) extra space for linked lists
Θ(n·lg(n)) time
Not adaptive
Does not require random access to data
Discussion
Merge sort is very predictable. It makes between 0.5*lg(n) and lg(n) comparisons per element, and between lg(n) and 1.5*lg(n) swaps per element. The minima are achieved for already sorted data; the maxima are achieved, on average, for random data. If using Θ(n) extra space is of no concern, then merge sort is an excellent choice: It is simple to implement, and it is the only stable O(n·lg(n)) sorting algorithm. Note that when sorting linked lists, merge sort requires only Θ(lg(n)) extra space (for recursion).

Merge sort is the algorithm of choice for a variety of situations: when stability is required, when sorting linked lists, and when random access is much more expensive than sequential access (for example, external sorting on tape).

There do exist linear time in-place merge algorithms for the last step of the algorithm, but they are both expensive and complex. The complexity is justified for applications such as external sorting when Θ(n) extra space is not available.

Key
Black values are sorted.
Gray values are unsorted.
A red triangle marks the algorithm position.
Dark gray values denote the current interval.
© 2015 Sorting-Algorithms.com	Powered by Google App Engine	Valid CSS!  Valid XHTML 1.0 Transitional  Pagerank	Page Counter

*/