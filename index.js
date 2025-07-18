#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { Command } = require('commander');
const chalk = require('chalk');

const TASKS_FILE_PATH = path.join(process.cwd(), 'tasks.json');
const program = new Command();

function createEmptyTasksFile() {
    const defaultContent = {
        todo: [],
        inProgress: [],
        done: []
    };

    try {
        fs.writeFileSync(TASKS_FILE_PATH, JSON.stringify(defaultContent, null, 2), 'utf8');
        console.log(chalk.green('Initialized new tasks.json'));
        return defaultContent;
    } catch (err) {
        console.error(chalk.red('Failed to create tasks.json'), err);
        return null;
    }
}

function loadTasks() {
    try {
        const data = fs.readFileSync(TASKS_FILE_PATH, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        if (err.code === 'ENOENT') {
            return createEmptyTasksFile();
        } else {
            console.error(chalk.red('Error loading tasks:'), err);
            process.exit(1);
        }
    }
}

function saveTasks(tasks) {
    try {
        fs.writeFileSync(TASKS_FILE_PATH, JSON.stringify(tasks, null, 2), 'utf8');
    } catch (err) {
        console.error(chalk.red('Failed to save tasks:'), err);
    }
}

function displayTaskList(title, taskList, colorizer) {
    console.log(colorizer(title));
    if (taskList.length === 0) {
        console.log(chalk.gray('    (No Tasks)'));
    } else {
        taskList.forEach((task, index) => {
            console.log(` ${chalk.cyan(index + 1)}. ${task}`);
        });
    }
    console.log('');
}

// ---- CLI Commands ----

program
    .name('task-tracker')
    .description('A simple CLI for tracking your tasks.')
    .version('1.0.0');

// add
program
    .command('add <task>')
    .description('Add a task to the To-Do list.')
    .action((task) => {
        const tasks = loadTasks();
        tasks.todo.push(task);
        saveTasks(tasks);
        console.log(chalk.green.bold('✅ Task added successfully!'));
    });

// list
program
    .command('list')
    .alias('ls')
    .description('Lists all tasks.')
    .action(() => {
        const tasks = loadTasks();
        console.log(chalk.bold.underline('\n------- Your Tasks -------\n'));
        displayTaskList('-- To-Do --', tasks.todo, chalk.yellow.bold);
        displayTaskList('-- In Progress --', tasks.inProgress, chalk.blue.bold);
        displayTaskList('-- Done --', tasks.done, chalk.green.bold);
    });

// start
program
    .command('start <id>')
    .description('Move a task from To-Do to In Progress.')
    .action((id) => {
        const tasks = loadTasks();
        const taskIndex = parseInt(id, 10) - 1;

        if (isNaN(taskIndex) || taskIndex < 0 || taskIndex >= tasks.todo.length) {
            console.error(chalk.red.bold('❌ Invalid task ID.'));
            return;
        }

        const [task] = tasks.todo.splice(taskIndex, 1);
        tasks.inProgress.push(task);
        saveTasks(tasks);
        console.log(chalk.blue.bold(`🚀 Started Task: "${task}"`));
    });

// done
program
    .command('done <id>')
    .description('Move a task from In Progress to Done.')
    .action((id) => {
        const tasks = loadTasks();
        const taskIndex = parseInt(id, 10) - 1;

        if (isNaN(taskIndex) || taskIndex < 0 || taskIndex >= tasks.inProgress.length) {
            console.error(chalk.red.bold('❌ Invalid task ID.'));
            return;
        }

        const [task] = tasks.inProgress.splice(taskIndex, 1);
        tasks.done.push(task);
        saveTasks(tasks);
        console.log(chalk.green.bold(`✅ Completed Task: "${task}"`));
    });

// clear
program
    .command('clear')
    .description('Clear all tasks from the Done list.')
    .action(() => {
        const tasks = loadTasks();
        tasks.done = [];
        saveTasks(tasks);
        console.log(chalk.yellow.bold('-- Cleared all completed tasks.'));
    });

// clear-all
program
    .command('clear-all')
    .description('Clear all tasks from all lists.')
    .action(() => {
        const tasks = {
            todo: [],
            inProgress: [],
            done: []
        };
        saveTasks(tasks);
        console.log(chalk.yellow.bold('-- Cleared all tasks.'));
    });

program.parse(process.argv);
