export default (str) => {
    // 如果输入的字符串长度小于1 则返回一个空数组 
    if (str.length < 1) return []
    // 定义键盘字母映射表
    let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    // 如果传入字符串的长度小于2，则直接按照字母分开
    if (str.length < 2) return map[str].split('')
    // 将输进去的字符串按字母分割开
    let num = str.split('')  // 234 => '2','3','4'
    // 创建新数组，存放映射后的数组
    let code = []
    num.forEach(item => {
        if (map[item]) {
            code.push(map[item])
        }
    })
    let comb = (arr) => {
        // 创建临时变量
        let result = []
        for (var i = 0; i < arr[0].length; i++) {
            for (var j = 0; j < arr[1].length; j++) {
                result.push(`${arr[0][i]}${arr[1][j]}`)
            }
        }
        arr.splice(0, 2, result)
        if (arr.length > 1) {
            comb(arr)
        } else {
            return result
        }
        return arr[0]

    }

    return comb(code)

}
