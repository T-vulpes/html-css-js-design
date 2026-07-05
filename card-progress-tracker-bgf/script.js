const checkboxes = document.querySelectorAll('.task-check');
const progressCircle = document.getElementById('progress-circle');
const progressText = document.getElementById('progress-text');

function updateProgress() {
    const totalTasks = checkboxes.length;
    const completedTasks = document.querySelectorAll('.task-check:checked').length;
    const percentage = Math.round((completedTasks / totalTasks) * 100);    
    const degrees = (percentage / 100) * 360;
    progressCircle.style.setProperty('--progress', `${degrees}deg`);
    progressText.innerText = `${percentage}%`;
    if (percentage === 100) {
        progressCircle.style.boxShadow = "0 0 40px rgba(0, 255, 204, 0.6)";
    } else {
        progressCircle.style.boxShadow = "0 0 20px rgba(0, 255, 204, 0.2)";
    }
}

checkboxes.forEach(box => {
    box.addEventListener('change', updateProgress);
});