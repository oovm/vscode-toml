import { string, datetime, boolean, number, illegal } from '../first-class'
import { array } from './array'
import { table_inline } from './table'

export const data: any = {
    patterns: [].concat(table_inline, array, string, datetime, boolean, number),
}