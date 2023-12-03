import { Editor, MarkdownView, Notice, Plugin } from "obsidian";

import { exec } from "child_process";

interface MyPluginSettings {
  mySetting: string;
}

const DEFAULT_SETTINGS: MyPluginSettings = {
  mySetting: "default",
};

export default class MyPlugin extends Plugin {
  perplexity(prompt: string, urls: boolean): Promise<string> {
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

  delay(seconds: number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, seconds * 1000);
    });
  }

  async onload() {
    this.addCommand({
      id: "ppsdsearch",
      name: "Prompt selection",
      editorCallback: (editor: Editor, view: MarkdownView) => {
        let selection = editor.getSelection();
        let line = editor.getCursor().line;
        new Notice(`Generating... (${selection})`);
        this.perplexity(selection, false).then((response) => {
          editor.setLine(line, response);
        });
      },
    });

    this.addCommand({
      id: "ppsdsearchwlinks",
      name: "Prompt selection (return with links)",
      editorCallback: (editor: Editor, view: MarkdownView) => {
        let selection = editor.getSelection();
        let line = editor.getCursor().line;
        new Notice(`Generating... (${selection})`);
        this.perplexity(selection, true).then((response) => {
          editor.setLine(line, response);
        });
      },
    });

    this.addCommand({
      id: "ppsdsearchwlinkslines",
      name: "Prompt every line in selection (return with links)",
      editorCallback: async (editor: Editor, view: MarkdownView) => {
        let questions = editor.getSelection().split("\n");
        let answer = ``;

        for (const question of questions) {
          new Notice(`Generating... (${question})`);
          await this.perplexity(question, true).then((response) => {
            answer += `# ${question.replace(
              question[0],
              question[0].toUpperCase()
            )}\n\n${response}\n---\n`;
          });
          console.log(questions.indexOf(question) === questions.length - 1);
          questions.indexOf(question) === questions.length - 1
            ? new Notice(`Done!`)
            : new Notice("Waiting for 7 secs. (pass too many requests)") &&
              (await this.delay(7));
        }
        let line = editor.getCursor().line;
        editor.setLine(line, answer);
      },
    });

    this.addCommand({
      id: "ppsdsearchlines",
      name: "Prompt every line in selection",
      editorCallback: async (editor: Editor, view: MarkdownView) => {
        let questions = editor.getSelection().split("\n");
        let answer = ``;

        for (const question of questions) {
          new Notice(`Generating... (${question})`);
          await this.perplexity(question, false).then((response) => {
            answer += `# ${question.replace(
              question[0],
              question[0].toUpperCase()
            )}\n\n${response}\n---\n`;
          });
          console.log(questions.indexOf(question) === questions.length - 1);
          questions.indexOf(question) === questions.length - 1
            ? new Notice(`Done!`)
            : new Notice("Waiting for 7 secs. (pass too many requests)") &&
              (await this.delay(7));
        }
        let line = editor.getCursor().line;
        editor.setLine(line, answer);
      },
    });
  }

  onunload() {}
}
