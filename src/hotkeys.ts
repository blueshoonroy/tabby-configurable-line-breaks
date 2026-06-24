import { Injectable } from '@angular/core'
import { HotkeyDescription, HotkeyProvider, TranslateService } from 'tabby-core'

/** @hidden */
@Injectable()
export class LineBreakHotkeyProvider extends HotkeyProvider {
    hotkeys: HotkeyDescription[] = [
        {
            id: 'insert-line-break',
            name: this.translate.instant('Insert line break'),
        },
    ]

    constructor (private translate: TranslateService) {
        super()
    }

    async provide (): Promise<HotkeyDescription[]> {
        return this.hotkeys
    }
}
