var algorithm =
{
    bubble_sort: function (array)
    {
        for (var i = 0; i < array.length - 1; i++)
        {
            for (var j = 1; j < array.length - i; j++)
            {
                if (array[j - 1] > array[j])
                {
                    algorithm.swap(array, j, j - 1);
                }
            }
        }
        return array;
    },

    // Swaps elements at indexes `a` and `b`.
    swap: function (array, a, b)
    {
        var temp = array[a];
        array[a] = array[b];
        array[b] = temp;
    }
};

/*
Properties
    Stable
    O(1) extra space
    O(n2) comparisons and swaps
    Adaptive: O(n) when nearly sorted

Discussion
    Bubble sort has many of the same properties as insertion sort, but has slightly higher overhead. 
    In the case of nearly sorted data, bubble sort takes O(n) time, 
    but requires at least 2 passes through the data (whereas insertion sort requires something more like 1 pass).
*/