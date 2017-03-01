
import Timeago from 'timeago.js'

/**
 * 对Date的扩展，将Date格式转化为指定格式的String
 */
export const fmtDate = (data, fmt) => {
  let o = {
    'M+': data.getMonth() + 1,
    'd+': data.getDate(),
    'h+': data.getHours(),
    'm+': data.getMinutes(),
    's+': data.getSeconds(),
    'q+': Math.floor((data.getMonth() + 3) / 3), //季
    'S' : data.getMilliseconds()
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (data.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  Object.keys(o).forEach(k => {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr('' + o[k]).length))
    }
  })
  return fmt
}

/**
 * 调用Timeago库显示现在的时间
 */
export const MillisecondToDate = (time) => {
    let str = ''
    if (time !== null && time !== '') {
        str = new Timeago().format(time, 'zh_CN')
    }
    return str;
}

/**
 * 格式化日期或时间
 * @param {string} time 需要格式化的时间
 * @param {bool} friendly 是否是fromNow
 */
export const getLastTimeStr = (time, friendly) => {
    if (friendly) {
        return MillisecondToDate(time)
    } else {
        return fmtDate(new Date(time), 'yyyy-MM-dd hh:mm')
    }
}