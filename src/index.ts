import { NgModule } from '@angular/core'
import { AppService, ConfigProvider, HotkeyProvider, HotkeysService, SplitTabComponent } from 'tabby-core'
import { BaseTerminalTabComponent } from 'tabby-terminal'
import TabbyCoreModule from 'tabby-core'
import TabbyTerminalModule from 'tabby-terminal'

import { LineBreakConfigProvider } from './config'
import { LineBreakHotkeyProvider } from './hotkeys'

/** @hidden */
@NgModule({
    imports: [
        TabbyCoreModule,
        TabbyTerminalModule,
    ],
    providers: [
        { provide: ConfigProvider, useClass: LineBreakConfigProvider, multi: true },
        { provide: HotkeyProvider, useClass: LineBreakHotkeyProvider, multi: true },
    ],
})
export default class LineBreakModule {
    constructor (hotkeys: HotkeysService, app: AppService) {
        hotkeys.hotkey$.subscribe(hotkey => {
            if (hotkey !== 'insert-line-break') {
                return
            }
            let tab = app.activeTab
            if (tab instanceof SplitTabComponent) {
                tab = tab.getFocusedTab()
            }
            if (tab instanceof BaseTerminalTabComponent) {
                // ESC + CR — tells the shell to insert a newline instead of submitting
                tab.sendInput('\x1b\r')
            }
        })
    }
}
