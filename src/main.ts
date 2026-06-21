import { Plugin, TFile, Notice, TextFileView, WorkspaceLeaf, TAbstractFile, PluginSettingTab, Setting, App } from 'obsidian';
import { EditorView, lineNumbers, highlightActiveLineGutter, highlightSpecialChars, drawSelection, dropCursor, rectangularSelection, crosshairCursor, highlightActiveLine, keymap } from '@codemirror/view';
import { EditorState, Extension } from '@codemirror/state';
import { defaultHighlightStyle, syntaxHighlighting, indentOnInput, bracketMatching, foldGutter, foldKeymap } from '@codemirror/language';
import { history, defaultKeymap, historyKeymap } from '@codemirror/commands';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { json } from '@codemirror/lang-json';
import { markdown } from '@codemirror/lang-markdown';

const VIEW_TYPE = 'masking-text-view';

interface Settings {
    extensions: string[];
    syntaxHighlighting: boolean;
    lineNumbers: boolean;
    wordWrap: boolean;
    fontSize: number;
}

const DEFAULT_SETTINGS: Settings = {
    extensions: ['txt', 'py', 'js', 'ts', 'html', 'css', 'json', 'xml', 'yaml', 'yml', 'sql', 'sh', 'bat', 'ini', 'cfg', 'log', 'csv'],
    syntaxHighlighting: true,
    lineNumbers: true,
    wordWrap: true,
    fontSize: 14
};

function getLanguageExtension(ext: string): Extension | null {
    switch (ext.toLowerCase()) {
        case 'js':
        case 'jsx':
        case 'ts':
        case 'tsx':
            return javascript();
        case 'py':
            return python();
        case 'html':
        case 'htm':
            return html();
        case 'css':
        case 'scss':
        case 'less':
            return css();
        case 'json':
            return json();
        case 'md':
        case 'markdown':
            return markdown();
        default:
            return null;
    }
}

export default class MaskingPlugin extends Plugin {
    settings: Settings;

    async onload() {
        console.log('Masking as MD: Loading...');

        const loadedData = (await this.loadData()) as Partial<Settings> | null;
        this.settings = Object.assign({}, DEFAULT_SETTINGS, loadedData || {});

        this.addSettingTab(new MaskingSettingTab(this.app, this));

        this.registerView(VIEW_TYPE, (leaf) => new CodeEditorView(leaf, this));

        try {
            this.registerExtensions(this.settings.extensions, VIEW_TYPE);
        } catch (e) {
            console.error('Masking as MD: Extension registration failed:', e);
        }

        this.addRibbonIcon('file-text', 'Open text file', async () => {
            new Notice('Click on any supported file to open it!');
        });

        this.registerEvent(
            this.app.workspace.on('file-menu', (menu, file: TAbstractFile) => {
                if (file instanceof TFile) {
                    menu.addItem((item) => {
                        item.setTitle('Open as Text')
                            .setIcon('file-text')
                            .onClick(async () => {
                                const leaf = this.app.workspace.getLeaf('tab');
                                await leaf.openFile(file);
                            });
                    });
                }
            })
        );
    }

    onunload() {
        console.log('Masking as MD: Unloaded');
    }
}

class CodeEditorView extends TextFileView {
    editor: EditorView | null = null;
    data: string = '';
    plugin: MaskingPlugin;

    constructor(leaf: WorkspaceLeaf, plugin: MaskingPlugin) {
        super(leaf);
        this.plugin = plugin;
    }

    getViewType(): string {
        return VIEW_TYPE;
    }

    getDisplayText(): string {
        return this.file?.name || 'Text File';
    }

    getIcon(): string {
        return 'file-text';
    }

