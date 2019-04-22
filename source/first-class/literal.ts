export const boolean: any = [
    {
        match: '(?<!\\w)(true|false)(?!\\w)',
        captures: {
            1: {
                name: 'constant.other.boolean.toml',
            },
        },
    },
]
export const illegal: any = {
    captures: {
        1: {
            name: 'invalid.illegal.toml',
        },
    },
    match: '(.*)',
}