function binarySearch(list, element) {
    // Implement a binary search function that, given a sorted list and an element
    // to look for, returns the index of the element in the list or -1 if the element is not there.
    var i = 0;
    while(list[i] != element) {
        i++;
    }
    console.log(i);
    if(list[i] == element) { return i; }
    return -1;
}
