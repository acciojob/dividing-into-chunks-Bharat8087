const divide = (arr, n) => {
    const result = [];
    let subArray = [];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (sum + arr[i] <= n) {
            subArray.push(arr[i]);
            sum += arr[i];
        } else {
            result.push(subArray);
            subArray = [arr[i]];
            sum = arr[i];
        }
    }

    if (subArray.length > 0) {
        result.push(subArray);
    }

    return result;
};

const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const n = parseInt(prompt("Enter n: "));
alert(JSON.stringify(divide(arr, n)));
