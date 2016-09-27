function insertionSort(unsortedList) {

    for (var i = 0; i < unsortedList.length; i++) {
        var tmpArray = unsortedList[i];
        for (var j = i - 1; j >= 0 && (unsortedList[j] > tmpArray); j--) {
            //Shift the number
            unsortedList[j + 1] = unsortedList[j];
        }
        //Insert the copied number at the correct position
        //in sorted part.
        unsortedList[j + 1] = tmpArray;
    }
    return unsortedList;
}

var unsortedList = [5, 3, 1, 2, 4];
insertionSort(unsortedList);
console.log(unsortedList);
module.exports = insertionSort; // this exports. use the same name that you called your module pattern