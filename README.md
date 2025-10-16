# Task Tracker CLI ✨

![Node.js](https://img.shields.io/badge/Node.js-v16+-green?logo=node.js)
![License](https://img.shields.io/badge/License-MIT-blue)
![Version](https://img.shields.io/badge/Version-1.0.0-brightgreen)

A sleek and simple command-line interface (CLI) tool for managing your tasks. Organize your workflow into **To-Do**, **In Progress**, and **Done** categories, with tasks saved in a `tasks.json` file in your current directory. 🚀

---

## 🌟 Features

- 📝 Add tasks to your To-Do list
- 📋 View all tasks across To-Do, In Progress, and Done
- 🚀 Move tasks from To-Do to In Progress
- ✅ Mark tasks as Done
- 🧹 Clear completed tasks or reset everything
- 🎨 Color-coded console output for clarity

---

## 🛠️ Installation

1. Ensure you have [Node.js](https://nodejs.org/) (v16 or higher) installed.
2. Clone or download this repository:
   ```bash
   git clone <repository-url>
   ```
3. Navigate to the project directory:
   ```bash
   cd task-tracker
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Run the CLI using:
   ```bash
   node index.js
   ```

---

## 🚀 Usage

Run commands with `node index.js` in the project directory. Tasks are stored in a `tasks.json` file created automatically in your current directory.

### 📚 Available Commands

| Command | Alias | Description |
|---------|-------|-------------|
| `node index.js add "<task>"` | - | Add a task to the To-Do list |
| `node index.js list` | `ls` | List all tasks in all categories |
| `node index.js start <id>` | - | Move a task from To-Do to In Progress |
| `node index.js done <id>` | - | Move a task from In Progress to Done |
| `node index.js clear` | - | Clear all tasks from the Done list |
| `node index.js clear-all` | - | Reset all tasks in all lists |

### Example Workflow

```bash
$ node index.js add "Finish CLI documentation"
$ node index.js add "Test CLI commands"
$ node index.js list
------- Your Tasks -------
-- To-Do --
 1. Finish CLI documentation
 2. Test CLI commands

-- In Progress --
    (No Tasks)

-- Done --
    (No Tasks)

$ node index.js start 1
🚀 Started Task: "Finish CLI documentation"

$ node index.js done 1
✅ Completed Task: "Finish CLI documentation"

$ node index.js list
------- Your Tasks -------
-- To-Do --
 1. Test CLI commands

-- In Progress --
    (No Tasks)

-- Done --
 1. Finish CLI documentation
```

---

## 📦 Dependencies

- **[commander](https://www.npmjs.com/package/commander)**: Parses command-line arguments
- **[chalk](https://www.npmjs.com/package/chalk)**: Adds colorful console output
- **Node.js built-in modules**: `fs`, `path`

---

## ℹ️ Notes

- A `tasks.json` file is created automatically if it doesn't exist.
- Task IDs are 1-based, as shown in the `list` command.
- Invalid task IDs will display an error message.
- Use the tool in any directory; a new `tasks.json` will be created there.

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

*Built with 💻 and ☕ to keep your tasks organized!*
