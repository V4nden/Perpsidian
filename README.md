# Perpsidian

Use [PerplexityAI](https://perplexity.ai) inside the Obsidian.MD app

Basicly what i did here is using unofficial api wrapper written by [nathanrchn](https://github.com/nathanrchn/) in python, so you have to install it.

## Installation

First of all, install Python 3.12.0>. After that, run following command:

```bash
pip install git+https://github.com/nathanrchn/perplexityai.git
```

Now install Perpsidian:

1. Go to releases page and download `main.js`, `manifest.json` and `main.py`
2. Create folder in {{obsidian_vault}}/.obsidian/plugins
3. Put those files here
4. Restart Obsidian
5. **You're done!**

## Usage

At the moment there's two commands you can see in Command Pallete (`ctrl+p`)

1. Perpsidian: Prompt selection
2. Perpsidian: Prompt selection (return with links)
3. Perpsidian: Prompt every line in selection
4. Perpsidian: Prompt every line in selection (return with links)

First command will replace your selection with answer from Perplexity, second will do the same thing but adds links following the answer below.

## Example usage

<details open>
<summary>Perpsidian: Prompt selection</summary>
<br>
```
Prompt: What is Obsidian.MD?
```

> Obsidian is a personal knowledge base and note-taking software that operates on Markdown files. It allows users to make internal links for notes and visualize the connections as a graph. The software is designed to help users organize and structure their thoughts and knowledge in a flexible, non-linear way. It is available on various platforms, including Windows, macOS, Android, Linux, and iOS. Obsidian is free for personal use, with commercial licenses available for purchase. It is known for its features such as the ability to turn notes into an online wiki, knowledge base, documentation, or digital garden, and it is constantly being improved by the developers with new releases. The software uses military-grade AES-256 encryption to secure notes, and users can customize it by adding plugins and themes to extend its functionality.

</details>

<details open>
<summary>Perpsidian: Prompt selection (return with links)</summary>
<br>
```
Prompt: What is Obsidian.MD?
```

> Obsidian is a personal knowledge base and note-taking software that operates on Markdown files. It allows users to make internal links for notes and visualize the connections as a graph. The software is designed to help users organize and structure their thoughts and knowledge in a flexible, non-linear way. It is available on various platforms, including Windows, macOS, Android, Linux, and iOS. Obsidian is free for personal use, with commercial licenses available for purchase. It is known for its features such as the ability to turn notes into an online wiki, knowledge base, documentation, or digital garden, and it is constantly being improved by the developers with new releases. The software uses military-grade AES-256 encryption to secure notes, and users can customize it by adding plugins and themes to extend its functionality.

[Obsidian (software) - Wikipedia](<https://en.wikipedia.org/wiki/Obsidian_(software)>)
[Obsidian - Sharpen your thinking](https://obsidian.md)
[A beginner's guide to using the Obsidian Notes application](https://www.marclittlemore.com/beginners-guide-note-taking-obsidian/)
[Obsidian Vs. Notion: Which Note-taking Tool is Better? | ClickUp](https://clickup.com/blog/obsidian-vs-notion/)
[What is Obsidian?](https://www.reddit.com/r/ObsidianMD/comments/yreqfo/what_is_obsidian/?rdt=46734)

</details>

<details open>
<summary>Perpsidian: Prompt every line in selection</summary>
<br>
```
Prompt: 
What is Obsidian.MD?
Obsidian.MD advantages over notion 
Why the Cola tastes better that Pepsi?
```

# What is Obsidian.MD?

Obsidian.MD is a private and flexible writing app designed to adapt to the way users think and organize their thoughts and knowledge. It is a personal knowledge base and note-taking software application that operates on Markdown files, allowing users to make internal links for notes and visualize the connections as a graph. Key features of Obsidian.MD include:

- **Cross-platform compatibility**: Obsidian.MD is available for Windows, macOS, Android, Linux, and iOS devices.
- **Military-grade encryption**: Users can access their notes on any device secured with AES-256 encryption.
- **Customizable graph view**: The graph view allows users to visualize the connections between their notes, providing a unique way to understand and organize their thoughts.
- **Lightweight and local storage**: Obsidian.MD is a lightweight tool that simplifies the gathering and storing of information, offering a robust way of linking documents together and centralizing all your notes in one place.

Obsidian.MD is free for personal use, with commercial licenses available for pay. It has been well-received by users for its ability to help them organize their thoughts, create new ideas, and visualize connections between their notes.
websocket error: Connection timed out

---

# Obsidian.MD advantages over notion

Obsidian and Notion are both popular note-taking tools, each with its own advantages. Here are some key advantages of Obsidian over Notion:

- **Complete control over data**: Obsidian allows you to store all of your notes locally, while Notion is only available as a cloud-hosted solution.

- **Customization**: Obsidian offers the ability to customize your workspace to your specific needs, and it uses a knowledge graph structure to connect notes through bi-directional thinking.

- **Pricing**: Obsidian offers all of its features for free forever for personal use and charges only $50 per person per year for commercial use, which is significantly less than Notion's pricing.

However, it's important to note that Notion is great for team collaboration, project management, and note-taking, and it offers more project management features and templates than Obsidian. Therefore, the choice between Obsidian and Notion depends on your specific needs and preferences.

---

# Why the Cola tastes better that Pepsi?

The difference in taste between Coca-Cola and Pepsi can be attributed to their ingredients. Coca-Cola does not contain citric acid and uses phosphoric acid instead, giving it a smoother, more mellow flavor with a vanilla profile. On the other hand, Pepsi contains citric acid, which gives it a more citrusy and tart flavor, making it sweeter and more zesty with an upfront zing. Some people prefer Pepsi due to its sweeter taste, while others prefer the smoother flavor of Coca-Cola.

</details>

<details open>
<summary>Perpsidian: Prompt every line in selection (return with links)</summary>
<br>
```
Prompt: 
What is Obsidian.MD?
Obsidian.MD advantages over notion 
Why the Cola tastes better that Pepsi?
```

# What is Obsidian.MD?

Obsidian.MD is a private and flexible writing app designed to adapt to the way users think and organize their thoughts and knowledge. It is a personal knowledge base and note-taking software application that operates on Markdown files, allowing users to make internal links for notes and visualize the connections as a graph. Key features of Obsidian.MD include:

- **Cross-platform compatibility**: Obsidian.MD is available for Windows, macOS, Android, Linux, and iOS devices.
- **Military-grade encryption**: Users can access their notes on any device secured with AES-256 encryption.
- **Customizable graph view**: The graph view allows users to visualize the connections between their notes, providing a unique way to understand and organize their thoughts.
- **Lightweight and local storage**: Obsidian.MD is a lightweight tool that simplifies the gathering and storing of information, offering a robust way of linking documents together and centralizing all your notes in one place.

Obsidian.MD is free for personal use, with commercial licenses available for pay. It has been well-received by users for its ability to help them organize their thoughts, create new ideas, and visualize connections between their notes.

[Obsidian - Sharpen your thinking](https://obsidian.md)
[Obsidian (software) - Wikipedia](<https://en.wikipedia.org/wiki/Obsidian_(software)>)
[What is Obsidian? : r/ObsidianMD - Reddit](https://www.reddit.com/r/ObsidianMD/comments/yreqfo/what_is_obsidian/)
[What is Obsidian.md and why you should use it - cylab.be](https://cylab.be/blog/149/what-is-obsidianmd-and-why-you-should-use-it)
[A beginner's guide to using the Obsidian Notes application - Marc Littlemore](https://www.marclittlemore.com/beginners-guide-note-taking-obsidian/)

---

# Obsidian.MD advantages over notion

Obsidian and Notion are both popular note-taking tools, each with its own advantages. Here are some key advantages of Obsidian over Notion:

- **Complete control over data**: Obsidian allows you to store all of your notes locally, while Notion is only available as a cloud-hosted solution.

- **Customization**: Obsidian offers the ability to customize your workspace to your specific needs, and it uses a knowledge graph structure to connect notes through bi-directional thinking.

- **Pricing**: Obsidian offers all of its features for free forever for personal use and charges only $50 per person per year for commercial use, which is significantly less than Notion's pricing.

However, it's important to note that Notion is great for team collaboration, project management, and note-taking, and it offers more project management features and templates than Obsidian. Therefore, the choice between Obsidian and Notion depends on your specific needs and preferences.

[Notion vs Obsidian ? : r/productivity - Reddit](https://www.reddit.com/r/productivity/comments/zvojcq/notion_vs_obsidian/)
[Obsidian Vs. Notion: Which Note-taking Tool is Better? | ClickUp](https://clickup.com/blog/obsidian-vs-notion/)
[Obsidian vs Notion: A Side-by-Side Comparison - Nuclino](https://www.nuclino.com/solutions/obsidian-vs-notion)
[Obsidian vs Notion � Which Tool Is Better in 2023? - Plaky](https://plaky.com/blog/obsidian-vs-notion/)
[Obsidian vs. Notion (2023): Which Tool Is Better? - TechRepublic](https://www.techrepublic.com/article/obsidian-vs-notion/)

---

# Why the Cola tastes better that Pepsi?

The difference in taste between Coca-Cola and Pepsi can be attributed to their ingredients. Coca-Cola does not contain citric acid and uses phosphoric acid instead, giving it a smoother, more mellow flavor with a vanilla profile. On the other hand, Pepsi contains citric acid, which gives it a more citrusy and tart flavor, making it sweeter and more zesty with an upfront zing. Some people prefer Pepsi due to its sweeter taste, while others prefer the smoother flavor of Coca-Cola.

[The Ingredient That Makes Pepsi And Coke Taste Different](https://www.tastingtable.com/1215616/the-ingredient-that-makes-pepsi-and-coke-taste-different/)
[Yes, Coca-Cola And Pepsi Actually Do Taste Different - The Daily Meal](https://www.thedailymeal.com/1283553/coca-cola-pepsi-actually-taste-different/)
[Coke and Pepsi taste noticeably different : r/unpopularopinion - Reddit](https://www.reddit.com/r/unpopularopinion/comments/mm7vxj/coke_and_pepsi_taste_noticeably_different/)
[What Is the Actual Difference Between Coke and Pepsi? - Sporked](https://sporked.com/article/coke-vs-pepsi/)
[Why Pepsi Is Better Than Coke - Delishably](https://delishably.com/beverages/Why-Pepsi-is-Better-than-Coke)

</details>
# Hope you enjoy!
