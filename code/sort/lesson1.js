export default (arr)=>{
    // 冒泡排序
    for(var i=arr.length-1, temp; i>0; i--) {
        for(var j=0; j<i; j++){
            var temp = arr[j]
            if(temp>arr[j+1]){
                arr[j] = arr[j+1]
                arr[j+1] = temp
               
            }
        }
    }
    return arr
}
export default (arr)=>{
    // 冒泡排序
    for(var i=arr.length-1;i>0;i--){
        for(var j=0;j<i;j++){
            if(arr[j]>arr[j+1]){
                var temp = arr[j]
                arr[j]= arr[j+1]
                arr[j+1]= temp
            }
        }
    }
    return arr
}