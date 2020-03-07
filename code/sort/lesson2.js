export default (arr) => {
    // 选择排序
    for (var i = 0, min; i < arr.length; i++) {
        // 记录当前最小值
        min = arr[i]
        // 找到剩下的最小值
        for (var j = i + 1; j < arr.length; j++) {
            if (min > arr[j]) {
               var temp = min
               min = arr[j]
               arr[j]= temp
            }
        }
        // 最小值赋值
        arr[i]=min
    }
    return arr
}
export default (arr)=>{
    for(var i=0,min;i<arr.length;i++){
      min=arr[i]
      for(var j=i+1;j<arr.length;j++){
          if(min>arr[j]){
              let temp =min
              min = arr[j]
              arr[j]= temp
          }
      }
      arr[i] = min
    }
    return arr
}