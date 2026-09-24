export type 数值 = number
export type 字符串 = string
export type 布尔 = boolean
export type 未定义 = undefined
export type 空 = null
export type 未知 = unknown
export type 永不 = never
export type 无返回 = void

export type 可空<T> = T | null
export type 可选<T> = T | undefined
export type 数组<T> = T[]
export type 只读数组<T> = readonly T[]
export type 记录<K extends keyof any, V> = Record<K, V>
export type 映射<K, V> = Map<K, V>
export type 集合<T> = Set<T>
export type 承诺<T> = Promise<T>
export type 函数<参数 extends 未知[] = [], 返回 = 无返回> = (...参数: 参数) => 返回

export type 部分<T> = Partial<T>
export type 必需<T> = Required<T>
export type 只读<T> = Readonly<T>
export type 挑选<T, K extends keyof T> = Pick<T, K>
export type 省略<T, K extends keyof any> = Omit<T, K>
export type 返回类型<T extends (...参数: any) => any> = ReturnType<T>
