import type {Options as MicromarkOptions} from '@jhuix/micromark-extension-gfm'
import type {Options as MdastOptions} from 'mdast-util-gfm'

export {default} from './lib/index.js'

/**
 * Configuration for `remark-gfm`.
 *
 * Currently supports `singleTilde`, `tableHeadless` as a parse option and
 * `firstLineBlank`, `stringLength`, `tableCellPadding`, `tablePipeAlign`
 * as serialization options.
 */
export interface Options extends MicromarkOptions, MdastOptions {}
