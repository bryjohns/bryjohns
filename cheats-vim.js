cheatsData = typeof(cheatsData) !== 'undefined' ? cheatsData : {};

cheatsData.vim = {
    id: 'vim',
    name: 'VIM',
    dataType: 'sections',
    view: {},
    data: [
    {
        name: "Global",
        items: [

            {
                type: 'tip',
                html: `<kbd>:help keyword</kbd> - open help for keyword`
            },
            {
                type: 'tip',
                html: `<kbd>:o file</kbd> - open file`
            },
            {
                type: 'tip',
                html: `<kbd>:saveas file</kbd> - save file as`
            },
            {
                type: 'tip',
                html: `<kbd>:close</kbd> - close current pane`
            },
            {
                type: 'tip',
                html: `<kbd>K</kbd> - open man page for word under the cursor`
            },
        ]
    },
    {
        name: 'Cursor movement',
        items: [

            {
                type: 'tip',
                html: `<kbd>h</kbd> - move cursor left`
            },
            {
                type: 'tip',
                html: `<kbd>j</kbd> - move cursor down`
            },
            {
                type: 'tip',
                html: `<kbd>k</kbd> - move cursor up`
            },
            {
                type: 'tip',
                html: `<kbd>l</kbd> - move cursor right`
            },
            {
                type: 'tip',
                html: `<kbd>H</kbd> - move to top of screen`
            },
            {
                type: 'tip',
                html: `<kbd>M</kbd> - move to middle of screen`
            },
            {
                type: 'tip',
                html: `<kbd>L</kbd> - move to bottom of screen`
            },
            {
                type: 'tip',
                html: `<kbd>w</kbd> - jump forwards to the start of a word`
            },
            {
                type: 'tip',
                html: `<kbd>W</kbd> - jump forwards to the start of a word (words can contain punctuation)`
            },
            {
                type: 'tip',
                html: `<kbd>e</kbd> - jump forwards to the end of a word`
            },
            {
                type: 'tip',
                html: `<kbd>E</kbd> - jump forwards to the end of a word (words can contain punctuation)`
            },
            {
                type: 'tip',
                html: `<kbd>b</kbd> - jump backwards to the start of a word`
            },
            {
                type: 'tip',
                html: `<kbd>B</kbd> - jump backwards to the start of a word (words can contain punctuation)`
            },
            {
                type: 'tip',
                html: `<kbd>%</kbd> - move to matching character (default supported pairs: '()', '{}', '[]' - use <code>:h matchpairs</code> in vim for more info)`
            },
            {
                type: 'tip',
                html: `<kbd>0</kbd> - jump to the start of the line`
            },
            {
                type: 'tip',
                html: `<kbd>^</kbd> - jump to the first non-blank character of the line`
            },
            {
                type: 'tip',
                html: `<kbd>$</kbd> - jump to the end of the line`
            },
            {
                type: 'tip',
                html: `<kbd>g_</kbd> - jump to the last non-blank character of the line`
            },
            {
                type: 'tip',
                html: `<kbd>gg</kbd> - go to the first line of the document`
            },
            {
                type: 'tip',
                html: `<kbd>G</kbd> - go to the last line of the document`
            },
            {
                type: 'tip',
                html: `<kbd>5G</kbd> - go to line 5`
            },
            {
                type: 'tip',
                html: `<kbd>fx</kbd> - jump to next occurrence of character x`
            },
            {
                type: 'tip',
                html: `<kbd>tx</kbd> - jump to before next occurrence of character x`
            },
            {
                type: 'tip',
                html: `<kbd>Fx</kbd> - jump to previous occurence of character x`
            },
            {
                type: 'tip',
                html: `<kbd>Tx</kbd> - jump to after previous occurence of character x`
            },
            {
                type: 'tip',
                html: `<kbd>;</kbd> - repeat previous f, t, F or T movement`
            },
            {
                type: 'tip',
                html: `<kbd>,</kbd> - repeat previous f, t, F or T movement, backwards`
            },
            {
                type: 'tip',
                html: `<kbd>}</kbd> - jump to next paragraph (or function/block, when editing code)`
            },
            {
                type: 'tip',
                html: `<kbd>{</kbd> - jump to previous paragraph (or function/block, when editing code)`
            },
            {
                type: 'tip',
                html: `<kbd>zz</kbd> - center cursor on screen`
            },
            {
                type: 'tip',
                html: `<kbd>Ctrl</kbd> + <kbd>b</kbd> - move back one full screen`
            },
            {
                type: 'tip',
                html: `<kbd>Ctrl</kbd> + <kbd>f</kbd> - move forward one full screen`
            },
            {
                type: 'tip',
                html: `<kbd>Ctrl</kbd> + <kbd>d</kbd> - move forward 1/2 a screen`
            },
            {
                type: 'tip',
                html: `<kbd>Ctrl</kbd> + <kbd>u</kbd> - move back 1/2 a screen`
            },
        ]
    },
    {
        name: 'Insert mode - inserting/appending text',
        items: [

            {
                type: 'tip',
                html: `<kbd>i</kbd> - insert before the cursor`
            },
            {
                type: 'tip',
                html: `<kbd>I</kbd> - insert at the beginning of the line`
            },
            {
                type: 'tip',
                html: `<kbd>a</kbd> - insert (append) after the cursor`
            },
            {
                type: 'tip',
                html: `<kbd>A</kbd> - insert (append) at the end of the line`
            },
            {
                type: 'tip',
                html: `<kbd>o</kbd> - append (open) a new line below the current line`
            },
            {
                type: 'tip',
                html: `<kbd>O</kbd> - append (open) a new line above the current line`
            },
            {
                type: 'tip',
                html: `<kbd>ea</kbd> - insert (append) at the end of the word`
            },
            {
                type: 'tip',
                html: `<kbd>Esc</kbd> - exit insert mode`
            },
        ]
    },
    {
        name: 'Editing',
        items: [

            {
                type: 'tip',
                html: `<kbd>r</kbd> - replace a single character`
            },
            {
                type: 'tip',
                html: `<kbd>J</kbd> - join line below to the current one with one space in between`
            },
            {
                type: 'tip',
                html: `<kbd>gJ</kbd> - join line below to the current one without space in between`
            },
            {
                type: 'tip',
                html: `<kbd>cc</kbd> - change (replace) entire line`
            },
            {
                type: 'tip',
                html: `<kbd>cw</kbd> - change (replace) to the end of the word`
            },
            {
                type: 'tip',
                html: `<kbd>c$</kbd> - change (replace) to the end of the line`
            },
            {
                type: 'tip',
                html: `<kbd>s</kbd> - delete character and substitute text`
            },
            {
                type: 'tip',
                html: `<kbd>S</kbd> - delete line and substitute text (same as cc)`
            },
            {
                type: 'tip',
                html: `<kbd>xp</kbd> - transpose two letters (delete and paste)`
            },
            {
                type: 'tip',
                html: `<kbd>u</kbd> - undo`
            },
            {
                type: 'tip',
                html: `<kbd>Ctrl</kbd> + <kbd>r</kbd> - redo`
            },
            {
                type: 'tip',
                html: `<kbd>.</kbd> - repeat last command`
            },
        ]
    },
    {
        name: 'Marking text (visual mode)', items: [

            {
                type: 'tip',
                html: `<kbd>v</kbd> - start visual mode, mark lines, then do a command (like y-yank)`
            },
            {
                type: 'tip',
                html: `<kbd>V</kbd> - start linewise visual mode`
            },
            {
                type: 'tip',
                html: `<kbd>o</kbd> - move to other end of marked area`
            },
            {
                type: 'tip',
                html: `<kbd>Ctrl</kbd> + <kbd>v</kbd> - start visual block mode`
            },
            {
                type: 'tip',
                html: `<kbd>O</kbd> - move to other corner of block`
            },
            {
                type: 'tip',
                html: `<kbd>aw</kbd> - mark a word`
            },
            {
                type: 'tip',
                html: `<kbd>ab</kbd> - a block with ()`
            },
            {
                type: 'tip',
                html: `<kbd>aB</kbd> - a block with {}`
            },
            {
                type: 'tip',
                html: `<kbd>ib</kbd> - inner block with ()`
            },
            {
                type: 'tip',
                html: `<kbd>iB</kbd> - inner block with {}`
            },
            {
                type: 'tip',
                html: `<kbd>Esc</kbd> - exit visual mode`
            },
        ]
    },
    {
        name: 'Visual commands',
        items: [

            {
                type: 'tip',
                html: `<kbd>&gt;</kbd> - shift text right`
            },
            {
                type: 'tip',
                html: `<kbd>&lt;</kbd> - shift text left`
            },
            {
                type: 'tip',
                html: `<kbd>y</kbd> - yank (copy) marked text`
            },
            {
                type: 'tip',
                html: `<kbd>d</kbd> - delete marked text`
            },
            {
                type: 'tip',
                html: `<kbd>~</kbd> - switch case`
            },
        ]
    },
    {
        name: 'Registers',
        items: [

            {
                type: 'tip',
                html: `<kbd>:reg</kbd> - show registers content`
            },
            {
                type: 'tip',
                html: `<kbd>"xy</kbd> - yank into register x`
            },
            {
                type: 'tip',
                html: `<kbd>"xp</kbd> - paste contents of register x`
            },
            {
                type: 'example',
                html: `<strong>Tip</strong> Registers are being stored in ~/.viminfo, and will be loaded again on next restart of vim.`
            },
            {
                type: 'example',
                html: `<strong>Tip</strong> Register 0 contains always the value of the last yank command.`
            }
        ]
    },
    {
        name: 'Marks',
        items: [

            {
                type: 'tip',
                html: `<kbd>:marks</kbd> - list of marks`
            },
            {
                type: 'tip',
                html: `<kbd>ma</kbd> - set current position for mark A`
            },
            {
                type: 'tip',
                html: `<kbd>\`a</kbd> - jump to position of mark A`
            },
            {
                type: 'tip',
                html: `<kbd>y\`a</kbd> - yank text to position of mark A`
            },
        ]
    },
    {
        name: 'Macros',
        items: [

            {
                type: 'tip',
                html: `<kbd>qa</kbd> - record macro a`
            },
            {
                type: 'tip',
                html: `<kbd>q</kbd> - stop recording macro`
            },
            {
                type: 'tip',
                html: `<kbd>@a</kbd> - run macro a`
            },
            {
                type: 'tip',
                html: `<kbd>@@</kbd> - rerun last run macro`
            },
        ]
    },
    {
        name: 'Cut and paste',
        items: [

            {
                type: 'tip',
                html: `<kbd>yy</kbd> - yank (copy) a line`
            },
            {
                type: 'tip',
                html: `<kbd>2yy</kbd> - yank (copy) 2 lines`
            },
            {
                type: 'tip',
                html: `<kbd>yw</kbd> - yank (copy) the characters of the word from the cursor position to the start of the next word`
            },
            {
                type: 'tip',
                html: `<kbd>y$</kbd> - yank (copy) to end of line`
            },
            {
                type: 'tip',
                html: `<kbd>p</kbd> - put (paste) the clipboard after cursor`
            },
            {
                type: 'tip',
                html: `<kbd>P</kbd> - put (paste) before cursor`
            },
            {
                type: 'tip',
                html: `<kbd>dd</kbd> - delete (cut) a line`
            },
            {
                type: 'tip',
                html: `<kbd>2dd</kbd> - delete (cut) 2 lines`
            },
            {
                type: 'tip',
                html: `<kbd>dw</kbd> - delete (cut) the characters of the word from the cursor position to the start of the next word`
            },
            {
                type: 'tip',
                html: `<kbd>D</kbd> - delete (cut) to the end of the line`
            },
            {
                type: 'tip',
                html: `<kbd>d$</kbd> - delete (cut) to the end of the line`
            },
            {
                type: 'tip',
                html: `<kbd>x</kbd> - delete (cut) character`
            },
        ]
    },
    {
        name: 'Exiting',
        items: [

            {
                type: 'tip',
                html: `<kbd>:w</kbd> - write (save) the file, but don't exit`
            },
            {
                type: 'tip',
                html: `<kbd>:w !sudo tee %</kbd> - write out the current file using sudo`
            },
            {
                type: 'tip',
                html: `<kbd>:wq</kbd> or <kbd>:x</kbd> or <kbd>ZZ</kbd> - write (save) and quit`
            },
            {
                type: 'tip',
                html: `<kbd>:q</kbd> - quit (fails if there are unsaved changes)`
            },
            {
                type: 'tip',
                html: `<kbd>:q!</kbd> or <kbd>ZQ</kbd> - quit and throw away unsaved changes`
            },
            {
                type: 'tip',
                html: `<kbd>:wqa</kbd> - write (save) and quit on all tabs`
            },
        ]
    },
    {
        name: 'Search and replace',
        items: [

            {
                type: 'tip',
                html: `<kbd>/pattern</kbd> - search for pattern`
            },
            {
                type: 'tip',
                html: `<kbd>?pattern</kbd> - search backward for pattern`
            },
            {
                type: 'tip',
                html: `<kbd>\vpattern</kbd> - 'very magic' pattern: non-alphanumeric characters are interpreted as special regex symbols (no escaping needed)`
            },
            {
                type: 'tip',
                html: `<kbd>n</kbd> - repeat search in same direction`
            },
            {
                type: 'tip',
                html: `<kbd>N</kbd> - repeat search in opposite direction`
            },
            {
                type: 'tip',
                html: `<kbd>:%s/old/new/g</kbd> - replace all old with new throughout file`
            },
            {
                type: 'tip',
                html: `<kbd>:%s/old/new/gc</kbd> - replace all old with new throughout file with confirmations`
            },
            {
                type: 'tip',
                html: `<kbd>:noh</kbd> - remove highlighting of search matches`
            },
        ]
    },
    {
        name: 'Search in multiple files',
        items: [

            {
                type: 'tip',
                html: `<kbd>:vimgrep /pattern/ {file}</kbd> - search for pattern in multiple files`
            },
            {
                type: 'example',
                html: `<kbd>:vimgrep /foo/ **/*</kbd>`
            },
            {
                type: 'tip',
                html: `<kbd>:cn</kbd> - jump to the next match`
            },
            {
                type: 'tip',
                html: `<kbd>:cp</kbd> - jump to the previous match`
            },
            {
                type: 'tip',
                html: `<kbd>:copen</kbd> - open a window containing the list of matches`
            },
        ]
    }
]};