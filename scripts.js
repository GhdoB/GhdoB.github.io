const answers = [
    "FLAG{YouFoundMe}", "flag2", "flag3", "flag4", "flag5",
    "flag6", "flag7", "flag8", "flag9", "flag10"
];

let completedTasks = 0;  // Track completed tasks

// Function to check if the user's answer is correct
function checkAnswer(taskNumber) {
    const userAnswer = document.getElementById('task' + taskNumber).value.trim();
    const feedbackElement = document.getElementById('task' + taskNumber + '-feedback');

    if (userAnswer === answers[taskNumber - 1]) {
        feedbackElement.textContent = 'Correct Flag';
        feedbackElement.className = 'feedback green';
        feedbackElement.style.fontWeight = 'bold';
        completedTasks++;
    } else {
        feedbackElement.textContent = 'Wrong Flag';
        feedbackElement.className = 'feedback red';
    }

    // If all tasks are completed correctly, redirect to the congratulations page
    if (completedTasks === 10) {
        window.location.href = 'congratulations.html';
    }
}

// Attach event listeners to each submit button
for (let i = 1; i <= 10; i++) {
    document.getElementById('submit-task' + i).addEventListener('click', function () {
        checkAnswer(i);
    });
}
