import { ConfigProvider } from 'tabby-core'

/** @hidden */
export class LineBreakConfigProvider extends ConfigProvider {
    defaults = {
        hotkeys: {
            'insert-line-break': ['Shift-Enter'],
        },
    }
}
