# odin-rock-paper-scissors
# 🗿 Rock Paper Scissors (UI Edition)

This project is an update to my original console-based Rock Paper Scissors game, now featuring a full graphical user interface (UI) built with HTML, CSS, and JavaScript. This was a key project in The Odin Project's curriculum to practice DOM manipulation and the fundamentals of a Git feature-branch workflow.

**Live Demo:** [Link to your live GitHub Pages site]



## ✨ Features

* **Interactive UI:** Play the game by clicking one of three buttons (Rock, Paper, Scissors).
* **Real-Time Results:** A results `div` displays the outcome of each round ("You win! Paper beats Rock").
* **Running Score:** The UI keeps and displays a running score for both the player and the computer.
* **First-to-Five:** The game continues until one player reaches 5 points.
* **Winner Announcement:** Once a player wins, the game announces the overall winner and stops until the page is reloaded.

---

## 🛠️ Technologies Used

* **HTML5:** Provides the core structure, including the buttons and display area.
* **CSS3:** Used for all styling to make the game visually appealing.
* **JavaScript (ES6+):** Powers all the game logic, event handling, and DOM manipulation.
* **Git & GitHub:** Used extensively for version control.

---

## 🧠 Learning Objectives

This project was a major step up from the console-only version and focused on several key areas:

* **DOM Manipulation:** The biggest takeaway was refactoring the entire game logic to interact with the DOM. This involved:
    * Removing all `prompt()` and `console.log()` calls.
    * Using `document.querySelector` to target elements.
    * Dynamically changing text content (`.textContent`) to display scores and results.

* **Event Listeners:** Learned to attach `addEventListener` to the buttons to trigger the `playRound` function, making the game interactive.

* **Code Refactoring:** A significant portion of the original code had to be re-written to handle the new event-driven, stateful nature of a UI game (e.g., managing the score in global variables).

* **Git Feature Branch Workflow:** This project was a practical exercise in using Git as a developer. The entire UI was built on a separate **`rps-ui`** branch. The process involved:
    1.  Creating a new branch: `git checkout -b rps-ui`
    2.  Committing all new features to this branch.
    3.  Merging the completed branch back into `main`: `git checkout main` -> `git merge rps-ui`
    4.  Pushing the updated `main` branch to the remote repo.
    5.  Cleaning up by deleting the feature branch locally (`git branch -d`) and remotely (`git push origin --delete`).
