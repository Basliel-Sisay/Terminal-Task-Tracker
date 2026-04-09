<h1>Terminal-Task-Tracker</h1>

<p>A lightweight Command Line Interface (CLI) application built with Node.js to manage daily tasks. This project focuses on CRUD operations (Create, Read, Update, Delete) and data persistence using local JSON storage</p>

<h2>Features</h2>

Persistence: All tasks are saved to a local task.json file

CLI Commands: Manage tasks directly from your terminal using process.argv

Case-Insensitive: Commands work whether you type ADD, add, or Add

Error Handling: Built-in protection against missing arguments and invalid commands

<h2>Project Structure</h2>

<pre>
terminal_task_tracker/
├── app.js          # Main entry point; handles CLI arguments and routing
├── manager.js      # Core logic; processes task data and manages JSON I/O
├── task.json       # Local database; stores the persistent task objects
├── package.json    # Project metadata and configuration
├── README.md       # Project documentation and usage guide
└── LICENSE         # Legal usage rights for the repository
</pre>

<h2>Getting Started</h2>

<h3>1. Prerequisites </h3> 
Ensure you have Node.js installed on your machine.

<h3>2. Installation </h3>
Clone the repository and initialize the project:

<pre>
  git clone https://github.com/Basliel-Sisay/Terminal-Task-Tracker.git
  cd terminal_task_tracker
  npm install
</pre>

<h3>3. Usage</h3>
   
Run the application using the following commands:

<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Command</th>
      <th>Action</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>add</td>
      <td>Create a new task</td>
      <td>node app.js add "Learn git"</td>
    </tr>
    <tr>
      <td>list</td>
      <td>View all tasks</td>
      <td>node app.js list</td>
    </tr>
    <tr>
      <td>done</td>
      <td>Toggle completion status</td>
      <td>node app.js done 1</td>
    </tr>
    <tr>
      <td>remove</td>
      <td>Delete a task</td>
      <td>node app.js remove 1</td>
    </tr>
  </tbody>
</table>

<h2>What I Learned (Day 3 Challenge)</h2>

This project was part of a 30-day coding challenge. Key concepts mastered include:

Node.js File System (fs): Reading and writing JSON files synchronously

Module Exports: Separating logic into different files for better maintainability

Error Handling: Utilizing try/catch blocks to prevent application crashes
