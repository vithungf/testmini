function lonhoncacgiatri(arr) {
    var count = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            count++;
        }
    }
    return count;
}
var arr = [1, 3, 2, 4, 3, 5, 2, 6];
console.log('có ' + lonhoncacgiatri(arr) + ' lớn hơn giá trị trc nó');
//3>1,4>2,5>3,6>2 ==> 4 giá trị
