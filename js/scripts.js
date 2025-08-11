// Simple countdown timer example for quiz-attempt.html
document.addEventListener("DOMContentLoaded", function () {
    const timerEl = document.getElementById("timer");
    if (timerEl) {
        let timeLeft = 30 * 60; // 30 mins in seconds
        const timerInterval = setInterval(() => {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerEl.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
            if (timeLeft > 0) {
                timeLeft--;
            } else {
                clearInterval(timerInterval);
                alert("Time is up! Submitting quiz...");
                window.location.href = "results.html";
            }
        }, 1000);
    }
});
