//Edited off of last semesters repository due to testing issues
function quicksort(array) {
    let arr = [];
    arr.push(0);
    arr.push(array.length - 1);

    while (arr.length > 0) {
        let right = arr.pop();
        let left = arr.pop();

        let index = partition(array, left, right);

        if (left < index - 1) {
            arr.push(left);
            arr.push(index - 1);
        }

        if (index < right) {
            arr.push(index);
            arr.push(right);
        }
    }
    return array;
}

function swap(array, left_position, right_position) {
    let temp = array[left_position];
    array[left_position] = array[right_position];
    array[right_position] = temp;
}

function partition(array, left, right) {
    let pivot = array[Math.floor((right + left) / 2)];
    let partLeft = left;
    let partRight = right;

    while (partLeft <= partRight) {
        while (array[partLeft] < pivot) {
            partLeft++;
        }
        while (array[partRight] > pivot) {
            partRight--;
        }
        if (partLeft <= partRight) {
            swap(array, partLeft, partRight);
            partLeft++;
            partRight--;
        }
    }
    return partLeft;
}

function calculatePivot(array, first, last) {
    return array[Math.floor((first + last) / 2)]; 
}
