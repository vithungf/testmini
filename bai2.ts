function lonhoncacgiatri(arr: number[]): number {
    let count = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i-1]) {
            count++;
        }
    }
    return count;
}


const arr = [2,5,4,5,7,3];
console.log('có '+ lonhoncacgiatri(arr)+' lớn hơn giá trị trc nó');

//3>1,4>2,5>3,6>2 ==> 4 giá trị
