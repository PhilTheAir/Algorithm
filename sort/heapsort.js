var algorithm =
{
    sort: function (array)
    {
        var heapSize = array.length;
        buildHeap(array, heapSize);
        while (heapSize > 1)
        {
            algorithm.swap(array, 0, heapSize - 1);
            heapSize--;
            heapify(array, heapSize, 0);
        }
        return array;
    },

    // Swaps elements at indexes `a` and `b`.
    swap: function (list, a, b)
    {
        var temp = list[a];
        list[a] = list[b];
        list[b] = temp;
    }
};

function buildHeap(array, heapSize)
{
    for (var i = Math.floor(array.length / 2) ; i >= 0; i--)
    {
        heapify(array, heapSize, i);
    }
}

function heapify(array, heapSize, i)
{
    var left = i * 2 + 1;
    var right = i * 2 + 2;
    var largest;

    if (left < heapSize && algorithm.compare(array[left], array[i]) > 0)
    {
        largest = left;
    }
    else
    {
        largest = i;
    }

    if (right < heapSize && algorithm.compare(array[right], array[largest]) > 0)
    {
        largest = right;
    }

    if (largest !== i)
    {
        algorithm.swap(array, i, largest);
        heapify(array, heapSize, largest);
    }
}

/*
Properties
    Not stable
    O(1) extra space (see discussion)
    O(n¡¤lg(n)) time
    Not really adaptive

Discussion
    Heap sort is simple to implement, performs an O(n¡¤lg(n)) in-place sort, but is not stable.
    The first loop, the ¦¨(n) "heapify" phase, puts the array into heap order. 
    The second loop, the O(n¡¤lg(n)) "sortdown" phase, repeatedly extracts the maximum and restores heap order.
    The sink function is written recursively for clarity. 
    Thus, as shown, the code requires ¦¨(lg(n)) space for the recursive call stack. 
    However, the tail recursion in sink() is easily converted to iteration, which yields the O(1) space bound.
    Both phases are slightly adaptive, though not in any particularly useful manner. 
    In the nearly sorted case, the heapify phase destroys the original order. 
    In the reversed case, the heapify phase is as fast as possible since the array starts in heap order, 
    but then the sortdown phase is typical. In the few unique keys case, 
    there is some speedup but not as much as in shell sort or 3-way quicksort.
*/