# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.3] - 2026-06-22

### Added
- **YAML Support**: Added syntax highlighting for `.yaml` and `.yml` files via `@codemirror/lang-yaml`.

---

## [1.0.2] - 2026-06-21

### Fixed
- Bumped `minAppVersion` to `1.0.0` to officially support Workspace tab APIs and resolve unsupported API lint errors.

---

## [1.0.1] - 2026-06-21

### Fixed
- Bumped `minAppVersion` to `0.15.3` to satisfy new Obsidian API usages.
- Removed inline styles (`style.height` etc) in favor of CSS classes (`no-static-styles-assignment`).
- Fixed TypeScript `any` assignment warning in `loadData`.
- Removed deprecated `.setDynamicTooltip()` on font size slider.
- Removed `!important` from CSS selection styling by increasing specificity.

---

## [1.0.0] - 2026-06-21

### Added
- **CodeMirror Integration**: Completely replaced the basic text area with Obsidian's powerful CodeMirror 6 engine.
- **Syntax Highlighting**: Added built-in highlighting for JavaScript, TypeScript, Python, HTML, CSS, JSON, and Markdown.
- **Settings Tab**: Added a robust settings UI to control:
  - Enabled file extensions
  - Syntax Highlighting toggle
  - Line Numbers toggle
  - Word Wrap toggle
  - Font Size slider
- **Seamless Editing**: Files automatically save and sync with the Obsidian vault.
