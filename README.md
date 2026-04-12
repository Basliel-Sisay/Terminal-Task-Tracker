<h1>Terminal-Task-Tracker (Day 3-6)</h1>

<h2>Overview</h2>

<p>A professional Command Line Interface (CLI) utility built with Node.js. This tool is globally accessible, allowing you to manage your task workflow from any directory on your system using persistent JSON storage.</p>

<p><strong> <ins>Day 3</ins> </strong> marked the birth of the Terminal-Task-Tracker.I moved away from temporary variables and implemented Local Persistence using the Node.js fs (File System) module. This phase established the "Create, Read, Update, Delete" (CRUD) cycle, allowing tasks to survive even after the terminal session was closed.

- Focus: Initializing the task.json database and building the manager.js core logic.

- Key Achievement: Successfully parsing and stringifying JSON data to maintain state.</p>

<p> <strong><ins>On Day 4</ins></strong>, I transitioned the tracker from a folder specific script into a Global System Utility. By refactoring the file path logic from relative to absolute (using __dirname) and utilizing npm link, we enabled the track command to be executed from any directory in the Windows/WSL environment.

- Focus: Environment variables, global symlinks, and path resolution.

- Key Achievement: Decoupling the script from the source folder, allowing for a smooth user experience across the entire OS.</p>

<p><strong><ins>On Day 5</ins></strong> focused on Data Enrichment and Terminal Visualization.I upgraded the internal data schema to track when tasks are created and implemented a logic based progress bar to visualize productivity directly in the command line.</p>

<p><strong><ins>On Day 6</ins></strong> focused on Database Maintenance and Schema Integrity. I implemented a "Prune" feature that allows for mass deletion of completed tasks while simultaneously reindexing the remaining tasks to ensure a continuous, gap free numbering system in the CLI.</p>

<h2>Features</h2>

- <strong>Global Access</strong>: Use the track command anywhere in your terminal via npm link.

- <strong>Intelligent Pathing</strong>: Utilizes __dirname and path.join to ensure data persistence in a central location, regardless of where the command is executed.

- <strong>Persistence</strong>: Automated CRUD operations synced to a local task.json database.

- <strong>Privacy First</strong>: Configuration includes .gitignore to keep your personal task data off public repositories.

- <strong>Case Insensitive</strong>: User-friendly command processing.

- <strong>Temporal Tracking</strong>: Every task now includes a CreatedAt timestamp using the system's local date format.

- <strong>Progress Analytics</strong>: A dynamic progress bar [████░░░░░░] that calculates the ratio of completed vs. total tasks.

- <strong>Legacy Support</strong>: Implementation of a "fallback" system to handle older tasks that don't have metadata.

<h2>Updated Data Schema</h2>

Tasks are now stored with the following structure in task.json:

<pre>
   {
  "id": 5,
  "Name": "Finish Day 5 Documentation",
  "Completed": false,
  "CreatedAt": "11/04/2026"
}
</pre>

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

<h3>For Day 3</h3>

![](https://i.ibb.co/k6KL2jRb/Screenshot-2026-04-09-133402.png)

![](https://i.ibb.co/jZvFDFQM/Screenshot-2026-04-09-133429.png)

<h3>For Day 4/5</h3>

![]( https://i.ibb.co/279rjbcD/Screenshot-2026-04-11-230805.png)

<h3>For Day 6</h3>

![](https://i.ibb.co/z095yqN/Screenshot-2026-04-12-193706.png)

<h2>Status</h2>

<h3>For Day 3</h3>

![](https://i.ibb.co/Ps3KHtvy/Screenshot-2026-04-09-133331.png)

<h3>Day 4/5</h3>

![](https://i.ibb.co/VdxKJL6/Screenshot-2026-04-11-230856.png)

<h3>Day 6</h3>

![](https://i.ibb.co/DgT7PFBM/Screenshot-2026-04-12-200325.png)

<h2>What I Learned (Day 3 Challenge)</h2>

This project was part of a 30-day coding challenge. Key concepts mastered include:

- <strong><ins>Node.js File System (fs)</ins></strong>: Reading and writing JSON files synchronously

- <strong><ins>Module Exports</strong></ins>: Separating logic into different files for better maintainability

- <strong><ins>Error Handling</strong></ins>: Utilizing try/catch blocks to prevent application crashes

<h2>What I Learned (Day 4 Refactor)</h2>

This phase focused on Software Distribution and System Architecture:

- <strong><ins>Global Binaries</strong></ins>: Using the bin property in package.json to create custom CLI commands

- <strong><ins>Absolute vs. Relative Paths</strong></ins>: Implementing __dirname and the path module to prevent data fragmentation

Environment Configuration: Using the #!/usr/bin/env node shebang for cross-platform script execution

- <strong><ins>Git Security</strong></ins>: Managing .gitignore and git rm --cached to separate source code from user data

<h2>What I Learned (Day 5 Enhancement)</h2>

- <strong><ins>Data Schema Evolution</strong></ins>: I learned how to "upgrade" an existing database structure. By adding the CreatedAt property, I understood that as an application evolves, the data objects must become more complex to provide more value

- <strong><ins>Handling Legacy Data</strong></ins>: I implemented "fallback logic" using the logical OR (||) operator. This taught me how to manage "Grandfathered" data that doesn't have new properties, ensuring the app doesn't break when reading old files

- <strong><ins>CLI Visualization</strong></ins>: I explored the basics of Terminal UI (TUI) design. By using the .repeat() method and specific Unicode characters (█ and ░), I learned how to translate raw numbers into a visual progress dashboard

- <strong><ins>Higher-Order Array Methods</strong></ins>: I practiced using .filter() to perform real-time analytics. This allowed me to derive a "Completed vs. Total" ratio without manually looping through the array with a for loop

- <strong><ins>Mathematical Mapping</strong></ins>: I learned how to map a variable percentage (0-100) to a fixed-width UI element (10 blocks). This involved using Math.round() to ensure the bar fills up in accurate, discrete increments

<h2>What I Learned (Day 6 Database Optimization)</h2>
   
- <strong><ins>Inverted Filtering</ins></strong> : Instead of looping to delete items, I learned to filter for the items I want to keep, which is more efficient for JSON databases

- <strong><ins>Array Re-indexing</ins></strong> : I mastered the use of .map(task, index) to dynamically reassess IDs, ensuring the UI remains clean even after data is removed

- <strong><ins>Command Routing</ins></strong>: I expanded the CLI entry point to handle specialized maintenance commands without disrupting the core CRUD flow.
