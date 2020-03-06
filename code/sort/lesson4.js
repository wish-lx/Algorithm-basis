// leetcode  215
export default (arr, k) => {
    //   冒泡排序变种
    let len = arr.length - 1
    for (var i = len, temp;i > len - k ; i--) {
      for(var j =0; j<i;j++){
          if(arr[j]>arr[j+1]){
              temp = arr[j]
              arr[j]=arr[j+1]
              arr[j+1]=temp
          }
          
      }
    }
    return arr[len-(k-1)]
}
