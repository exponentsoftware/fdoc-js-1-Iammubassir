function reverseArray(arr) {
    
    arr1 = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        arr1.push(arr[i]);
    }
        return arr1;
}
console.log(reverseArray(["A","B","C"]));

