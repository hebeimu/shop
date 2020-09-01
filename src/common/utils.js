// 防抖节流函数
export function debounce(refresh, time) {
  var timeId = null
  return function () {
    if (timeId) clearTimeout(timeId)
    timeId = setTimeout(function () {
      refresh()
    }, time)
  }
}



  
  