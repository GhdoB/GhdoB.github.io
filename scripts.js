const answers = [
    "flag1", "flag2", "flag3", "flag4", "flag5",
    "flag6", "flag7", "flag8", "flag9", "flag10"
];

document.getElementById('checkButton').addEventListener('click', function () {
    let allCorrect = true;

    for (let i = 1; i <= 10; i++) {
        const userAnswer = document.getElementById('task' + i).value;
        const feedbackElement = document.getElementById('task' + i + '-feedback');

        if (userAnswer === answers[i - 1]) {
            feedbackElement.textContent = 'Correct Flag';
            feedbackElement.className = 'feedback green';
        } else {
            feedbackElement.textContent = 'Wrong Flag';
            feedbackElement.className = 'feedback red';
            allCorrect = false;
        }
    }

    if (allCorrect) {
        window.location.href = 'congratulations.html';
    }
});

document.getElementById('submitNickname').addEventListener('click', function () {
    const nickname = document.getElementById('nickname').value;
    if (nickname) {
        let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
        leaderboard.push(nickname);
        localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
        window.location.href = 'leaderboard.html';
    }
});

window.onload = function () {
    if (window.location.pathname === '/leaderboard.html') {
        const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
        const leaderboardList = document.getElementById('leaderboard');
        leaderboard.forEach(player => {
            const listItem = document.createElement('li');
            listItem.textContent = player;
            leaderboardList.appendChild(listItem);
        });
    }
};
