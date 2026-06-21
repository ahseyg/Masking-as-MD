# Obsidian Masking as MD

A powerful Obsidian plugin that allows you to open, view, and edit non-markdown files natively within your vault. Experience a full code editor environment directly in Obsidian with syntax highlighting, line numbers, and more!

## Features

- **Native Editing**: Open `.py`, `.js`, `.html`, `.css`, `.json`, `.txt`, and many other file types as editable text documents directly in Obsidian.
- **Syntax Highlighting**: Built-in support for popular programming and markup languages, powered by CodeMirror 6.
- **Customizable Editor**:
  - Toggle syntax highlighting
  - Show or hide line numbers
  - Enable or disable word wrapping
  - Adjust font size to your preference
- **No Conversion Needed**: Files are opened directly. No conversion to Markdown and no file modification occurs unless you edit and save.
- **Seamless Integration**: Files open just like standard Markdown files. Supports context menu "Open as Text" for quick access.

## Installation

### From Obsidian Community Plugins (Pending)
1. Open Obsidian Settings.
2. Go to Community Plugins and disable "Safe Mode" if necessary.
3. Click "Browse" and search for **Masking as MD**.
4. Install and enable the plugin.

### Manual Installation
1. Download the latest release (`main.js`, `manifest.json`, `styles.css`) from the [Releases](https://github.com/ahseyg/obsidian-masking-as-md/releases) page.
2. Place the files in your vault's plugin directory: `<vault>/.obsidian/plugins/masking-as-md/`
3. Reload Obsidian and enable the plugin from Community Plugins.

## Configuration

Once installed and enabled, you can configure the plugin by going to **Settings → Masking as MD**:

- **File Extensions**: A comma-separated list of extensions you want the plugin to handle (e.g., `py, js, html, css, txt`). *Note: You must restart Obsidian for extension changes to take effect.*
- **Syntax Highlighting**: Turn CodeMirror syntax highlighting on or off.
- **Line Numbers**: Display line numbers on the left side of the editor.
- **Word Wrap**: Wrap long lines so you don't have to scroll horizontally.
- **Font Size**: Use the slider to set your ideal editor font size.

## Supported Languages (Syntax Highlighting)

The plugin currently provides built-in syntax highlighting for:
- JavaScript / TypeScript (`.js`, `.jsx`, `.ts`, `.tsx`)
- Python (`.py`)
- HTML (`.html`, `.htm`)
- CSS / SCSS / LESS (`.css`, `.scss`, `.less`)
- JSON (`.json`)
- Markdown (`.md`, `.markdown` - *if forced to open with this plugin*)

*More languages can be supported upon request!*

## Development

If you want to contribute or build the plugin from source:

1. Clone this repository.
2. Run `npm install` to install the required dependencies.
3. Run `npm run build` to compile the plugin.
4. Copy the output files to your Obsidian vault's plugin folder.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Created by [ahseyg](https://github.com/ahseyg).
