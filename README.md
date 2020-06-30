TOML support for vscode
=======================
[![Site](https://img.shields.io/badge/TOML-v1.0-%23FF4D5B.svg?style=flat-square)](https://github.com/toml-lang/toml)
[![LICENSE](https://img.shields.io/badge/license-Anti%20996-blue.svg?style=flat-square)](https://github.com/996icu/996.ICU/blob/master/LICENSE)
[![LICENSE](https://img.shields.io/badge/license-MPL%202.0-blue.svg?style=flat-square)](https://github.com/GalAster/vscode-toml/blob/master/License.md)

*Tom's Obvious Minimal Language*

https://github.com/GalAster/vscode-toml

## Todo List

- [x] TOML Formatter
- [x] Support v1.0
- [ ] Json to Toml
- [ ] Yaml to Toml

LSP is not included in the plan of this project, if you want a better dynamic interactive experience, please try [Even Better Toml](https://marketplace.visualstudio.com/items?itemName=tamasfe.even-better-toml)!

## Theme Compatibility

Highlighting is compatible with all themes, but the visual experience will be affected by the theme.

Main development environment was under [Flatland Monokai](https://marketplace.visualstudio.com/items?itemName=gerane.Theme-FlatlandMonokai).

![Flatland Monokai](https://user-images.githubusercontent.com/17541209/56551634-76ec5400-65bb-11e9-84d0-5771027b1513.png)

And we review the visual experience under: Dark, OneDarkPro, Monokai, Electron

There also a specialized theme for TOML: [Nyx](https://marketplace.visualstudio.com/items?itemName=Aster.nyx-theme)

![Nyx](https://user-images.githubusercontent.com/17541209/56551632-76ec5400-65bb-11e9-97f4-0764a3dfabd4.png)

## Limitation
The plugin only provide static lexical highlighting, so it can't find all the invaild inputs.
