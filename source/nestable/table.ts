const table_basic: any = {
    captures: {
        1: {
            name: 'punctuation.definition.table.toml',
        },
        2: {
            patterns: [
                {
                    match: '[^\\s.]+',
                    name: 'entity.other.attribute-name.table.toml',
                },
            ],
        },
        3: {
            name: 'punctuation.definition.table.toml',
        },
    },
    match: '^\\s*(\\[)([^\\[\\]]*)(\\])',
    name: 'meta.tag.table.toml',
}

const table_array: any = {
    name: 'meta.tag.table.array.toml',
    match: '^\\s*(\\[\\[)([^\\[\\]]*)(\\]\\])',
    captures: {
        1: {
            name: 'punctuation.definition.table.array.toml',
        },
        2: {
            patterns: [
                {
                    match: '[^\\s.]+',
                    name: 'entity.other.attribute-name.table.array.toml',
                },
            ],
        },
        3: {
            name: 'punctuation.definition.table.array.toml',
        },
    },
}

export const table_inline: any = {
    begin: '(?<!\\w)(\\{)\\s*',
    beginCaptures: {
        1: {
            name: 'punctuation.definition.table.inline.toml',
        },
    },
    end: '\\s*(\\})(?!\\w)',
    endCaptures: {
        1: {
            name: 'punctuation.definition.table.inline.toml',
        },
    },
    patterns: [
        {
            include: '#key_value',
        },
        {
            include: '#data',
        },
    ],
}

export const table: any = {
    patterns: [
        table_basic,
        table_array,
        table_inline,
    ],
}