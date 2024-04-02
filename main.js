let arr = ['3', '6', '2', '13', '7', '4', '2', '13', '3', '4', '6', '2', '13', '7']
let arr2 = []
console.log(arr);
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        arr2.push(arr[i]);
    }
}
console.log(arr2);