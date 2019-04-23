export const key_value: any = {
    patterns: [
        {
            name: 'invalid.illegal.noKey.toml',
            match: '(\\s*=.*)$',
        },
        {
            name: 'invalid.deprecated.noValue.toml',
            match: '(\\s*[A-Za-z_\\-][A-Za-z0-9_\\-]*\\s*=)(?=\\s*$)',
        },
        {
            begin: "\\s*([A-Za-z_-][A-Za-z0-9_-]*|\".+\"|'.+'|[0-9]+)\\s*(=)\\s*",
            beginCaptures: {
                1: {
                    name: 'entity.name.tag.toml',
                },
                2: {
                    name: 'punctuation.definition.keyValue.toml',
                },
            },
            end: '($|(?==)|\\,|\\s*(?=\\}))',
            patterns: [
                {
                    include: '#comment',
                },
                {
                    include: '#data',
                },
                {
                    include: '#illegal',
                },
            ],
        },
    ],
}