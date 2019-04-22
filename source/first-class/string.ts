
const escape = [
    {
        match: '\\\\([btnfr"\\\\ \\n]|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})',
        name: 'constant.character.escape.toml',
    },
    {
        match: '\\\\[^btnfr"\\\\\\n]',
        name: 'invalid.illegal.escape.toml',
    },
]
const string_single = {
    name: 'string.quoted.single.basic.line.toml',
    match: '"[^"\\\\]*(?:\\\\.[^"\\\\]*)*"',
    patterns: escape,
}
const string_block = {
    name: 'string.quoted.triple.basic.block.toml',
    begin: '"""',
    end: '"""',
    patterns: escape,
}
// do not need escape characters
const literal_string_single = {
    name: 'string.quoted.single.literal.line.toml',
    match: "'.*?'",
}
const literal_string_block = {
    name: 'string.quoted.triple.literal.block.toml',
    begin: "'''",
    end: "'''",
}

//ordered, block must before single
export const string: any = [
    string_block,
    string_single,
    literal_string_block,
    literal_string_single,
]