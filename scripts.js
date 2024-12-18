
const encodedAnswers = [
    "RkxBR3tZb3VGb3VuZE1lfQ==",    
    "RkxBR3tRUkZMNEdDMEQzfQ==",    
    "RmxhZ3tkM2MwZGVtZX0=",        
    "RmxhZ3tJc24ndFRoYXRPYnZpb3VzfQ==",  
    "RkxBR3tIMWRkZW59",            
    "RkxBR3tDQUVTQVJ9",            
    "RkxBR3tHT09ESjBCfQ==",        
    "RkxBR3tDNHB0dXJlVGgzRmw0Z30=", 
    "RkxBR3tOMWMzfQ==",            
    "RkxBR3tXYXNu4oCYdFJlYWxseUhhcmR9"   
];

let completedTasks = 0;  


const answers = encodedAnswers.map(atob);


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


    if (completedTasks === 10) {
        window.location.href = 'congratulations.html';
    }
}


for (let i = 1; i <= 10; i++) {
    document.getElementById('submit-task' + i).addEventListener('click', function () {
        checkAnswer(i);
    });
}
