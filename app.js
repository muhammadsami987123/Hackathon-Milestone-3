var form = document.getElementById('resume-form');
var responseMessage = document.getElementById('response-message');
var resumeContent = document.getElementById('resume-content');
var editButton = document.getElementById('edit-response');
// Function to display resume
function displayResume() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value;
    var resumeContentHTML = "\n    <h3>".concat(name, "</h3>\n    <p>Email: ").concat(email, "</p>\n    <p>Phone: ").concat(phone, "</p>\n    <h4>Education</h4>\n    <p>").concat(education, "</p>\n    <h4>Work Experience</h4>\n    <p>").concat(workExperience, "</p>\n    <h4>Skills</h4>\n    <p>").concat(skills, "</p>\n  ");
    resumeContent.innerHTML = resumeContentHTML;
}
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Show the response message and hide the form
    if (responseMessage) {
        responseMessage.style.display = 'block';
    }
    if (form) {
        form.style.display = 'none';
    }
    // Display the resume
    displayResume();
});
// Handle editing response
if (editButton) {
    editButton.addEventListener('click', function () {
        if (responseMessage) {
            responseMessage.style.display = 'none';
        }
        if (form) {
            form.style.display = 'block';
        }
        resumeContent.innerHTML = ''; // Clear the displayed resume
    });
}
