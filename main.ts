import { Editor, MarkdownView, Plugin } from "obsidian";

import { exec } from "child_process";

interface MyPluginSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: MyPluginSettings = {
	mySetting: "default",
};
function perplexity(prompt: string, urls: boolean) {
	return new Promise((resolve, reject) => {
		exec(
			//@ts-ignore bc of basePath
			`python "${this.app.vault.adapter.basePath}/${this.app.vault.configDir}/plugins/Perplexity/main.py" "${prompt}" ${urls}`.replaceAll(
				"\\",
				"/"
			)
		).stdout?.on("data", (stdout) => {
			let response = String(stdout);
			for (let i = 0; i <= 10; i++) {
				// removing links
				response = response.replaceAll(`[${i}]`, "");
			}
			resolve(response);
		});
	});
}

export default class MyPlugin extends Plugin {
	settings: MyPluginSettings;
	async onload() {
		this.addCommand({
			id: "pplxsearch",
			name: "Prompt selection",
			editorCallback: (editor: Editor, view: MarkdownView) => {
				let selection = editor.getSelection();
				let line = editor.getCursor().line;
				editor.replaceSelection("`Generating...`");
				perplexity(selection, false).then((response) => {
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
				perplexity(selection, true).then((response) => {
					editor.setLine(line, "");
					editor.setValue(editor.getValue() + response);
				});
			},
		});
	}

	onunload() {}
}
