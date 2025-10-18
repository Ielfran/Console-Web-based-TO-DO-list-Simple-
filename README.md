# Task Tracker CLI ✨

A super simple and simple command-line interface (CLI) tool for managing your tasks. Organize your workflow into **To-Do**, **In Progress**, and **Done** categories, with tasks saved in a `tasks.json` file in your current directory.

---

##  Features

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