    async onOpen(): Promise<void> {
        this.contentEl.empty();
        this.contentEl.classList.add('masking-code-editor-view');

        const extensions: Extension[] = [
            history(),
            drawSelection(),
            dropCursor(),
            highlightSpecialChars(),
            EditorState.allowMultipleSelections.of(true),
            indentOnInput(),
            bracketMatching(),
            rectangularSelection(),
            crosshairCursor(),
            keymap.of([
                ...defaultKeymap,
                ...historyKeymap,
                ...foldKeymap
            ]),
            EditorView.updateListener.of((update) => {
                if (update.docChanged) {
                    this.data = update.state.doc.toString();
                    this.requestSave();
                }
            }),
            EditorView.theme({
                "&": {
                    fontSize: `${this.plugin.settings.fontSize}px`,
                    height: "100%",
                    flex: "1",
                    backgroundColor: "var(--background-primary)"
                },
                ".cm-scroller": {
                    overflow: "auto",
                    fontFamily: "var(--font-monospace)"
                },
                ".cm-gutters": {
                    backgroundColor: "var(--background-secondary)",
                    color: "var(--text-muted)",
                    border: "none",
                    borderRight: "1px solid var(--background-modifier-border)"
                },
                ".cm-activeLineGutter": {
                    backgroundColor: "var(--background-modifier-hover)",
                    color: "var(--text-normal)"
                },
                ".cm-activeLine": {
                    backgroundColor: "var(--background-modifier-hover)"
                },
                ".cm-selectionBackground, .cm-focused .cm-selectionBackground": {
                    backgroundColor: "var(--text-selection)"
                },
                ".cm-cursor, .cm-dropCursor": {
                    borderLeftColor: "var(--text-normal)"
                }
            })
        ];

        if (this.plugin.settings.lineNumbers) {
            extensions.push(lineNumbers(), foldGutter(), highlightActiveLineGutter());
        }
        
        if (this.plugin.settings.syntaxHighlighting) {
            extensions.push(syntaxHighlighting(defaultHighlightStyle, { fallback: true }), highlightActiveLine());
            
            if (this.file) {
                const ext = this.file.extension;
                const langExt = getLanguageExtension(ext);
                if (langExt) {
                    extensions.push(langExt);
                }
            }
        }
        
        if (this.plugin.settings.wordWrap) {
            extensions.push(EditorView.lineWrapping);
        }

        const state = EditorState.create({
            doc: this.data,
            extensions: extensions
        });

        this.editor = new EditorView({
            state,
            parent: this.contentEl
        });
    }

    async onClose(): Promise<void> {
        if (this.editor) {
            this.editor.destroy();
            this.editor = null;
        }
    }

    getViewData(): string {
        return this.data;
    }

    setViewData(data: string, clear: boolean): void {
        this.data = data;
        if (this.editor) {
            // Only update if content is actually different to preserve cursor
            if (this.editor.state.doc.toString() !== data) {
                this.editor.dispatch({
                    changes: {from: 0, to: this.editor.state.doc.length, insert: data}
                });
            }
        }
    }

    clear(): void {
        this.data = '';
        if (this.editor) {
            this.editor.dispatch({
                changes: {from: 0, to: this.editor.state.doc.length, insert: ''}
            });
        }
    }
}

class MaskingSettingTab extends PluginSettingTab {
    plugin: MaskingPlugin;

    constructor(app: App, plugin: MaskingPlugin) {
        super(app, plugin);
        this.plugin = plugin;
    }

    display(): void {
        const {containerEl} = this;

        containerEl.empty();

        new Setting(containerEl)
            .setName('File Extensions')
            .setDesc('Comma-separated list of file extensions to open with this plugin (e.g., py, js, html). Restart Obsidian for extension changes to take effect.')
            .addText(text => text
                .setPlaceholder('py, js, html')
                .setValue(this.plugin.settings.extensions.join(', '))
                .onChange(async (value) => {
                    this.plugin.settings.extensions = value.split(',').map(s => s.trim()).filter(s => s.length > 0);
                    await this.plugin.saveData(this.plugin.settings);
                }));

        new Setting(containerEl)
            .setName('Syntax Highlighting')
            .setDesc('Enable syntax highlighting for supported languages.')
            .addToggle(toggle => toggle
                .setValue(this.plugin.settings.syntaxHighlighting)
                .onChange(async (value) => {
                    this.plugin.settings.syntaxHighlighting = value;
                    await this.plugin.saveData(this.plugin.settings);
                }));

        new Setting(containerEl)
            .setName('Line Numbers')
            .setDesc('Show line numbers in the editor.')
            .addToggle(toggle => toggle
                .setValue(this.plugin.settings.lineNumbers)
                .onChange(async (value) => {
                    this.plugin.settings.lineNumbers = value;
                    await this.plugin.saveData(this.plugin.settings);
                }));

        new Setting(containerEl)
            .setName('Word Wrap')
            .setDesc('Wrap long lines of text.')
            .addToggle(toggle => toggle
                .setValue(this.plugin.settings.wordWrap)
                .onChange(async (value) => {
                    this.plugin.settings.wordWrap = value;
                    await this.plugin.saveData(this.plugin.settings);
                }));
                
        new Setting(containerEl)
            .setName('Font Size')
            .setDesc('Font size in pixels.')
            .addSlider(slider => slider
                .setLimits(10, 30, 1)
                .setValue(this.plugin.settings.fontSize)
                .onChange(async (value) => {
                    this.plugin.settings.fontSize = value;
                    await this.plugin.saveData(this.plugin.settings);
                }));
    }
}
