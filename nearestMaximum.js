var array = [1, 4, 2, 3, 1, 7];
var index = 5;

function nearestGreater(array, index) {
    let length = array.length;
    let l = index - 1;
    let r = index + 1;
    let isFound = true;

    while (isFound) {
        if (l >= 0) {
            if (array[l] > array[index] && array[l] > array[r]) {
                return (array[l]);

            }
            else {
                l = l - 1;
            }
        }
        if (r < length) {
            if (array[r] > array[index]) {
                return (array[r]);
            }
            else {
                r = r + 1;
            }
        }

        if (l == -1 && r == length) {
            return "No larger element found.";
        }
    }
}

console.log(nearestGreater([1,2,3,4],2));
console.log(nearestGreater([4,3,2,5],2));
console.log(nearestGreater([1,2,5,4],2));