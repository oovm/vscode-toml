const local_time = {
    name: 'constant.other.time.toml',
    match: /\d{2}:\d{2}:\d{2}(?:\.\d+)?/.source,
}

const local_date = {
    name: 'constant.other.date.toml',
    match: /\d{4}\-\d{2}\-\d{2}/.source,
}

const local_date_time = {
    captures: {
        1: {
            name: 'constant.other.datetime.local.toml',
        },
    },
    match: '(\\d{4}\\-\\d{2}\\-\\d{2}T\\d{2}:\\d{2}:\\d{2}(?:\\.\\d+)?)',
}

const offset_date_time = {
    captures: {
        1: {
            name: 'constant.other.datetime.offset.toml',
        },
    },
    match: '(?<!\\w)(\\d{4}\\-\\d{2}\\-\\d{2}[T| ]\\d{2}:\\d{2}:\\d{2}(?:\\.\\d+)?(?:Z|[\\+\\-]\\d{2}:\\d{2}))(?!\\w)',
}

//ordered, must reverse
export const datetime: any = [
    offset_date_time,
    local_date_time,
    local_date,
    local_time,
]

