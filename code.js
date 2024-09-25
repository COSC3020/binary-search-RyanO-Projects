function binarySearch(list, element) {
    // Implement a binary search function that, given a sorted list and an element
    // to look for, returns the index of the element in the list or -1 if the element is not there.
    
    // Determine middle element, compare element to middle, if element == middle then return middle.
    // if (element < middle), look in first half of array. elif (element > middle), look in second half of array.
    // Loop logic:
    //  assign middle, compare middle to element.
    //  if (element < middle) {narrow to [first - (middle-1)], rinse and repeat: assign new middle value, compare element to new middle}
    //  elif (element > middle) {narrow to [(middle+1) - last], rinse and repeat: assign new middle value, compare element to new middle}
    var first = 0;
    var last = list.length - 1;
    var found = False;

    while(!found){
        var middle = math.floor((first + last) / 2);

        if (element == list[middle]) {
            found = True;
        }
        else if (element < list[middle]) {
            last = middle - 1;
        }
        else {
            first = middle + 1;
        }
    }

    if(found){
        return middle;
    }
    return -1;
}
