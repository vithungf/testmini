function kiemTraMangTangDan(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        if (arr[i] >= arr[i + 1]) {
            return false; // ko tăng dần là false
        }
    }
    return true;// tăng dần là true
}

console.log('kết quả là: '+kiemTraMangTangDan([1,2,3,1,4,3]));
console.log('kết quả là: '+kiemTraMangTangDan([1,2,3,4,9,12]));

