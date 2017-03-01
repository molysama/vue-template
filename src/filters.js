
import * as utils from './utils'

/**
 * 格式化时间
 * 
 * @param {string} time 需要格式化的时间
 * @param {bool} friendly 是否用当前时间
 * 
 */
export const getLastTimeStr = (time, friendly) => {
  if (friendly) {
    return utils.MillisecondToDate(time)
  } else {
    return utils.fmtDate(new Date(), 'yyyy-MM-dd hh:mm')
  }
}