const form = document.getElementById('resume-form') as HTMLFormElement;
const responseMessage = document.getElementById('response-message') as HTMLDivElement;
const resumeContent = document.getElementById('resume-content') as HTMLDivElement;
const editButton = document.getElementById('edit-response') as HTMLButtonElement;

// Function to display resume
function displayResume() {
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

  const resumeContentHTML = `
    <h3>${name}</h3>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    <h4>Education</h4>
    <p>${education}</p>
    <h4>Work Experience</h4>
    <p>${workExperience}</p>
    <h4>Skills</h4>
    <p>${skills}</p>
  `;

  resumeContent.innerHTML = resumeContentHTML;
}

// Handle form submission
form.addEventListener('submit', (event) => {
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
  editButton.addEventListener('click', () => {
    if (responseMessage) {
      responseMessage.style.display = 'none';
    }
    if (form) {
      form.style.display = 'block';
    }
    resumeContent.innerHTML = ''; // Clear the displayed resume
  });
}
