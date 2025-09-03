'use strict';
import * as vscode from 'vscode';
const punycode = require('./punycode.js');

const outputChannel = vscode.window.createOutputChannel("ConvertPunyCode");

export function activate(context: vscode.ExtensionContext) {
    console.log('Extension "punycode" is now active.');

    const disposable = vscode.commands.registerCommand('extension.punycode', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showInformationMessage("エディタが開かれていません。");
            return;
        }

        const selection = editor.selection;
        const selectedText = editor.document.getText(selection);

        if (!selectedText) {
            outputWindow("文字列を選択した状態で使用してください。");
            return;
        }

        const convertedText = getConvertedPunyCode(selectedText);
        if (convertedText) {
            outputWindow(convertedText);
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
}

/**
 * テキストを PunyCode⇔国際化ドメイン へと相互変換する。
 * @param text : 変換対象のテキスト文字列
 * @returns 変換後の文字列、またはエラーの場合はnull
 */
function getConvertedPunyCode(text: string): string | null {
    try {
        if (text.includes("xn--")) {
            // 国際化ドメインへデコード
            return punycode.toUnicode(text);
        } else {
            // Punycodeへエンコード
            return punycode.toASCII(text);
        }
    } catch (e) {
        const errorMessage = e instanceof Error ? e.message : String(e);
        outputWindow(`変換エラーが発生しました: ${errorMessage}`);
        return null;
    }
}

/**
 * 対象のメッセージを出力ウィンドウへと表示する
 * @param message : 表示対象のメッセージ
 */
function outputWindow(message: string) {
    outputChannel.show(true); // true を渡してフォーカスを維持
    outputChannel.appendLine(message);
}
