// 防抖节流函数
export function debounce(refresh, time=50) {
  var timeId = null
  return function () {
    if (timeId) clearTimeout(timeId)
    timeId = setTimeout(function () {
      refresh()
    }, time)
  }
}


// 时间格式化
export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length))
  }
  
  let o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds()
  }
  
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ""
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 2 ? str : padLeftZero(str))

    }
  }
  
  return fmt
}


  
  