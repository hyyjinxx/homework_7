// Step 2: Show Alert When Resume is Downloaded
let hasDownloadedResume = false;

document.querySelector('.resume').addEventListener('click', function() {
    if (!hasDownloadedResume) {
        alert("Your resume is downloaded successfully!");
        hasDownloadedResume = true; // Prevent multiple alerts
    }
});

// Step 4: Display Personalized Greeting
function showGreeting(name) {
    return "Hello, my name is " + name + "! Welcome to my portfolio!";
}

const greetingElement = document.getElementById("greeting");
const userName = "Allyson Wiedoff"; // You can change this to your name
greetingElement.textContent = showGreeting(userName);

// Step 5: Calculate Days Until Deadline
function daysUntilDeadline(deadline) {
    const currentDate = new Date();
    const deadlineDate = new Date(deadline);
    const timeDiff = deadlineDate - currentDate;
    const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Convert ms to days
    return daysLeft;
}

// Example project deadline (you can change this)
const projectDeadline = "2025-06-30";
console.log("Days until project deadline: " + daysUntilDeadline(projectDeadline));