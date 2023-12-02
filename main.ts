import { Editor, MarkdownView, Plugin } from "obsidian";

import { exec } from "child_process";

interface MyPluginSettings {
  mySetting: string;
}

const DEFAULT_SETTINGS: MyPluginSettings = {
  mySetting: "default",
};

export default class MyPlugin extends Plugin {
  perplexity(prompt: string, urls: boolean) {
    return new Promise((resolve, reject) => {
      const python = exec(
        //@ts-ignore bc of basePath
        `${`python "${this.app.vault.adapter.basePath}/${this.manifest.dir}/main.py"`.replaceAll(
          "\\",
          "/"
        )} "${prompt}" ${urls}`.replaceAll("\\", "/")
      );

      python.stdout?.on("data", (stdout) => {
        let response = String(stdout);
        for (let i = 0; i <= 10; i++) {
          // removing links
          response = response.replaceAll(`[${i}]`, "");
        }
        resolve(response);
      });

      python.stderr?.on("data", (stderr) => {
        console.log(stderr);
      });
    });
  }

  async onload() {
    this.addCommand({
      id: "pplxsearch",
      name: "Prompt selection",
      editorCallback: (editor: Editor, view: MarkdownView) => {
        let selection = editor.getSelection();
        let line = editor.getCursor().line;
        editor.replaceSelection("`Generating...`");
        this.perplexity(selection, false).then((response) => {
          editor.setLine(line, "");
          editor.setValue(editor.getValue() + response);
        });
      },
    });

    this.addCommand({
      id: "pplxsearchwlinks",
      name: "Prompt selection (return with links)",
      editorCallback: (editor: Editor, view: MarkdownView) => {
        let selection = editor.getSelection();
        let line = editor.getCursor().line;
        editor.replaceSelection("`Generating...`");
        this.perplexity(selection, true).then((response) => {
          editor.setLine(line, "");
          editor.setValue(editor.getValue() + response);
        });
      },
    });
  }

  onunload() {}
}
