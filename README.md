# Masking as MD

Transform Obsidian into a powerful code editor for your non-markdown files. This plugin allows you to open, view, and edit files like `.py`, `.js`, `.html`, `.css`, and `.json` natively within your vault, complete with syntax highlighting and line numbers.

## Why Masking as MD?

Obsidian is excellent for Markdown, but occasionally you need to edit scripts, configuration files, or web documents without leaving your vault. Instead of relying on external editors, Masking as MD integrates a fully-fledged CodeMirror 6 editor directly into Obsidian. 

Files are opened securely as plain text. No conversions to Markdown occur, and your files are never modified unless you manually edit and save them.

## Key Features

- **Native Code Editor Experience:** Turn Obsidian into a lightweight IDE for your scripts and config files.
- **Syntax Highlighting:** Built-in CodeMirror support for popular programming and markup languages.
- **Customizable Interface:**
  - Toggle syntax highlighting on or off.
  - Show or hide line numbers.
  - Enable or disable word wrapping to avoid horizontal scrolling.
  - Adjust the font size to your liking.
- **Seamless Integration:** Supported files open just like standard Markdown files. You can also right-click any file and select "Open as Text".

## Installation

### From Obsidian Community Plugins (Pending)
1. Open Obsidian Settings.
2. Go to Community Plugins and disable "Safe Mode" if necessary.
3. Click "Browse" and search for **Masking as MD**.
4. Install and enable the plugin.

### Manual Installation
1. Download the latest release (`main.js`, `manifest.json`, `styles.css`) from the Releases page.
2. Place the files in your vault's plugin directory: `<vault>/.obsidian/plugins/masking-as-md/`
3. Reload Obsidian and enable the plugin from the Community Plugins tab.

## Configuration

Navigate to **Settings -> Masking as MD** to configure the plugin:

- **File Extensions:** Provide a comma-separated list of extensions you want the plugin to handle (for example: `py, js, html, css, txt`). Note: You must restart Obsidian for extension changes to take effect on the file explorer.
- **Syntax Highlighting:** Enable or disable CodeMirror syntax highlighting.
- **Line Numbers:** Display line numbers on the left side of the editor.
- **Word Wrap:** Wrap long lines of code.
- **Font Size:** Set your preferred editor font size using the slider.

## Supported Languages

The plugin provides built-in syntax highlighting for the following languages out of the box:
- JavaScript / TypeScript (`.js`, `.jsx`, `.ts`, `.tsx`)
- Python (`.py`)
- HTML (`.html`, `.htm`)
- CSS / SCSS / LESS (`.css`, `.scss`, `.less`)
- JSON (`.json`)
- Markdown (`.md`, `.markdown` - if forced to open with this plugin)

## Feedback, Issues, and Suggestions

Your feedback is highly appreciated! If you encounter any bugs, need a new feature, or want syntax highlighting support for an additional language, please feel free to open an issue on the GitHub repository.

Contributions via Pull Requests are also always welcome.

## Development

If you wish to build the plugin from source:

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run build` to compile the plugin.
4. Copy the output files to your Obsidian vault's plugin folder.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Created by ahseyg.
