// export default (str)=>{
//     // 以空格为分隔符，将字符串分割成字符串数组
//     let arr = str.split(' ')
//     // 对数组进行遍历，然后每个元素进行反转
//     let result = arr.map((item)=>{
//         return item.split('').reverse().join('')
//     })
//    return result.join(' ')
// }
// export default (str) => {
//     // 以空格为分隔符，将字符串分割成字符串数组
//     // 对数组进行遍历，然后每个元素进行反转
//     return str.split(' ').map((item) => {
//         return item.split('').reverse().join('')
//     }).join(' ')

// }
export default (str) => {
    // 以空格为分隔符，将字符串分割成字符串数组
    // 对数组进行遍历，然后每个元素进行反转
    return str.split(/\s/g).map((item) => {
        return item.split('').reverse().join('')
    }).join(' ')

}

