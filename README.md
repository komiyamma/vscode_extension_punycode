# Punycode Converter for VS Code

[![ライセンス: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)

Visual Studio Code上で、選択したテキストをPunycodeと国際化ドメイン名（IDN）の間で相互に変換するためのシンプルな拡張機能です。

## ✨ 主な機能

-   **Punycodeへの変換**: `日本語ドメイン.com` のような国際化ドメイン名を選択してコマンドを実行すると、`xn--eckwd4c7cu47r2wf.com` のようなPunycode形式に変換します。
-   **Unicodeへの変換**: `xn--...` から始まるPunycode文字列を選択してコマンドを実行すると、元の国際化ドメイン名に変換（デコード）します。
-   **シンプル**: コマンドパレットから単一のコマンドを実行するだけの簡単な操作です。

## 🚀 インストール方法

この拡張機能はVisual Studio Code Marketplaceには公開されていません。以下の手順で手動でインストールしてください。

1.  **リポジトリのクローン**:
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    ```
2.  **依存関係のインストール**:
    ```bash
    cd your-repo-name
    npm install
    ```
3.  **拡張機能のパッケージング**:
    ```bash
    npm install -g @vscode/vsce
    vsce package
    ```
    これにより、`.vsix` ファイル（例: `punycode-0.0.1.vsix`）が生成されます。
4.  **VS Codeへのインストール**:
    -   VS Codeを開きます。
    -   `Ctrl+Shift+P` でコマンドパレットを開き、`Extensions: Install from VSIX...` を選択します。
    -   生成された `.vsix` ファイルを選択してインストールします。

## 使い方

1.  エディタ上でPunycode変換したい文字列（例: `みんなのドメイン.jp` や `xn--h9j952h.jp`）を選択します。
2.  `Ctrl+Shift+P` でコマンドパレットを開きます。
3.  `punycode` と入力して、表示されるコマンドを実行します。
4.  変換結果がVS Codeの出力ウィンドウ（`Output` -> `ConvertPunyCode`）に表示されます。

![使い方デモ](https://i.imgur.com/your-demo-image.gif)
*（ここにデモGIFを挿入するのが理想的です）*

## 📜 ライセンス

このプロジェクトは **CC0 1.0 Universal** の条件の下で提供されます。詳細は [LICENSE](LICENSE) ファイルをご覧ください。
これは、誰でも自由にこのソフトウェアを商用・非商用を問わず、いかなる目的でも利用、改変、再配布できることを意味します。

## 🤝 貢献

フィードバックや改善提案はいつでも歓迎します。`ISSUES.md`に記載されている問題点の改善や、新しい機能の追加など、お気軽にIssueやPull Requestを作成してください。