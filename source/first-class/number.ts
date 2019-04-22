const integer = {
    match: '(?<!\\w)((?:[\\+\\-]?(0|([1-9](([0-9]|_[0-9])+)?))))(?!\\w)',
    captures: {
        1: {
            name: 'constant.numeric.integer.toml',
        },
    },
}
const float = {
    match: '(?<!\\w)([\\+\\-]?(0|([1-9](([0-9]|_[0-9])+)?))(?:(?:\\.(0|([1-9](([0-9]|_[0-9])+)?)))?[eE][\\+\\-]?[1-9]_?[0-9]*|(?:\\.[0-9_]*)))(?!\\w)',
    captures: {
        1: {
            name: 'constant.numeric.float.toml',
        },
    },
}
const inf = {
    match: '(?<!\\w)([\\+\\-]?inf)(?!\\w)',
    captures: {
        1: {
            name: 'constant.numeric.inf.toml',
        },
    },
}
const nan = {
    match: '(?<!\\w)([\\+\\-]?nan)(?!\\w)',
    captures: {
        1: {
            name: 'constant.numeric.nan.toml',
        },
    },
}

//ordered, float before integer
export const number: any = [inf, nan, float, integer]