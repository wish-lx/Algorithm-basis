// export default (arr) => {
//     arr = arr.filter(item => item > 0)
//     if (arr.length) {
//         arr.sort((a, b) => a - b)
//         if (arr[0] !== 1) {
//             return 1
//         } else {
//             for (var i = 0; i < arr.length; i++) {
//                 if (arr[i] - arr[i - 1] > 1) {
//                     return arr[i - 1] + 1
//                 }
//             }
//             return arr[i] + 1
//         }

//     } else {
//         return 1
//     }
// }
export default (arr) => {
    arr = arr.filter(item => item > 0)
    // 实现选择排序，先拿到最小值，如果第一个元素不是1直接返回1，如果是1，就要比相邻元素差值
    for (var i = 0, min; i < arr.length; i++) {
        min = arr[i]
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < min) {
                let c = min
                min = arr[j]
                arr[j] = c
            }
        }
        arr[i] = min
        if (i > 0) {
            if (arr[i] - arr[i - 1] > 1) {
                return arr[i - 1] + 1
            }
        } else {
            if (min !== 1) {
                return 1
            }
        }
    }
    return arr.length ? arr.pop() + 1 : 1
}