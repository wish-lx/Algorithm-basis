export default (str) => {
    let arr = []
    let match = (str) => {
        let j = str.match(/^(0+|1+)/)[0]
         let o = (j[0] ^ 1).toString().repeat(j.length)
        let reg = new RegExp(`^(${j}${o})`)
        if (reg.test(str)) {
            return RegExp.$1
        } else {
            return ''
        }
    }
    for (var i = 0; i < str.length - 1; i++) {
        let sub = match(str.slice(i))
        if (sub)  arr.push(sub)
    }
    return arr

}