// leetcode 164
// export default (arr)=>{
//     if(arr.length<2){
//         return 0
//     }
//     arr.sort()
//     let max = 0
//     for(var i=0, temp; i<arr.length-1; i++){
//         temp = arr[i+1]-arr[i]
//         if(temp>max){
//             max=temp
//         } 
//     }
//     return max
// }
export default (arr) => {
    if (arr.length < 2) {
        return 0
    }
    let max = 0
    let space
    for (let i = arr.length - 1,temp; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j+1]) {
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp

            }
        }
        // 当冒泡排序进行到第二轮的时候才会有两个值才可以进行比较
        if (i < arr.length - 1) {
             space = arr[i + 1] - arr[i]
            if (space > max) {
                max = space
            }
        }
    }
    return Math.max(max, arr[1] - arr[0])
}