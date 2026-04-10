<h1>Terminal-Task-Tracker (Day 3/4)</h1>

<p>A professional Command Line Interface (CLI) utility built with Node.js. This tool is globally accessible, allowing you to manage your task workflow from any directory on your system using persistent JSON storage.</p>

<h2>Features (Enhanced)</h2>

- <strong>Global Access</strong>: Use the track command anywhere in your terminal via npm link.

- <strong>Intelligent Pathing</strong>: Utilizes __dirname and path.join to ensure data persistence in a central location, regardless of where the command is executed.

- <strong>Persistence</strong>: Automated CRUD operations synced to a local task.json database.

- <strong>Privacy-First</strong>: Configuration includes .gitignore to keep your personal task data off public repositories.

- <strong>Case-Insensitive</strong>: User-friendly command processing.

<h2> Tech Stack </h2>

- <strong>Runtime</strong>: Node.js (JavaScript)

- <strong>Architecture</strong>: Global CLI Binaries 

- <strong>Version Control</strong>: git and gitHub

- <strong> Storage</strong>: JSON (Flat-file database)

- <strong>Environment</strong>: Windows Subsystem for Linux 

<h2>Project Structure</h2>

<pre>
terminal_task_tracker/
├── app.js          # CLI Entry Point; contains the Node "Shebang"
├── manager.js      # Core Engine; manages absolute pathing and JSON I/O
├── task.json       # Central Database (Local only)
├── package.json    # Project metadata & Global Bin configuration
├── .gitignore      # Prevents personal task data from being tracked
├── README.md       # Project documentation
└── LICENSE         # Legal usage rights
</pre>

<h2>Getting Started</h2>

<h3>1. Prerequisites </h3> 

Ensure you have Node.js installed on your machine.

<h3>2. Installation </h3>

Clone the repository and initialize the project:

<pre>
git clone https://github.com/Basliel-Sisay/Terminal-Task-Tracker.git
cd terminal_task_tracker
npm link
</pre>

Note: If you encounter a permission error during <pre>npm link</pre> you may need to run it with <pre>sudo npm link</pre> or check your <pre>npm permissions </pre>

<h3>3. Usage</h3>
   
- Run the application using the following commands:

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
      <td>track add "Complete Day 4"</td>
    </tr>
    <tr>
      <td>list</td>
      <td>View all tasks</td>
      <td>track list</td>
    </tr>
    <tr>
      <td>done</td>
      <td>Toggle completion</td>
      <td>track done 1</td>
    </tr>
    <tr>
      <td>remove</td>
      <td>Delete a task</td>
      <td>track remove 1</td>
    </tr>
  </tbody>
</table>

<h2>Output</h2>

![](https://i.ibb.co/k6KL2jRb/Screenshot-2026-04-09-133402.png)

![](https://i.ibb.co/jZvFDFQM/Screenshot-2026-04-09-133429.png)

<h2>Status</h2>

![](https://i.ibb.co/Ps3KHtvy/Screenshot-2026-04-09-133331.png)

<h2>What I Learned (Day 3 Challenge)</h2>

This project was part of a 30-day coding challenge. Key concepts mastered include:

- <strong><ins>Node.js File System (fs)</ins></strong>: Reading and writing JSON files synchronously

- <strong><ins>Module Exports</strong></ins>: Separating logic into different files for better maintainability

- <strong><ins>Error Handling</strong></ins>: Utilizing try/catch blocks to prevent application crashes

<h2>What I Learned (Day 4 Refactor)</h2>

This phase focused on Software Distribution and System Architecture:

- <strong><ins>Global Binaries</strong></ins>: Using the bin property in package.json to create custom CLI commands.

- <strong><ins>Absolute vs. Relative Paths</strong></ins>: Implementing __dirname and the path module to prevent data fragmentation.

Environment Configuration: Using the #!/usr/bin/env node shebang for cross-platform script execution.

- <strong><ins>Git Security</strong></ins>: Managing .gitignore and git rm --cached to separate source code from user data.
