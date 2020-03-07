// 快速排序 
// 定义： 数组中指定一个元素为标尺，比他大的放到该元素后面，小的放到他前面，如此重复直至正序排列
export default (arr) => {
    let quickSort = (arr) => {
        if (arr.length < 2) {
            return arr
        } else {
            let flag = arr[0]
            let left = []
            let right = []
            for (var i = 1; i < arr.length; i++) {
                if(arr[i]>flag){
                    right.push(arr[i])
                }else{
                    left.push(arr[i])
                }
            }
            return quickSort(left).concat(flag,quickSort(right))
        }

    }
    return quickSort(arr)
}