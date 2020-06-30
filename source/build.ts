import * as path from 'path'
import { writeFileSync, readFileSync } from 'fs'
import { data, comment, table, key_value, illegal } from '.'
function including(_: string) { return { include: '#' + _ } }

function getVersion() {
    const json = readFileSync(path.resolve(__dirname, '..', 'package.json'))
    return 'v' + JSON.parse(json.toString()).version
}

const syntax = {
    version: getVersion(),
    scopeName: 'source.toml',
    uuid: '9b00c027-8f13-4f5a-a57e-d90478a1f817',
    information_for_contributors: [
        'aster: galaster@foxmail.com',
    ],
    patterns: [
        including('comment'),
        including('table'),
        including('key_value'),
    ],
    repository: {
        comment: comment,
        table: table,
        key_value: key_value,
        data: data,
        illegal: illegal,
    },
}

writeFileSync(
    path.resolve(__dirname, '..') + '/extension/toml.tmLanguage.json',
    JSON.stringify(syntax, null, 4),
)
