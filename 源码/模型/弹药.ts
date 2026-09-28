import type { 子弹口径类型 } from './枪械'
import type { 数值型, 文本型 } from '../讲中文才飞'

export interface 弹药类型 {
    名称: 文本型
    口径: 子弹口径类型
    穿甲等级: 数值型
    伤害: 数值型
}
