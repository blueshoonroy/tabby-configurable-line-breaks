# tabby-configurable-line-breaks

> *Listen up, see. You ever try to feed one of them fancy robots — Claude Code an' the like — a nice long order, only for that double-crossin' terminal to whack your command before you was finished talkin'? Yeah. We don't stand for that racket no more.*

This here's a plugin for the [Tabby](https://github.com/Eugeny/tabby) terminal that lets **you** be the boss of which key drops a line break into the terminal — instead o' shippin' the whole command off to the slammer. Default's `Shift-Enter`, but you can rebind it to whatever tickles ya. Real swell if the stock `Shift-Alt-Enter` rubs ya the wrong way.

One key. One clean line break. No funny business.

---

## What's the angle?

When the hotkey fires, the plugin slips the active terminal a quiet little `ESC` + carriage return (`\x1b\r`) — the secret handshake that tells your shell *"new line, pal, don't you dare run it yet."* Works in split panes too; it always finds whichever tab's got the spotlight.

---

## Gettin' it on the payroll (installation)

There's three ways into this outfit. Pick your poison.

### Option 1 — The clean drop-off (no tools, no fuss)

This is the way most wise guys do it. Grab the goods and stash 'em in Tabby's plugin joint.

**Step one — find the hideout.** Tabby keeps its plugins here, dependin' on your turf:

| Your turf | The hideout |
| --- | --- |
| Windows | `%APPDATA%\tabby\plugins\node_modules\` |
| macOS | `~/Library/Application Support/tabby/plugins/node_modules\` |
| Linux | `~/.config/tabby/plugins/node_modules/` |

(No `node_modules` folder in there? Make one yourself, capisce. Easiest racket: open Tabby, mosey over to **Settings → Plugins**, install any ol' plugin, an' Tabby builds the joint for ya.)

**Step two — move the merchandise.** Drop this whole repo into a folder named **exactly** `tabby-configurable-line-breaks`, sittin' *directly* inside `node_modules`. So you end up with:

```
.../tabby/plugins/node_modules/
└── tabby-configurable-line-breaks/
    ├── package.json
    └── dist/
        └── index.js
```

> **Don't get cute with the layout, see.** Tabby only frisks one pocket deep — `node_modules/<name>/package.json`. Bury the plugin in some extra wrapper folder an' Tabby walks right past it like it never saw nothin'. The `package.json` has gotta sit *right there* in your named folder, an' it's gotta carry the `tabby-plugin` keyword — which this one already does. We took care of it.

**Step three — knock three times.** **Quit Tabby all the way** — outta the system tray too, no leavin' it nappin' in the background. Then fire it back up. Tabby only counts its crew at startup.

### Option 2 — Straight from the supplier (npm)

Once this mob's published to npm, you can let Tabby's own muscle fetch it:

1. Open Tabby → **Settings → Plugins**.
2. Search the joint for **`configurable-line-breaks`**.
3. Hit **Install**, then restart Tabby.

*(Until it's up on npm, stick with Option 1, kid.)*

### Option 3 — Cook it yourself from scratch (build from source)

For the gearheads who like to build their own tommy guns:

```bash
git clone https://github.com/blueshoonroy/tabby-configurable-line-breaks.git
cd tabby-configurable-line-breaks
npm install
npm run build      # spits out dist/index.js  (npm run watch to keep an eye on it)
```

Then run it through **Option 1** — drop the built folder into Tabby's `node_modules` an' restart.

---

## Puttin' it to work

After the restart, head to **Settings → Hotkeys** an' hunt down **"Insert line break."** She's wired to `Shift-Enter` outta the box. Don't like it? Click it, mash whatever combo you fancy, an' that's the law now.

Wanna check it's really on the books? Peek at **Settings → Plugins** — `tabby-configurable-line-breaks` oughta be standin' right there in the lineup.

---

## When the joint won't open (troubleshooting)

- **Plugin's a no-show in the lineup.** Nine times outta ten the folder's nested too deep or named wrong. The `package.json` has gotta be at `node_modules/tabby-configurable-line-breaks/package.json` — no wrapper folders muscling in between.
- **You restarted but nothin' doin'.** Make sure Tabby was *really* dead — check the system tray an' kill it there too before reopenin'.
- **It shows up but throws a fit.** Could be a beef between this plugin an' your Tabby version (built against `@angular ^15`, `tabby-core`, `tabby-terminal`). Pop the developer console (**Ctrl+Shift+I**) an' read what the canary's singin'.
- **Do I gotta run npm?** Nah — not for Option 1. The `dist/` is already cooked, an' the dependencies get handed over by Tabby itself at runtime. `npm`'s only for the wise guys buildin' from source in Option 2... er, Option 3.

---

## The fine print

MIT licensed — see [LICENSE](LICENSE). Take it, use it, share it 'round the neighborhood. We ain't the rat type.

*Now beat it, ya got line breaks to insert.* 🎩
