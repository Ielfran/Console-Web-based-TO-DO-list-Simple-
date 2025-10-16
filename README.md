Task Tracker CLI
A simple command-line interface (CLI) tool for managing tasks. Organize your tasks into three categories: To-Do, In Progress, and Done. Tasks are stored in a tasks.json file in your current working directory.
Features

Add tasks to the To-Do list
List all tasks across To-Do, In Progress, and Done categories
Move tasks from To-Do to In Progress
Mark tasks as Done from In Progress
Clear completed tasks or reset all tasks
Color-coded output for better readability

Installation

Ensure you have Node.js installed.
Clone or download this repository.
Navigate to the project directory and run:npm install


Run the CLI using node index.js from the project directory.

Usage
Run commands using node index.js in the project directory. The tasks are saved in a tasks.json file in the current directory.
Commands

Add a task:
node index.js add "Write project proposal"

Adds a task to the To-Do list.

List all tasks:
node index.js list

Alias: node index.js lsDisplays all tasks in To-Do, In Progress, and Done lists.

Start a task:
node index.js start 1

Moves a task from To-Do to In Progress by its ID (shown in the list command).

Mark a task as done:
node index.js done 1

Moves a task from In Progress to Done by its ID.

Clear completed tasks:
node index.js clear

Removes all tasks from the Done list.

Clear all tasks:
node index.js clear-all

Resets all tasks in all lists.


Example
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

Dependencies

commander: For parsing command-line arguments
chalk: For colorful console output
Node.js built-in modules: fs, path

Notes

The tasks.json file is automatically created if it doesn't exist.
Task IDs are based on the order shown in the list command (1-based indexing).
Invalid task IDs will result in an error message.
Use this tool in any directory where you want to manage tasks; a new tasks.json will be created there if needed.

License
MIT License. See LICENSE for details.
