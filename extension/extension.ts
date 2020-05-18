import * as vscode from 'vscode'
import { rs_format } from 'toml_vscode'

export function activate(context: vscode.ExtensionContext) {
    // 👍 formatter implemented using API
    vscode.languages.registerDocumentFormattingEditProvider('toml', {
        provideDocumentFormattingEdits(document: vscode.TextDocument): vscode.TextEdit[] {
            const text = document.getText()
            const start = document.lineAt(0).range.start
            const end = document.lineAt(document.lineCount - 1).range.end
            const r = new vscode.Range(start, end)
            return [vscode.TextEdit.replace(r, rs_format(text))]
        },
    })
}
